import type { APIRoute } from 'astro';
import pb from '../../utils/pb';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const userId = formData.get('userId') as string;
        const equipeId = formData.get('equipeId') as string;
        const nouveauNom = formData.get('nom') as string;

        if (!userId || !equipeId || !nouveauNom) {
            return new Response(JSON.stringify({ 
                error: 'Données manquantes' 
            }), {
                status: 400
            });
        }

    const equipe = await pb.collection('Equipe').getOne(equipeId);
        
        if (equipe.chef !== userId) {
            return new Response(JSON.stringify({ 
                error: 'Seul le chef d\'équipe peut modifier le nom de l\'équipe' 
            }), {
                status: 403
            });
        }

        const updatedEquipe = await pb.collection('Equipe').update(equipeId, {
            nom: nouveauNom
        });

        return new Response(JSON.stringify({
            success: true,
            message: 'Nom de l\'équipe mis à jour avec succès',
            equipe: {
                id: updatedEquipe.id,
                nom: updatedEquipe.nom
            }
        }), {
            status: 200
        });

    } catch (error: any) {
        console.error('Erreur lors de la mise à jour de l\'équipe:', error);
        return new Response(JSON.stringify({ 
            error: error.message || 'Erreur lors de la mise à jour de l\'équipe' 
        }), {
            status: 500
        });
    }
};
