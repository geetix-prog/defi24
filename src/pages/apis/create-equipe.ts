import type { APIRoute } from 'astro';
import { createEquipe } from '../../../backend/backend.mjs';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const nom = formData.get('nom') as string;
        const userId = formData.get('userId') as string;
        const logo = formData.get('logo') as File | null;

        if (!nom || !userId) {
            return new Response(JSON.stringify({ error: 'Nom d\'équipe et ID utilisateur requis.' }), {
                status: 400
            });
        }

        const equipe = await createEquipe(nom, userId, logo);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Équipe créée avec succès !',
                equipe: equipe
            }),
            { status: 200 }
        );
    } catch (err) {
        const error = err as Error;
        return new Response(
            JSON.stringify({ error: error.message || 'Erreur lors de la création de l\'équipe.' }),
            { status: 500 }
        );
    }
};
