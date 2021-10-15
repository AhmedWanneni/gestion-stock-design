import React, {useState} from "react";
import Datatable from "../partials/Datatable";
import Sidebar from "../partials/Sidebar";
import { Ajouter_Fournisseurs, Afficher_Fournisseurs,Modifier_Fournisseurs,Supprimer_Fournisseurs } from "./Controller";
import Header from "../partials/Header";

const Fournisseurs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const columns = ["Identifiant unique","Nom","Prénom","Téléphone","Adresse"];

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
            Ajouter={Ajouter_Fournisseurs}
            Afficher={Afficher_Fournisseurs}
            Modifier={Modifier_Fournisseurs}
            Supprimer={Supprimer_Fournisseurs}
            title={"Liste des Fournisseurs"}
            subTitle={'fournisseur'}
            x="3"
            eg="3"
            c={columns}
          />
        </div>
      </div>
    </>
  );
};

export default Fournisseurs;
