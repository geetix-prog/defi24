import type { APIRoute } from "astro";

import pb from "../../utils/pb.ts";

export const POST: APIRoute = async ({ request }) => {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return new Response(JSON.stringify({ error: 'Champs requis manquants.' }), {
                status: 400
            });
        }

        const authData = await pb.collection('users').authWithPassword(email, password);

        return new Response(
            JSON.stringify({
                token: authData.token,
                user: {
                    id: authData.record.id,
                    avatar: authData.record.avatar,
                    email: authData.record.email,
                    nom: authData.record.nom,
                    prenom: authData.record.prenom
                }
            }),
            { status: 200 }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ error: 'Email ou mot de passe invalide.' }),
            { status: 401 }
        );
    }
};
