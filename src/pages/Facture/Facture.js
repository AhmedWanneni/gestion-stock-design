import React ,{useState,useRef} from 'react';
import { useStyles } from "./style";
import {TableBody,Table, Button, Paper, TableRow, Typography ,TableHead,TableContainer,TableCell} from "@material-ui/core";

import Pdf from "react-to-pdf";
import ReactToPrint from 'react-to-print';
const ref = React.createRef();
const Data = () => {
  const classes = useStyles();
    let articleData = JSON.parse((localStorage.getItem('data')));
    let Quantite = JSON.parse(localStorage.getItem("quantite"));
    let price = JSON.parse(localStorage.getItem("price"))

    articleData.map( (article,id) => {
      let array= article["quantite"] = Quantite[id];
      console.log("this",array);

    })
    

    console.log("this is the ",articleData);
    articleData.map( (article,id) => {
      let arr= article["prixTotal"] = price[id];
      console.log("this",arr);

    })
    console.log("this is the final ",articleData);
    let fournisseur = JSON.parse(localStorage.getItem("fournisseur")) 
    const componentRef = useRef();
 const handlePrice = ()=>{
   
 }
    return ( <> 
     
<div   ref={ref} className={classes.content} >
      
                  
 <h1>hello</h1>
 
      {/* {articleData.map((article)=>(
        <table  >
        <tr>
          <th>LIbell</th>
          <th>Quantite</th>
          <th>prix unitaire</th>
          <th>prix totale</th>
        </tr>
        <tr>
          <td>{article.libell}</td>
          <td>{article.quantite}</td>
          <td>{article.prix}</td>
          <td>{article.prixTotal}</td>
          
          
        </tr>
        </table>

        
    
    ))} */}


             
     
    
</div>
      
     
      {/* <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => ref.current}
      />
   
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <a className="btn bg-white btn-light mx-1px text-95"  data-title="PDF" onClick={toPdf}><i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>Generate Pdf</a>}
      </Pdf> */}
    </> );
}
 
export default Data;