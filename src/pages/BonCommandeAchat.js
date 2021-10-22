import React, { useState } from "react";
import Header from "../partials/Header";
import Invoice from "../partials/Invoice/Invoice";
import Sidebar from "../partials/Sidebar";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const BonDeCommande = () => {
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
          <Typography  variant="h4">Bon de livraison achat: </Typography>
          {/*Bon de Commande*/}
          <Invoice listLink="liste-bon-commande-achat" title="Bon de commande achat"/>
        </div>
      </div>
    </>
  );
};

export default BonDeCommande;
