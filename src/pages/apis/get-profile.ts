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
        
        let equipeData = null;
        if (user.equipe) {
            const equipe = await pb.collection('Equipe').getOne(user.equipe);
            
            console.log('Équipe récupérée:', equipe);
            console.log('Membres de l\'équipe:', equipe.membre);
            
            const membreIds = Array.isArray(equipe.membre) ? equipe.membre : [];
            
            if (membreIds.length === 0) {
                console.warn('Aucun membre dans l\'équipe');
            }
            
            const usersDetails = await Promise.all(
                membreIds.map(async (memberId: string) => {
                    try {
                        const memberUser = await pb.collection('users').getOne(memberId);
                        console.log('Membre récupéré:', memberUser);
                        return memberUser;
                    } catch (error) {
                        console.error(`Erreur récupération utilisateur ${memberId}:`, error);
                        return null;
                    }
                })
            );
            
            const validUsers = usersDetails.filter((u: any) => u !== null);
            
            console.log(`${validUsers.length} membres valides récupérés`);
            
            equipeData = {
                ...equipe,
                usersDetails: validUsers
            };
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