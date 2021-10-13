import React, {useState} from "react";
import Datatable from "../partials/Datatable";
import Sidebar from "../partials/Sidebar";
import { Ajouter_Articles, Afficher_Articles,Modifier_Articles,Supprimer_Articles } from "./Controller";
import Header from "../partials/Header";

const Articles = () => {
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
            Ajouter={Ajouter_Articles}
            Afficher={Afficher_Articles}
            Modifier={Modifier_Articles}
            Supprimer={Supprimer_Articles}
            title={"Liste des articles"}
          />
        </div>
      </div>
    </>
  );
};

export default Articles;
