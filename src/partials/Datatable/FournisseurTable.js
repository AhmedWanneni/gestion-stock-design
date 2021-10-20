import React, {useState,useEffect} from "react";


import { Afficher_Fournisseurs} from "../../pages/Controller";

import { Button, Paper, TextField, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const Fournisseurs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fournisseur,setFournisseur]=useState()
  useEffect(() => {
    Afficher_Fournisseurs()
    .then((res) => {
      console.log("the data",res)
      setFournisseur(res)
    }).catch((err) => {
      console.log(err)
    });
  }, [])
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
      
     ];
     const options = {
      customToolbar :() => {
        return(
           <>
            
            
           </>
         );
        },
        customToolbarSelect: (selectedRows) => {
          const newSelectedRow = selectedRows.data.length > 1 ? selectedRows.data[1] : selectedRows.data[0];
          const newSelectedIndex = parseInt(newSelectedRow.index);
          const temp = {
            data: newSelectedRow,
            lookup: {}
          };
          temp.lookup[`${newSelectedIndex}`] = true;
          if (selectedRows.data.length > 1) {
            selectedRows.data = [];
            selectedRows.lookup = temp.lookup;
            selectedRows.data.push(temp.data);
          }
        },
        onRowSelectionChange :(lookup,data, currentRowsSelected,) => {
           localStorage.setItem("fournisseur",JSON.stringify([fournisseur[(data[0].index)]]))       
                    },
      }
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
            data={fournisseur}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      </div>

     
    </div>
       
    </>
  );
};

export default Fournisseurs;
