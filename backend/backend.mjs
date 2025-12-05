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