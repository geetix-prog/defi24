import pb from "../src/utils/pb.ts";

export async function addUser({ email, password, nom, prenom, avatar }) {
    try {
        const userData = {
            email,
            password,
            passwordConfirm: password,
            nom,
            prenom,
        };
        if (avatar) {
            userData.avatar = avatar;
        }
        const record = await pb.collection('users').create(userData);
        return record;
    } catch (error) {
        console.error('Erreur lors de l’ajout du user :', error);
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
            users: [userId]
        };
        
        if (logo) {
            equipeData.logo = logo;
        }
        
        const record = await pb.collection('Equipe').create(equipeData);
        
        return record;
    } catch (error) {
        console.error('Erreur lors de la création de l\'équipe :', error);
        throw error;
    }
}

export async function joinEquipe(equipeId, userId) {
    try {
        const equipe = await pb.collection('Equipe').getOne(equipeId);
        
        if (equipe.users && equipe.users.length >= 5) {
            throw new Error('Cette équipe est complète (maximum 5 membres)');
        }
        
        const users = equipe.users || [];
        users.push(userId);
        
        const record = await pb.collection('Equipe').update(equipeId, {
            users: users
        });
        
        return record;
    } catch (error) {
        console.error('Erreur lors de la jonction à l\'équipe :', error);
        throw error;
    }
}