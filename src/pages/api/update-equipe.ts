import type { APIRoute } from 'astro';
import pb from '../../utils/pb';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const userId = formData.get('userId') as string;
        const equipeId = formData.get('equipeId') as string;
        const nouveauNom = formData.get('nom') as string;
        const logo = formData.get('logo') as File | null;
        const banniere = formData.get('banniere') as File | null;

        if (!userId || !equipeId) {
            return new Response(JSON.stringify({ 
                error: 'Données manquantes' 
            }), {
                status: 400
            });
        }

        const equipe = await pb.collection('Equipe').getOne(equipeId);
        
        if (equipe.chef !== userId) {
            return new Response(JSON.stringify({ 
                error: 'Seul le chef d\'équipe peut modifier l\'équipe' 
            }), {
                status: 403
            });
        }

        const updateData = new FormData();
        let messageSuccess = '';

        if (nouveauNom) {
            updateData.append('nom', nouveauNom);
            messageSuccess = 'Nom de l\'équipe mis à jour avec succès';
        }

        if (logo && logo.size > 0) {
            updateData.append('logo', logo);
            messageSuccess = 'Logo mis à jour avec succès';
        }

        if (banniere && banniere.size > 0) {
            updateData.append('logo', banniere);
            messageSuccess = 'Bannière mise à jour avec succès';
        }

        if (!nouveauNom && (!logo || logo.size === 0) && (!banniere || banniere.size === 0)) {
            return new Response(JSON.stringify({ 
                error: 'Aucune donnée à mettre à jour' 
            }), {
                status: 400
            });
        }

        const updatedEquipe = await pb.collection('Equipe').update(equipeId, updateData);

        return new Response(JSON.stringify({
            success: true,
            message: messageSuccess,
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
