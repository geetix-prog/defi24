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
            const fullEquipeRecords = await pb.collection('Full_equipe').getFullList({
                filter: `equipe_id = "${user.equipe}"`
            });
            
            if (fullEquipeRecords.length === 0) {
                console.warn('Aucune équipe trouvée dans Full_equipe');
            } else {
                const equipeNom = fullEquipeRecords[0].equipe_nom;
                const equipeId = fullEquipeRecords[0].equipe_id;
                const equipeLogo = fullEquipeRecords[0].equipe_logo;
                const equipeChef = fullEquipeRecords[0].equipe_chef;
                
                const membres = fullEquipeRecords.map((row: any) => ({
                    id: row.user_id,
                    nom: row.user_nom,
                    prenom: row.user_prenom,
                    email: row.user_email,
                    avatar: row.user_avatar,
                    avatar_url: row.user_avatar ? `http://127.0.0.1:8090/api/files/_pb_users_auth_/${row.user_id}/${row.user_avatar}` : null
                })).filter((m: any) => m.nom);
                
                equipeData = {
                    id: equipeId,
                    nom: equipeNom,
                    logo: equipeLogo,
                    logo_url: equipeLogo ? `http://127.0.0.1:8090/api/files/Equipe/${equipeId}/${equipeLogo}` : null,
                    chef: equipeChef,
                    usersDetails: membres
                };
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