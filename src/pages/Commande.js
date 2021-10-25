import React, { useState } from "react";
import Datatable from "../partials/Datatable";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import {
  Afficher_Commandes, Ajouter_Commandes, Modifier_Commandes,
  Supprimer_Commandes
} from "./Controller";

const Commandes = () => {
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
          {/*Datatable*/}
          <Datatable
            Ajouter={Ajouter_Commandes}
            Afficher={Afficher_Commandes}
            Modifier={Modifier_Commandes}
            Supprimer={Supprimer_Commandes}
            title={"Liste des Commandes"}
            subTitle={"commandes"}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default Commandes;
