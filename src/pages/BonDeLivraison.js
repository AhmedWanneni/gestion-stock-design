import React, { useState } from "react";
import Datatable from "../partials/Datatable";
import Sidebar from "../partials/Sidebar";
import {
  Ajouter_Livraisons,
  Afficher_Livraisons,
  Modifier_Livraisons,
  Supprimer_Livraisons,
} from "./Controller";
import Header from "../partials/Header";
import Invoice from "../partials/Invoice/Invoice";
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
          <Invoice/>
        </div>
      </div>
    </>
  );
};

export default BonDeLivraison;
