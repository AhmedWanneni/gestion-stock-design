import React, {useEffect,useState} from "react";
import Datatable from "../partials/Datatable";
import Sidebar from "../partials/Sidebar";
import {Ajouter_Magasins, Afficher_Magasins,Modifier_Magasins,Supprimer_Magasins } from "./Controller";
import Header from "../partials/Header";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import AjouterMagasin from "../partials/Datatable/AjouterMagasin"

const Magasins = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
 
   
   
   const columns = ["Identifiant unique","Adresse","Gérant"];

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
            x="2"
            eg="2"
            c={columns}
            subTitle={"magasin"}
          />
         
        </div>
      </div>
    </>
  );
};

export default Magasins;
