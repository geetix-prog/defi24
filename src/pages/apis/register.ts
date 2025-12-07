import type { APIRoute } from 'astro';
import { addUser } from '../../../backend/backend.mjs';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const passwordConfirm = formData.get('passwordConfirm') as string;
        const nom = formData.get('nom') as string;
        const prenom = formData.get('prenom') as string;
        const promo = formData.get('promo') as string;
        const avatar = formData.get('avatar') as File | null;

        if (!email || !password || !nom || !prenom || !promo) {
            return new Response(JSON.stringify({ error: 'Tous les champs requis doivent être remplis.' }), {
                status: 400
            });
        }

        if (password !== passwordConfirm) {
            return new Response(JSON.stringify({ error: 'Les mots de passe ne correspondent pas.' }), {
                status: 400
            });
        }

        const user = await addUser({ email, password, nom, prenom, promo, avatar });

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Inscription réussie !',
                user: {
                    id: user.id,
                    email: user.email,
                    nom: user.nom,
                    prenom: user.prenom,
                    promo: user.promo
                }
            }),
            { status: 200 }
        );
    } catch (err) {
        const error = err as Error;
        return new Response(
            JSON.stringify({ error: error.message || 'Erreur lors de l\'inscription.' }),
            { status: 500 }
        );
    }
};
