import React, {useState} from "react";


import { Ajouter_Fournisseurs, Afficher_Fournisseurs,Modifier_Fournisseurs,Supprimer_Fournisseurs } from "./Controller";

import { Button, Paper, TextField, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const Fournisseurs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const handleSearch =()=>{}
    const columns = [
      {
       name: "nom",
       label: "nom",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "prenom",
       label: "prenom",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "tel",
       label: "telephone",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "adresse",
       label: "adresse",
       options: {
        filter: true,
        sort: false,
       }
      },
      // {
      //     name: "edit",
          
      //     options: {
      //      filter: true,
              
      //      onRowClick :(index,data) => {
      //    console.log("here",data.rowIndex);
      //      }
      //     ,
      //     customBodyRender: (value,tableMeta) => {
      //         return (
      //           <ModeEditIcon 
      //           value={value}
      //           index={tableMeta.columnIndex}

      //           onClick={
      //             ()=>{setOpenEditPopup(true)
      //             setIndex(fournisseurId[tableMeta.rowIndex ])
      //             }
                  

      //               }
      //           >
                      
      //           </ModeEditIcon>
      //         );
      //       },
          
      //     }
          
      //    },
      // {
      //     name: "delete",
      //     label: "delete",
      //     options: {
      //      filter: true,
      //      sort: false,
           
      //      customBodyRender: (value, tableMeta) => {
      //         return (
      //           <DeleteIcon  
      //           value={value}
      //           index={tableMeta.columnIndex}
      //           onClick={
      //               () => 
      //               deleteFournisseur(fournisseurId[tableMeta.rowIndex ])
      //               //()=>console.log( "hhh",magasinId[tableMeta.rowIndex ])
      //               }  > 
                
      //           </DeleteIcon>
      //         );
      //       }
          
      //     }
      // },
     ];
     const options = {
      customToolbar :() => {
        return(
           <>
             <Button
            className="btn-ajouter"
            variant="contained"
            color="accent"
             onClick={()=>setOpenPopup(true)}>
               <AddIcon />
               Ajouter fournisseur</Button>
            
           </>
         );
        }}
        const theme = createMuiTheme({
          overrides: {
            MuiTableHead: {
              root: { backgroundColor: "#000" },
            },
            MuiPaper: {
              root:{
                border:"none"
              },
              elevation4: {
                boxShadow: "none !important",
      
              },
            },
      
            MUIDataTableBodyCell: {
              root: { backgroundColor: "#d5d5d5" },
            },
      
            MUIDataTableToolbar: {
              root: {
                color: "#707070",
                marginBottom : "7rem"
              },
              icon: {
                color: "#000",
              },
            },
          },
        });
      
  return (
    <>
     
          
          {/* <Datatable
            Ajouter={Ajouter_Fournisseurs}
            Afficher={Afficher_Fournisseurs}
            Modifier={Modifier_Fournisseurs}
            Supprimer={Supprimer_Fournisseurs}
            title={"Liste des Fournisseurs"}
          /> */}
           <div className="content">
      <Paper className="datatable-big-title">
        <Typography variant="h4" component="h2">
        Liste des Fournisseur
        </Typography>
      </Paper>
      <div>
        
        <MuiThemeProvider theme={theme}>
          <MUIDataTable
            className="flat"
            title={"Liste des Fournisseur"}
         
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      </div>

      {/* <AjouterMagasin 
    title = {"Add magasin"}
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      handleClose={setOpenPopup}/> */}
    </div>
       
    </>
  );
};

export default Fournisseurs;
