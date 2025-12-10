import type { APIRoute } from 'astro';
import pb from '../../utils/pb';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const userId = formData.get('userId') as string;

        if (!userId) {
            return new Response(JSON.stringify({ 
                error: 'ID utilisateur requis' 
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Récupérer l'utilisateur
        const user = await pb.collection('users').getOne(userId);

        if (!user.equipe) {
            return new Response(JSON.stringify({ 
                error: 'Vous ne faites partie d\'aucune équipe' 
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const equipeId = user.equipe;

        // Récupérer l'équipe
        const equipe = await pb.collection('Equipe').getOne(equipeId);

        // Vérifier si l'utilisateur est le chef
        if (equipe.chef === userId) {
            return new Response(JSON.stringify({ 
                error: 'Le chef d\'équipe ne peut pas quitter l\'équipe. Vous devez d\'abord transférer le rôle de chef ou dissoudre l\'équipe.' 
            }), {
                status: 403,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Retirer l'utilisateur de la liste des membres
        const nouveauxMembres = equipe.membre.filter((membreId: string) => membreId !== userId);

        // Mettre à jour l'équipe
        await pb.collection('Equipe').update(equipeId, {
            membre: nouveauxMembres
        });

        // Retirer l'équipe de l'utilisateur
        await pb.collection('users').update(userId, {
            equipe: null
        });

        return new Response(JSON.stringify({
            success: true,
            message: 'Vous avez quitté l\'équipe avec succès'
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error: any) {
        console.error('Erreur lors de la sortie de l\'équipe:', error);
        return new Response(JSON.stringify({ 
            error: error.message || 'Erreur lors de la sortie de l\'équipe' 
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
