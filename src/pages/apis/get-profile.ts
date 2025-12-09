import type { APIRoute } from 'astro';
import pb from '../../../src/utils/pb.ts';

export const GET: APIRoute = async ({ request }) => {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get('userId');

        console.log('=== GET PROFILE DEBUG ===');
        console.log('User ID:', userId);
        console.log('PocketBase URL:', pb.baseUrl);

        if (!userId) {
            return new Response(JSON.stringify({ error: 'ID utilisateur requis.' }), {
                status: 400
            });
        }

        const profile = await pb.collection('Profile').getOne(userId);
        console.log('Profile récupéré:', profile);
        console.log('Avatar field:', profile.avatar);

        // Construire l'URL complète de l'avatar
        let avatar_url = null;
        if (profile.avatar) {
            avatar_url = `${pb.baseUrl}/api/files/Profile/${profile.id}/${profile.avatar}`;
            console.log('Avatar URL construite:', avatar_url);
        }

        const user = {
            id: profile.id,
            email: profile.email,
            nom: profile.nom,
            prenom: profile.prenom,
            promo: profile.promo,
            avatar: profile.avatar,
            avatar_url: avatar_url,
            verified: profile.verified,
            emailVisibility: profile.emailVisibility
        };

        console.log('User object:', user);

        let equipeData = null;
        if (profile.equipe_id) {
            try {
                const membresProfiles = await pb.collection('Profile').getFullList({
                    filter: `equipe_id = "${profile.equipe_id}"`
                });

                const membres = await Promise.all(membresProfiles.map(async (membre: any) => {
                    let membreAvatarUrl = null;
                    if (membre.avatar) {
                        // Récupérer le record user pour chaque membre
                        const membreRecord = await pb.collection('users').getOne(membre.id);
                        membreAvatarUrl = pb.files.getURL(membreRecord, membre.avatar);
                    }
                    return {
                        id: membre.id,
                        nom: membre.nom,
                        prenom: membre.prenom,
                        email: membre.email,
                        avatar: membre.avatar,
                        avatar_url: membreAvatarUrl
                    };
                }));

                let logo_url = null;
                if (profile.equipe_logo) {
                    // Récupérer le record de l'équipe pour le logo
                    const equipeRecord = await pb.collection('Equipe').getOne(profile.equipe_id);
                    logo_url = pb.files.getURL(equipeRecord, profile.equipe_logo);
                }

                equipeData = {
                    id: profile.equipe_id,
                    equipe_id: profile.equipe_id,
                    nom: profile.equipe_nom,
                    logo: profile.equipe_logo,
                    logo_url: logo_url,
                    chef: profile.equipe_chef,
                    points: profile.equipe_points,
                    created: profile.equipe_created,
                    usersDetails: membres
                };
            } catch (err) {
                console.error('Erreur lors de la récupération des membres de l\'équipe:', err);
            }
        }

        const response = {
            success: true,
            user: user,
            equipe: equipeData
        };

        console.log('=== RESPONSE FINALE ===');
        console.log(JSON.stringify(response, null, 2));

        return new Response(
            JSON.stringify(response),
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