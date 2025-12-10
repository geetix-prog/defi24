import type { APIRoute } from 'astro';
import { joinEquipe } from '../../../backend/backend.mjs';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { equipeId, userId } = await request.json();

        if (!equipeId || !userId) {
            return new Response(JSON.stringify({ error: 'ID équipe et ID utilisateur requis.' }), {
                status: 400
            });
        }

        const equipe = await joinEquipe(equipeId, userId);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Vous avez rejoint l\'équipe avec succès !',
                equipe: equipe
            }),
            { status: 200 }
        );
    } catch (err) {
        const error = err as Error;
        return new Response(
            JSON.stringify({ error: error.message || 'Erreur lors de la jonction à l\'équipe.' }),
            { status: 500 }
        );
    }
};
