import axios from 'axios';


export const Afficher_Factures = async () => {
    let res = await axios.get(`http://localhost:5000/Factures`);
    return res.data;
}

// ================== [Ajouter Facture ] =============================
export const Ajouter_Factures = async (facture) => {
    const res = await axios.post(`http://localhost:5000/Factures`, facture); 
    return res.data;
}
// ==================== [Modifier Facture] ============================
export const Modifier_Factures = async (facture,id) => {
   const res = await axios.patch(`http://localhost:5000/Factures/${id}`, facture);
    return res.data;
}


// ===================== [Supprimer Facture] ============================
export const Supprimer_Factures = async (id) => {
const res = await axios.delete(`http://localhost:5000/Factures/${id}`);
return res.data;
}

// ========================= [Search Facture] ===========================

export const Search_Facture = async (id) => {
const res = await axios.get(`http://localhost:5000/Factures/${id}`);
return res.data;
}