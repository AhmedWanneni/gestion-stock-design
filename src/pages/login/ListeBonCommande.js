import React, { useState } from "react";
import Datatable from "../partials/Datatable";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import {
  Ajouter_BonCommandes,
  Afficher_BonCommandes,
  Modifier_BonCommandes,
  Supprimer_BonCommandes,
} from "./Controller";
const BonDeCommande = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const columns = ["Identifiant unique", "Date max", "Gérant", "Accepte"];

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden white">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/*Bon de Commande*/}
          {/*Datatable*/}
          <Datatable
            Ajouter={Ajouter_BonCommandes}
            Afficher={Afficher_BonCommandes}
            Modifier={Modifier_BonCommandes}
            Supprimer={Supprimer_BonCommandes}
            title={"Liste des bon Commande"}
            subTitle={"bon Commande"}
            columns={columns}
          />
          {/*<Invoice/>*/}
        </div>
      </div>
    </>
  );
};

export default BonDeCommande;
