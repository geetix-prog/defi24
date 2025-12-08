import pb from "../src/utils/pb.ts";

export async function addUser({ email, password, nom, prenom, promo, avatar }) {
    try {
        const userData = {
            email,
            password,
            passwordConfirm: password,
            nom,
            prenom,
            promo
        };
        if (avatar) {
            userData.avatar = avatar;
        }
        const record = await pb.collection('users').create(userData);
        return record;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du user :', error);
        throw error;
    }
}

export async function getallPartenaires() {
    try {
        let records = await pb.collection('Partenaire').getFullList({
            sort: 'nom'
        });
        records = records.map((partenaire) => {
            partenaire.img = pb.files.getURL(partenaire, partenaire.logo);
            return partenaire;
        });
        return records;
    } catch (error) {
        console.error('Erreur lors de la récupération des partenaires :', error);
        throw error;
    }
}

export async function createEquipe(nom, userId, logo) {
    try {
        const equipeData = {
            nom: nom,
            chef: userId,
            membre: [userId]
        };
        
        if (logo) {
            equipeData.logo = logo;
        }
        
        const record = await pb.collection('Equipe').create(equipeData);
        
        await pb.collection('users').update(userId, {
            equipe: record.id
        });
        
        return record;
    } catch (error) {
        console.error('Erreur lors de la création de l\'équipe :', error);
        throw error;
    }
}

export async function joinEquipe(equipeId, userId) {
    try {
        const equipe = await pb.collection('Equipe').getOne(equipeId);
        
        const currentMembres = Array.isArray(equipe.membre) ? equipe.membre : [];
        
        if (currentMembres.length >= 5) {
            throw new Error('Cette équipe est complète (maximum 5 membres)');
        }
        
        if (currentMembres.includes(userId)) {
            throw new Error('Vous êtes déjà membre de cette équipe');
        }
        
        const nouveauxMembres = [...currentMembres, userId];
        
        const record = await pb.collection('Equipe').update(equipeId, {
            membre: nouveauxMembres
        });
        
        await pb.collection('users').update(userId, {
            equipe: equipeId
        });
        
        return record;
    } catch (error) {
        console.error('Erreur lors de la jonction à l\'équipe :', error);
        throw error;
    }
}

export async function allEquipes() {
    let records = await pb.collection("Full_equipe").getFullList();
    records = records.map((row) => {
        if (row.equipe_logo) {
            row.equipe_logo_url = pb.files.getURL(row, row.equipe_logo);
        }
        if (row.user_avatar) {
            row.user_avatar_url = pb.files.getURL(row, row.user_avatar);
        }
        return row;
    });
    return records;
}