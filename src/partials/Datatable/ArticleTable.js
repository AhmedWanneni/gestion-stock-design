import React, {useState,useEffect} from "react";
import {Afficher_Articles } from "../../pages/Controller";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useStyles } from "./style";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const Article = () => {
    const [errorConnxion, setErrorConnexion] = useState(false);
    const classes = useStyles();
  const [article,setArticle]=useState([])
  const[quantite,setQuantite]=useState('')
  const[arrQ,setArrQ]=useState([])
  const[arrData,setArrData]=useState([])
  const [key,setKey] = useState(-1);
  const[prix,setPrix]=useState([])
  const[object,setObject]=useState({})
  const changequantite = (e) => {
 const obj={}
    setQuantite(e.target.value);
    if (key !== -1) 
      obj[key]=e.target.value
      setObject(obj)   
  };
  const handleObj =()=>{
    const price=prix
    let count=0
    const obj ={}
    const dataObj={}
    const arr =arrQ
    const dataArray=arrData
    obj[key]=quantite
    dataObj[key]=article[key]
    arr.push(quantite)
    dataArray.push(article[key])
    if (article[key]===undefined){
      count=0
    }else{
        
        count=quantite*article[key].prix
    }
    price.push(count)
    const pr=price.slice(1)
    // pr = pr.filter(val => val !== "0");
   const array= arr.slice(1)
//    array = array.filter(val => val !== "");
   const dataArrayS= dataArray.slice(1)
   
    setArrQ(arr)
    setArrData(dataArrayS)
    setPrix(pr)
    console.log ("this all the ", array, "and this is ",dataArrayS,"and f",pr)
    localStorage.setItem('quantite',JSON.stringify(array))
    localStorage.setItem('data',JSON.stringify(dataArrayS))
    localStorage.setItem('price',JSON.stringify(pr))


}
  useEffect(() => {
    Afficher_Articles()
    .then((res) => {
      console.log("the data",res)
      setArticle(res)
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  const handleSearch = (event) => {
    Afficher_Articles()
      .then((res) => {
        
        let k = [];
        Object.values(res).forEach((element) => k.push(Object.values(element)));
        const col = parseInt(event.target.id);

        let data = k.filter((el) => {
          if (typeof el[col] === "string")
            return el[col].includes(event.target.value);
          else if (typeof el[col] == "number")
            return String(el[col]).includes(event.target.value);
          else return false;
        });
        if (event.target.value) setArticle(data);
        else setArticle(k);
      })
      .catch((e) => setErrorConnexion(true));
  };
  
  const columns = [
    {
     name: "id",
     
     label: "Id",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "libell",
     label: (
        <>
            <TextField id="1" placeholder="Libelle" onChange={handleSearch} />
        </>
    ),
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "famille",
     label: (
        <>
            <TextField id="2" placeholder="Famille" onChange={handleSearch} />
        </>
    ),
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "sousFamille",
     label: (
        <>
            <TextField id="3" placeholder="Sous Famille" onChange={handleSearch} />
        </>
    ),
     options: {
      filter: true,
      sort: false,
     }
    },
    {
        name: "nomenclature",
        label: (
            <>
                <TextField id="4" placeholder="Nomenclature" onChange={handleSearch} />
            </>
        ),
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "uniteMesure",
        label:(
            <>
                <TextField id="5" placeholder="Unité de mesure" onChange={handleSearch} />
            </>
        ),
        options: {
         filter: true,
         sort: false,
        }
       },{
        name: "sockMin",
        label: (
            <>
                <TextField id="6" placeholder="Stock Minimum" onChange={handleSearch} />
            </>
        ),
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "qtStock",
        label: (
            <>
                <TextField id="7" placeholder="Quantité en stock" onChange={handleSearch} />
            </>
        ),
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "fournisseur",
        label:(
            <>
                <TextField id="8" placeholder="Fournisseur" onChange={handleSearch} />
            </>
        ),
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "prix",
        label: (
            <>
                <TextField id="9" placeholder="Prix Unitaire" onChange={handleSearch} />
            </>
        ),
        options: {
         filter: true,
         sort: false,
        }
       },
       {
        name: "date",
        label: (
            <>
                <TextField id="10" placeholder="Date Iventaite" onChange={handleSearch} />
            </>
        ),
        options: {
         filter: true,
         sort: false,
        }
       },
     
      
    {
        name: "qt",
        
        options: {
         filter: true,
         sort: false,
         
         customBodyRender: (value, tableMeta) => {
           
            return (
                <>
                <div>
                <TextField
                index={tableMeta.columnIndex}
                label="Quantité" 
                variant="outlined" 
                name="input1"
                type="number"
                onChange={changequantite}
           />
               
               </div>
           </>
            );
          },
        
        
        }
        
       },
   ];
     const options = {
        selectableRows: "none",
        onRowClick :(index,data) => {
            setKey(data.rowIndex);     
            // console.log("here",data.rowIndex);
             const obj={}
             const DataObj={}
             const arr=arrQ 
             const price=prix
            let count=0
             const dataArray=arrData
          obj[key]=quantite
          DataObj[key]=article[key]
          arr.push(quantite)
          dataArray.push(article[key])
        //   console.log("here the object",arr);
          if (article[key]===undefined){
            count=0
          }else{
              
              count=quantite*article[key].prix
          }
          price.push(count)
          setPrix(price)
          setArrData(dataArray)
        //   console.log("this is the article",price, 'and th    e array',arr,"and",dataArray)       
          setArrQ(arr)
          
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
        Liste des Article
        </Typography>
      </Paper>
      <div>
        
        <MuiThemeProvider theme={theme}>
          <MUIDataTable
            className="flat"
            title={"Liste des article"}
            data={article}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      </div>
        <Button className={classes.btnAA} onClick={handleObj}> validate </Button>	

     
    </div>
       
    </>
  );
};

export default Article;
