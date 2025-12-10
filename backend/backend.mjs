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
            partenaire.img = pb.files.getUrl(partenaire, partenaire.logo);
            console.log('URL générée:', partenaire.img);
            console.log('Base URL PocketBase:', pb.baseUrl);
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
        // Vérifier si l'utilisateur fait déjà partie d'une équipe
        const user = await pb.collection('users').getOne(userId);
        if (user.equipe) {
            throw new Error('Vous faites déjà partie d\'une équipe. Vous devez d\'abord la quitter avant d\'en créer une nouvelle.');
        }

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
        // Vérifier si l'utilisateur fait déjà partie d'une équipe
        const user = await pb.collection('users').getOne(userId);
        if (user.equipe) {
            throw new Error('Vous faites déjà partie d\'une équipe. Vous devez d\'abord la quitter avant d\'en rejoindre une autre.');
        }

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

export async function getallUsersInfos() {
    let records = await pb.collection("users").getFullList();
    records = records.map((row) => {
        if (row.avatar) {
            row.avatar_url = pb.files.getURL(row, row.avatar);
        }
        return row;
    });
    return records;
}

export async function getUserProfile(userId) {
    try {
        const user = await pb.collection('users').getOne(userId);
        
        if (user.avatar) {
            user.avatar_url = pb.files.getURL(user, user.avatar);
        }
        
        let equipe = null;
        if (user.equipe) {
            const fullEquipeRecords = await pb.collection('Full_equipe').getFullList({
                filter: `id = "${user.equipe}"`
            });
            
            if (fullEquipeRecords.length > 0) {
                const equipeNom = fullEquipeRecords[0].equipe_nom;
                const equipeId = fullEquipeRecords[0].id;
                const equipeLogo = fullEquipeRecords[0].equipe_logo;
                
                const membres = fullEquipeRecords.map((row) => ({
                    id: row.user_id || row.id,
                    nom: row.user_nom,
                    prenom: row.user_prenom,
                    email: row.user_email,
                    avatar: row.user_avatar,
                    avatar_url: row.user_avatar ? pb.files.getURL(row, row.user_avatar) : null
                })).filter((m) => m.nom);
                
                const equipeRecord = await pb.collection('Equipe').getOne(user.equipe);
                
                equipe = {
                    id: equipeId,
                    nom: equipeNom,
                    logo: equipeLogo,
                    logo_url: equipeLogo ? pb.files.getURL(equipeRecord, equipeLogo) : null,
                    chef: equipeRecord.chef,
                    usersDetails: membres
                };
            }
        }
        
        return {
            user,
            equipe
        };
    } catch (error) {
        console.error('Erreur lors de la récupération du profil :', error);
        throw error;
    }
}