import type { APIRoute } from 'astro';
import pb from '../../utils/pb.ts';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const userId = formData.get('userId') as string;
        const nom = formData.get('nom') as string;
        const lien = formData.get('lien') as string;

        if (!userId) {
            return new Response(JSON.stringify({ error: 'ID utilisateur requis.' }), {
                status: 400
            });
        }

        if (!nom || !lien) {
            return new Response(JSON.stringify({ error: 'Le nom du projet et le lien sont requis.' }), {
                status: 400
            });
        }

        try {
            new URL(lien);
        } catch {
            return new Response(JSON.stringify({ error: 'Le lien doit être une URL valide.' }), {
                status: 400
            });
        }

        const creation = await pb.collection('depot').create({
            nom: nom,
            lien: lien,
            user: userId
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Projet créé avec succès !',
                creation: creation
            }),
            { status: 200 }
        );
    } catch (err) {
        const error = err as Error;
        return new Response(
            JSON.stringify({ error: error.message || 'Erreur lors de la création du projet.' }),
            { status: 500 }
        );
    }
};
