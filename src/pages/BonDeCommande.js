import React, { useState } from "react";
import Datatable from "../partials/Datatable";
import Sidebar from "../partials/Sidebar";
import {
  Ajouter_Commandes,
  Afficher_Commandes,
  Modifier_Commandes,
  Supprimer_Commandes,
} from "./Controller";
import Header from "../partials/Header";
import Invoice from "../partials/Invoice/Invoice";
import {Link} from "react-router-dom";
import { Button,Typography } from '@material-ui/core';
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
              <Typography  variant="h4">Bon de commande vente : </Typography>
            
          {/*Bon de commande*/}
          <Invoice listLink="liste-bon-commande" title="Bon de commande"/>
        </div>
      </div>
    </>
  );
};

export default Commandes;
