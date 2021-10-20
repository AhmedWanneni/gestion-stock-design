import { Button, Checkbox, Paper, TextField, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import AjouterData from "./AjouterData";
import ModifierData from "./ModifierData";
import Popup from "./Popup";
import AjouterMagasin from "./AjouterMagasin";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import AjouterFournisseur from "./AjouterFournisseur"
import { Ajouter_Fournisseurs } from "../../pages/Controller";
import { useStyles } from "./style";
import ModifierFournisseur from "./ModifierFournisseur"
import ModifierMagasin from "./ModifierMagasin"
const Datatable = ({ eg,title, c, Afficher, Supprimer, Modifier, Ajouter,x ,subTitle}) => {
  const [patient, setPatient] = useState([]);
  const [columns, setColumns] = useState([]);
  const [options, setOptions] = useState([]);
  // popup
  const [openPopup, setOpenPopup] = useState(false);
  const [openFPopup, setOpenFPopup] =  useState(false)
  const [openPopupPatient, setOpenPopupPatient] = useState(false);
  const [id, setId] = useState();
  const [openAjouter, setOpenAjouter] = useState(false);
  const [openModifier, setOpenModifier] = useState(false);
  const [errorConnxion, setErrorConnexion] = useState(false);
 const[loading,setLoading]=useState(false)
  const [supp, setSupp] = useState(false);
  const [add, setAdd] = useState(false);
  const [NomSearch, setNomSearch] = useState("");
  const [searchId, setSearchId] = useState("");
  const [detail,setDetail]=useState([])
  localStorage.setItem("sds", "sdffd");
  const handleClickModifierOpen = () => setOpenModifier(true);
  const handleClose = () => {
    setLoading((prev) => !prev)
    setOpenAjouter(false);
    setOpenModifier(false);
  };

  // settings
  const TABLE_STORAGE_NAME = "patientTableSettings";

  const DeleteRow = () => {

    Supprimer(window.localStorage.getItem("article_id"))
      .then(
        setSupp((prev) => !prev)
)
      
      .catch((e) => console.error(e));
  };

  const handleSearch = (event) => {
    Afficher()
      .then((res) => {
        
        let k = [];
        Object.values(res).forEach((element) => k.push(Object.values(element)));
        const actionsBtn = (
          <div className="flex">
            <DeleteIcon className="gris pointer" onClick={DeleteRow} />
            <CreateIcon className="gris" onClick={handleClickModifierOpen} />
          </div>
        );
        k.map((row) => row.push(actionsBtn));

        const col = parseInt(event.target.id);

        let data = k.filter((el) => {
          if (typeof el[col] === "string")
            return el[col].includes(event.target.value);
          else if (typeof el[col] == "number")
            return String(el[col]).includes(event.target.value);
          else return false;
        });
        if (event.target.value) setPatient(data);
        else setPatient(k);
      })
      .catch((e) => setErrorConnexion(true));
  };
  
  useEffect(() => {
    Afficher()
      .then((res) => {
        
        let k = [];
        Object.values(res).forEach((element) => k.push(Object.values(element)));
        const actionsBtn = (
          <div className="flex">
            <DeleteIcon className="gris pointer" onClick={DeleteRow} />
            <CreateIcon className="gris" onClick={handleClickModifierOpen} />
          </div>
        );
        k.map((row) => row.push(actionsBtn));

        setPatient(k);
        // console.log("thiis",k)
        //setAdd((prev) => !prev)
        
      })
      .catch((e) => console.error(e));
  }, [supp, openPopupPatient, openModifier,add]);
  useEffect(() => {
    Afficher()
      .then((res) => {
        let k = [];
        Object.values(res).forEach((element) => k.push(Object.values(element)));
        const actionsBtn = (
          <div className="flex">
            <DeleteIcon className="gris pointer" onClick={DeleteRow} />
            <CreateIcon className="gris" onClick={handleClickModifierOpen} />
          </div>
        );
        k.map((row) => row.push(actionsBtn));
          
        setPatient(k);
        console.log("thiis",k)
        let hiddenCols =
          JSON.parse(localStorage.getItem(TABLE_STORAGE_NAME)) || [];
        // ========= Columns ================
        let y = [];
        
        c.map((e, k) =>
          y.push({
            label: (
              <>
                <TextField id={k} placeholder={e} onChange={handleSearch} />
              </>
            ),
            options:{
              filter: true,
              sort: false,
            },
          }
          
         ),
         
        );
        y.push(actionsBtn)
        setColumns(
          y.map((value) => {
            if (hiddenCols.includes(value.name)) {
              return {
                ...value,
                options: { filter: true, sort: false, display: "false" },
              };
            }
            return { ...value, options: { filter: true, sort: false } };
          })
        );
        // ========== END COLUMNS ============
      })
      .catch(() => setErrorConnexion(true));

    setOptions({
      filter: true,
      selectableRows: "none",
      //  selectableRows:Checkbox,
      
      filtertype: TextField,
      searchText: String(searchId),
      setRowProps: () => ({
        onDoubleClick: (rowClicked) => {
          console.log(rowClicked);
          // history.push('/text-edit');
        },
      }),

      onRowClick: (data) => {
        window.localStorage.setItem("article_id", data[0]);
        setId(window.localStorage.getItem("article_id"));
        setDetail(data);
        console.log("dattt",data);
        
      },
      onRowsDelete: (rowsDeleted) =>
        rowsDeleted.data.map((d) =>
          Supprimer(patient[d.dataIndex][0])
            .then((res) => console.log(res))
            .catch(console.error("erreur supprimer"))
        ),
      customToolbar: () => {
        return (
          <Button
            className="btn-ajouter"
            variant="contained"
            color="accent"
            onClick={() => {
              setOpenPopupPatient(true)
              setOpenPopup(true)
              setOpenFPopup(true)
              
            }}
          >
            <AddIcon />
            Ajouter {subTitle}
          </Button>
        );
      },
      customSearch: (searchQuery, currentRow) => {
        let isFound = false;
        currentRow.forEach((col) => {
          if (col.toString().indexOf(searchQuery) >= 0) {
            isFound = true;
          }
        });
        return isFound;
      },
      onViewColumnsChange: (rowData, rowMeta) => {
        let hiddenCols =
          JSON.parse(localStorage.getItem(TABLE_STORAGE_NAME)) || [];
        if (rowMeta === "remove") {
          hiddenCols.push(rowData);
          localStorage.setItem(TABLE_STORAGE_NAME, JSON.stringify(hiddenCols));
        } else if (rowMeta === "add") {
          var index = hiddenCols.indexOf(rowData);
          console.log(index);
          if (index !== -1) {
            hiddenCols.splice(index, 1);
          }
          localStorage.setItem(TABLE_STORAGE_NAME, JSON.stringify(hiddenCols));
        }
      },
    });
  }, []);
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
    <div className="content">
      <Paper className="datatable-big-title">
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
      </Paper>
      <div>
       {eg ==="1"? <ModifierData
          id={id}
          handleClose={handleClose}
          openModifier={openModifier}
          Modifier={Modifier}
          detail={detail}
        />
     :eg ==="3"?<ModifierFournisseur
          id={id}
          
          handleClose={handleClose}
          openModifier={openModifier}
          Modifier={Modifier}
          detail={detail}
          />:eg ==="2"?<ModifierMagasin
          id={id}
          handleClose={handleClose}
          openModifier={openModifier}
          Modifier={Modifier}
          detail={detail}
          />:null }
        <MuiThemeProvider theme={theme}>
          <MUIDataTable
            className="flat"
            title={title}
            data={patient}
            columns={columns}
            options={options}
            subTitle={subTitle}
            
          />
        </MuiThemeProvider>
      </div>
{x==="1" ? <Popup
        title={`Ajouter ${title}`}
        openPopup={openPopupPatient}
        setOpenPopup={setOpenPopupPatient}
      >
        <AjouterData handleClose={setOpenPopupPatient} Ajouter={Ajouter} />
      </Popup>: x==="2"? <AjouterMagasin
      title={`Ajouter magasin`}
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      handleClose={setOpenPopup}
      Ajouter={Ajouter} 
      />:x ==="3"? <AjouterFournisseur
      title={`Ajouter Fournisseur`}
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      handleClose={setOpenPopup}
      Ajouter={Ajouter} 
      
      
      />:null}
      
      {/* <Button>{title}</Button> */}
    </div>  
  );
};
export default Datatable;
