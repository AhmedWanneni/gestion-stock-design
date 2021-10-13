import axios from 'axios';
import env from "react-dotenv";

export const Afficher_Articles = async () => {
    let res = await axios.get(`${env.API_URL}/Articles`);
    return res.data;
}

// ======================[Countries] =====================
export const countries = async () => {
    let res = await axios.get(`https://restcountries.eu/rest/v2/`);
    return res.data;
}
// ======================[Villes] =====================
export const ville = async () => {
    let res = await axios.get(`${env.API_URL}/Villes`);
    return res.data;
}
export const Ajouter_ville= async (nom) =>{
    let ville = {
        "nom":nom
    }
    const res = await axios.post(`${env.API_URL}/Villes`, ville); 
        return res.data;
}

// ================== [Ajouter Article ] =============================
export const Ajouter_Articles = async (article) => {
        const res = await axios.post(`${env.API_URL}/Articles`, article); 
        return res.data;
    }
// ==================== [Modifier Article] ============================
export const Modifier_Articles = async (article,id) => {
       const res = await axios.patch(`${env.API_URL}/Articles/${id}`, article);
        return res.data;
    }


// ===================== [Supprimer Article] ============================
export const Supprimer_Articles = async (id) => {
    const res = await axios.delete(`${env.API_URL}/Articles/${id}`);
    return res.data;
}

// ========================= [Search Article] ===========================

export const Search_Article = async (id) => {
    const res = await axios.get(`${env.API_URL}/Articles/${id}`);
    return res.data;
}

// =================== [] ==============================

export const Afficher_carnets = async () => {
    let res = await axios.get(`${env.API_URL}/CarnetCnams`);
    return res.data;
}


// ================== [Ajouter carnet ] =============================
export const Ajouter_carnets = async (carnet) => {
        const res = await axios.post(`${env.API_URL}/CarnetCnams`, carnet); 
        return res.data;
    }
// ==================== [Modifier carnet] ============================
export const Modifier_carnets =
    async (id, nom, prenom, date_naissance, genre, prenom_pere, adresse_maladie, num_dossier, lieu_naissance, ville, divers, tel, nationnalite) => {
        let carnet = {
            "nom": nom,
            "prenom": prenom,
            "dateNaissance": date_naissance,
            "genre": genre,
            "prenomPere": prenom_pere,
            "AdresseMaladie": adresse_maladie,
            "NumDossier": num_dossier,
            "lieuNaissance": lieu_naissance,
            "ville": ville,
            "tel": tel,
            "diver": divers,
            "nationnalite": nationnalite
        }
        const res = await axios.patch(`${env.API_URL}/CarnetCnams/${id}`, carnet);
        return res.data;
    }
// ===================== [Supprimer carnet] ============================
export const Supprimer_carnets = async (id) => {
    const res = await axios.delete(`${env.API_URL}/CarnetCnams/${id}`);
    return res.data;
}

// ========================= [Search carnet] ===========================

export const Search_carnet = async (id) => {
    const res = await axios.get(`${env.API_URL}/CarnetCnams/${id}`);
    return res.data;
}

// =================== [] ==============================

