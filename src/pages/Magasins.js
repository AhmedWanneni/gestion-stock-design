import React, {useState} from "react";
import Datatable from "../partials/Datatable";
import Sidebar from "../partials/Sidebar";
import { Ajouter_Magasins, Afficher_Magasins,Modifier_Magasins,Supprimer_Magasins } from "./Controller";
import Header from "../partials/Header";

const Magasins = () => {
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
            Ajouter={Ajouter_Magasins}
            Afficher={Afficher_Magasins}
            Modifier={Modifier_Magasins}
            Supprimer={Supprimer_Magasins}
            title={"Liste des Magasins"}
          />
        </div>
      </div>
    </>
  );
};

export default Magasins;
