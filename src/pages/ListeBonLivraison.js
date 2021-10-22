import React, { useState } from "react";
import Datatable from "../partials/Datatable";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import {
  Ajouter_BonLivraisons,
  Afficher_BonLivraisons,
  Modifier_BonLivraisons,
  Supprimer_BonLivraisons,
} from "./Controller";
const BonDeLivraison = () => {
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

          {/*Bon de Livraison*/}
          {/*Datatable*/}
          <Datatable
            Ajouter={Ajouter_BonLivraisons}
            Afficher={Afficher_BonLivraisons}
            Modifier={Modifier_BonLivraisons}
            Supprimer={Supprimer_BonLivraisons}
            title={"Liste des bon livraison"}
            subTitle={"bon livraison"}
            columns={columns}
          />
          {/*<Invoice/>*/}
        </div>
      </div>
    </>
  );
};

export default BonDeLivraison;
