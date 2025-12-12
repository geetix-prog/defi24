import type { APIRoute } from 'astro';
import pb from '../../utils/pb';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return new Response(JSON.stringify({ error: "ID utilisateur requis." }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  const profile = await pb.collection('Profile').getOne(userId);

  let avatar_url: string | null = null;
    if (profile.avatar) {
      avatar_url = `${pb.baseUrl}/api/files/Profile/${profile.id}/${profile.avatar}`;
    }

    const user = {
      id: profile.id,
      email: profile.email,
      nom: profile.nom,
      prenom: profile.prenom,
      promo: profile.promo,
      avatar: profile.avatar,
      avatar_url,
      verified: profile.verified,
      emailVisibility: profile.emailVisibility
    };

  let equipeData = null;

    const equipeId =
      profile.equipe_id || profile.equipe || profile.equipeId || null;

    if (equipeId) {
      
      const membresProfiles = await pb.collection('Profile').getFullList({
        filter: `equipe_id = "${equipeId}"`
      });

      const membres = await Promise.all(
        membresProfiles.map(async (membre: any) => {
          let membreAvatarUrl: string | null = null;
          if (membre.avatar) {
              membreAvatarUrl =
                `${pb.baseUrl}/api/files/Profile/${membre.id}/${membre.avatar}`;
          }
          return {
            id: membre.id,
            nom: membre.nom,
            prenom: membre.prenom,
            email: membre.email,
            avatar: membre.avatar,
            avatar_url: membreAvatarUrl
          };
        })
      );

      const equipeRecord = await pb.collection('Equipe').getOne(equipeId);

      let logo_url: string | null = null;
      if (equipeRecord.logo) {
        logo_url = pb.files.getURL(equipeRecord, equipeRecord.logo);
      }

      equipeData = {
        id: equipeId,
        equipe_id: equipeId,
        nom: profile.equipe_nom || equipeRecord.nom,
        logo: equipeRecord.logo,
        logo_url,
        banniere_url: logo_url,
        chef: equipeRecord.chef,
        points: equipeRecord.points ?? 0,
        created: equipeRecord.created,
        usersDetails: membres
      };
    }

    const responseBody = {
      success: true,
      user,
      equipe: equipeData
    };

    return new Response(JSON.stringify(responseBody), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('Erreur API get-profile:', err);
    return new Response(
      JSON.stringify({
        error: err?.message || "Erreur lors de la récupération du profil."
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
