import axios from "axios";

export const Afficher_Articles = async () => {
  let res = await axios.get(`http://localhost:5000/Articles`);
  return res.data;
};

// ================== [Ajouter Article ] =============================
export const Ajouter_Articles = async (article) => {
  const res = await axios.post(`http://localhost:5000/Articles`, article);
  return res.data;
};
// ==================== [Modifier Article] ============================
export const Modifier_Articles = async (article, id) => {
  const res = await axios.patch(
    `http://localhost:5000/Articles/${id}`,
    article
  );
  return res.data;
};

// ===================== [Supprimer Article] ============================
export const Supprimer_Articles = async (id) => {
  const res = await axios.delete(`http://localhost:5000/Articles/${id}`);
  return res.data;
};

// ========================= [Search Article] ===========================

export const Search_Article = async (id) => {
  const res = await axios.get(`http://localhost:5000/Articles/${id}`);
  return res.data;
};

export const Afficher_Magasins = async () => {
  let res = await axios.get(`http://localhost:5000/Magasins`);
  return res.data;
};

// ================== [Ajouter Magasin ] =============================
export const Ajouter_Magasins = async (Magasin) => {
  const res = await axios.post(`http://localhost:5000/Magasins`, Magasin);
  return res.data;
};
// ==================== [Modifier Magasin] ============================
export const Modifier_Magasins = async (Magasin, id) => {
  const res = await axios.patch(
    `http://localhost:5000/Magasins/${id}`,
    Magasin
  );
  return res.data;
};

// ===================== [Supprimer Magasin] ============================
export const Supprimer_Magasins = async (id) => {
  const res = await axios.delete(`http://localhost:5000/Magasins/${id}`);
  return res.data;
};

// ========================= [Search Magasin] ===========================

export const Search_Magasin = async (id) => {
  const res = await axios.get(`http://localhost:5000/Magasins/${id}`);
  return res.data;
};
// =========
export const Afficher_Fournisseurs = async () => {
  let res = await axios.get(`http://localhost:5000/Fournisseurs`);
  return res.data;
};

// ================== [Ajouter Fournisseur ] =============================
export const Ajouter_Fournisseurs = async (fournisseur) => {
  const res = await axios.post(
    `http://localhost:5000/Fournisseurs`,
    fournisseur
  );
  return res.data;
};
// ==================== [Modifier Fournisseur] ============================
export const Modifier_Fournisseurs = async (fournisseur, id) => {
  const res = await axios.patch(
    `http://localhost:5000/Fournisseurs/${id}`,
    fournisseur
  );
  return res.data;
};

// ===================== [Supprimer Fournisseur] ============================
export const Supprimer_Fournisseurs = async (id) => {
  const res = await axios.delete(`http://localhost:5000/Fournisseurs/${id}`);
  return res.data;
};

// ========================= [Search Fournisseur] ===========================

export const Search_Fournisseur = async (id) => {
  const res = await axios.get(`http://localhost:5000/Fournisseurs/${id}`);
  return res.data;
};

export const Afficher_Commandes = async () => {
  let res = await axios.get(`http://localhost:5000/Commandes`);
  return res.data;
};

// ================== [Ajouter Commande ] =============================
export const Ajouter_Commandes = async (commande) => {
  const res = await axios.post(`http://localhost:5000/Commandes`, commande);
  return res.data;
};
// ==================== [Modifier Commande] ============================
export const Modifier_Commandes = async (commande, id) => {
  const res = await axios.patch(
    `http://localhost:5000/Commandes/${id}`,
    commande
  );
  return res.data;
};

// ===================== [Supprimer Commande] ============================
export const Supprimer_Commandes = async (id) => {
  const res = await axios.delete(`http://localhost:5000/Commandes/${id}`);
  return res.data;
};

// ========
export const Afficher_Factures = async () => {
  let res = await axios.get(`http://localhost:5000/Factures`);
  return res.data;
};

// ================== [Ajouter Facture ] =============================
export const Ajouter_Factures = async (facture) => {
  const res = await axios.post(`http://localhost:5000/Factures`, facture);
  return res.data;
};
// ==================== [Modifier Facture] ============================
export const Modifier_Factures = async (facture, id) => {
  const res = await axios.patch(
    `http://localhost:5000/Factures/${id}`,
    facture
  );
  return res.data;
};

// ===================== [Supprimer Facture] ============================
export const Supprimer_Factures = async (id) => {
  const res = await axios.delete(`http://localhost:5000/Factures/${id}`);
  return res.data;
};

// ========================= [Search Facture] ===========================

export const Search_Facture = async (id) => {
  const res = await axios.get(`http://localhost:5000/Factures/${id}`);
  return res.data;
};
// ====================== [Afficher BonLivraison] ========================
export const Afficher_BonLivraisons = async () => {
  let res = await axios.get(`http://localhost:5000/BonLivraisons`);
  return res.data;
};

// ================== [Ajouter BonLivraison ] =============================
export const Ajouter_BonLivraisons = async (BonLivraison) => {
  const res = await axios.post(
    `http://localhost:5000/BonLivraisons`,
    BonLivraison
  );
  return res.data;
};
// ==================== [Modifier BonLivraison] ============================
export const Modifier_BonLivraisons = async (BonLivraison, id) => {
  const res = await axios.patch(
    `http://localhost:5000/BonLivraisons/${id}`,
    BonLivraison
  );
  return res.data;
};

// ===================== [Supprimer BonLivraison] ============================
export const Supprimer_BonLivraisons = async (id) => {
  const res = await axios.delete(`http://localhost:5000/BonLivraisons/${id}`);
  return res.data;
};
// ====================== [Afficher BonCommande] ========================
export const Afficher_BonCommandes = async () => {
  let res = await axios.get(`http://localhost:5000/BonCommandes`);
  return res.data;
};

// ================== [Ajouter BonCommande ] =============================
export const Ajouter_BonCommandes = async (BonCommande) => {
  const res = await axios.post(
    `http://localhost:5000/BonCommandes`,
    BonCommande
  );
  return res.data;
};
// ==================== [Modifier BonCommande] ============================
export const Modifier_BonCommandes = async (BonCommande, id) => {
  const res = await axios.patch(
    `http://localhost:5000/BonCommandes/${id}`,
    BonCommande
  );
  return res.data;
};

// ===================== [Supprimer BonCommande] ============================
export const Supprimer_BonCommandes = async (id) => {
  const res = await axios.delete(`http://localhost:5000/BonCommandes/${id}`);
  return res.data;
};
// ====================== [Afficher BonCommande] ========================
export const Afficher_BonCommandesAchat = async () => {
  let res = await axios.get(`http://localhost:5000/BonCommandesAchat`);
  return res.data;
};

// ================== [Ajouter BonCommande ] =============================
export const Ajouter_BonCommandesAchat = async (BonCommande) => {
  const res = await axios.post(
    `http://localhost:5000/BonCommandesAchat`,
    BonCommande
  );
  return res.data;
};
// ==================== [Modifier BonCommande] ============================
export const Modifier_BonCommandesAchat = async (BonCommande, id) => {
  const res = await axios.patch(
    `http://localhost:5000/BonCommandesAchat/${id}`,
    BonCommande
  );
  return res.data;
};

// ===================== [Supprimer BonCommande] ============================
export const Supprimer_BonCommandesAchat = async (id) => {
  const res = await axios.delete(
    `http://localhost:5000/BonCommandesAchat/${id}`
  );
  return res.data;
};
