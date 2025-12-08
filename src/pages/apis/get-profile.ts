import type { APIRoute } from 'astro';
import pb from '../../../src/utils/pb.ts';

export const GET: APIRoute = async ({ request }) => {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get('userId');

        if (!userId) {
            return new Response(JSON.stringify({ error: 'ID utilisateur requis.' }), {
                status: 400
            });
        }

        const user = await pb.collection('users').getOne(userId);
        
        if (user.avatar) {
            user.avatar_url = pb.files.getURL(user, user.avatar);
        }
        
        let equipeData = null;
        if (user.equipe) {
            try {
                // Récupérer les informations de l'équipe
                const equipe = await pb.collection('Equipe').getOne(user.equipe);
                
                // Récupérer tous les utilisateurs de cette équipe
                const membresUsers = await pb.collection('users').getFullList({
                    filter: `equipe = "${user.equipe}"`
                });
                
                const membres = membresUsers.map((membre: any) => ({
                    id: membre.id,
                    nom: membre.nom,
                    prenom: membre.prenom,
                    email: membre.email,
                    avatar: membre.avatar,
                    avatar_url: membre.avatar ? `http://127.0.0.1:8090/api/files/_pb_users_auth_/${membre.id}/${membre.avatar}` : null
                }));
                
                equipeData = {
                    id: equipe.id,
                    equipe_id: equipe.id,
                    nom: equipe.nom,
                    logo: equipe.logo,
                    logo_url: equipe.logo ? `http://127.0.0.1:8090/api/files/Equipe/${equipe.id}/${equipe.logo}` : null,
                    chef: equipe.chef,
                    usersDetails: membres
                };
            } catch (err) {
                console.error('Erreur lors de la récupération de l\'équipe:', err);
            }
        }

        return new Response(
            JSON.stringify({
                success: true,
                user: user,
                equipe: equipeData
            }),
            { 
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (err) {
        const error = err as Error;
        console.error('Erreur API get-profile:', error);
        return new Response(
            JSON.stringify({ 
                error: error.message || 'Erreur lors de la récupération du profil.' 
            }),
            { 
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
};