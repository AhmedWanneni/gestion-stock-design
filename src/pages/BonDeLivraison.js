import { Breadcrumbs, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import Invoice from "../partials/Invoice/Invoice";
import Sidebar from "../partials/Sidebar";
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
          <div className="flex flex-row items-center m-2 justify-between">
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Ventes
              </Link>
              <Typography color="text.primary">Bon de livraison</Typography>
            </Breadcrumbs>
            {/*<Typography variant="h4">Bon de livraison achat</Typography>*/}
          </div>
          <Invoice listLink="liste-bon-livraison" title="Bon de livraison" />
        </div>
      </div>
    </>
  );
};

export default BonDeLivraison;
