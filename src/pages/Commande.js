import React, {useState} from "react";
import Datatable from "../partials/Datatable";
import Sidebar from "../partials/Sidebar";
import { Ajouter_Commandes, Afficher_Commandes,Modifier_Commandes,Supprimer_Commandes } from "./Controller";
import Header from "../partials/Header";

const Commandes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
          />
        </div>
      </div>
    </>
  );
};

export default Commandes;
