import React, { useState } from "react";
import Datatable from "../partials/Datatable";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import {
  Ajouter_BonCommandesAchat,
  Afficher_BonCommandesAchat,
  Modifier_BonCommandesAchat,
  Supprimer_BonCommandesAchat,
} from "./Controller";
const BonDeCommandeAchat = () => {
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
            Ajouter={Ajouter_BonCommandesAchat}
            Afficher={Afficher_BonCommandesAchat}
            Modifier={Modifier_BonCommandesAchat}
            Supprimer={Supprimer_BonCommandesAchat}
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

export default BonDeCommandeAchat;
