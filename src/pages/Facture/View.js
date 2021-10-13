import React, {useState} from "react";
import Datatable from "../../partials/Datatable";
import Sidebar from "../../partials/Sidebar";
import { Ajouter_Factures, Afficher_Factures,Modifier_Factures,Supprimer_Factures } from "./Controller";
import Header from "../../partials/Header";

const Factures = () => {
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
            Ajouter={Ajouter_Factures}
            Afficher={Afficher_Factures}
            Modifier={Modifier_Factures}
            Supprimer={Supprimer_Factures}
            title={"Liste des Factures"}
          />
        </div>
      </div>
    </>
  );
};

export default Factures;
