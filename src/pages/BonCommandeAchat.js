import { Breadcrumbs, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import Invoice from "../partials/Invoice/Invoice";
import Sidebar from "../partials/Sidebar";

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
          {/*Bon de Commande*/}
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Achats
              </Link>
              <Typography color="text.primary">Bon de commande</Typography>
            </Breadcrumbs>
          <Invoice listLink="liste-bon-commande-achat" title="Bon de commande achat"/>
        </div>
      </div>
    </>
  );
};

export default BonDeCommande;
