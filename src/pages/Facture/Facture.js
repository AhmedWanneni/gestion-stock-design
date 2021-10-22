import React ,{useState,useRef} from 'react';
import { useStyles } from "./style";
import {Container ,TableBody,Table, Button,TablePagination, Paper, TableRow, Typography ,TableHead,TableContainer,TableCell} from 
"@material-ui/core";
import {faFacebook} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <h2 style={{ textAlign: "right" }}>Facture</h2>
      <h2 style={{ textAlign: "right" }}>Date</h2>
<div className="row" >


   <div className="left"style={{ float:" left", width: "50%",padding: "10px",marginRight:"240px",marginLeft:"20px",marginBottom:"20px"}}> 
<h2 >Client(e)...............</h2>
<h2 >Adresse...............</h2>
<h2 >Tel..................</h2>
</div>  
<div className="right" style={{ }}>
<h2  >Societe...............</h2>
<h2 >Adresse.............</h2>
<h2 >Tel...............</h2>

</div>
</div>
 <Container maxWidth="md">



  
  
      <Paper >
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>discription</TableCell>
                <TableCell align="right">
                  Quantite
                </TableCell>
                <TableCell align="right">
                  prix
                </TableCell>
                <TableCell align="right">
                  prix Total
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {articleData
                
                .map((item) => {
                  return (
                    <TableRow key={item.name}>
                      <TableCell>{item.libell}</TableCell>
                      <TableCell align="right">{item.quantite} </TableCell>
                      <TableCell align="right">
                        {" "}
                        {(item.prix)}
                      </TableCell>
                      <TableCell align="right">
                        {(item.prixTotal)}
                      </TableCell>
                    </TableRow>
                  );
                })}
             
            </TableBody>
          </Table>
        </TableContainer>

      </Paper>
    </Container>

            
   <div className={classes.footer}></div>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

   <br/>
   <hr/>
      <p>Mobi sm</p>
      <p style={{ textAlign: "center"}}>contact@mobism.tn</p>
      <p>Rue </p>
      <p>(216)</p>
    
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