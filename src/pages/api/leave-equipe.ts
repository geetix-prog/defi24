// src/pages/api/quitter-equipe.ts (MODIFIÉ)
import type { APIRoute } from 'astro';
import pb from '../../utils/pb.ts';

export const POST: APIRoute = async ({ request }) => {
    console.log('=== LEAVE EQUIPE DEBUG ===');
    
    // Headers CORS ESSENTIELS
    const corsHeaders = {
        'Access-Control-Allow-Origin': 'https://votre-site.netlify.app', // ou '*' pour le dev
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
    };
    
    // Gérer les pré-vols OPTIONS
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: corsHeaders
        });
    }
    
    try {
        // ... votre code existant ...
        
        return new Response(JSON.stringify({
            success: true,
            message: 'Vous avez quitté l\'équipe avec succès'
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
            }
        });

    } catch (error) {
        console.error('❌ Erreur leave-equipe:', error);
        return new Response(JSON.stringify({ 
            error: error.message || 'Erreur lors de la sortie de l\'équipe' 
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
            }
        });
    }
};