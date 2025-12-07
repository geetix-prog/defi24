import type { APIRoute } from 'astro';
import pb from '../../../src/utils/pb.ts';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const userId = formData.get('userId') as string;
        const prenom = formData.get('prenom') as string;
        const nom = formData.get('nom') as string;
        const email = formData.get('email') as string;
        const promo = formData.get('promo') as string;
        const confirmPassword = formData.get('confirmPassword') as string;

        if (!userId || !prenom || !nom || !email || !promo || !confirmPassword) {
            return new Response(JSON.stringify({ error: 'Tous les champs requis doivent être remplis, y compris le mot de passe de confirmation.' }), {
                status: 400
            });
        }

        const currentUser = await pb.collection('users').getOne(userId);
        
        try {
            await pb.collection('users').authWithPassword(currentUser.email, confirmPassword);
        } catch (authError) {
            return new Response(JSON.stringify({ error: 'Mot de passe incorrect. Veuillez réessayer.' }), {
                status: 401
            });
        }

        const updateData: any = {
            prenom,
            nom,
            email,
            promo
        };

        const user = await pb.collection('users').update(userId, updateData);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Informations mises à jour avec succès !',
                user: user
            }),
            { status: 200 }
        );
    } catch (err) {
        const error = err as Error;
        return new Response(
            JSON.stringify({ error: error.message || 'Erreur lors de la mise à jour du profil.' }),
            { status: 500 }
        );
    }
};
