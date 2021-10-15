import React ,{useState,useRef} from 'react';
import {
    Table,
    
  } from "react-bootstrap";
  import Pdf from "react-to-pdf";
  import ReactToPrint from 'react-to-print';
  const ref = React.createRef();
const Data = () => {
    const [data,setData]=useState([])
    let articleData = JSON.parse((localStorage.getItem('data')));
    let Quantite = JSON.parse(localStorage.getItem("quantite")) 
    let fournisseur = JSON.parse(localStorage.getItem("fournisseur")) 
    let price = JSON.parse(localStorage.getItem("price"))
    const componentRef = useRef();
 const handlePrice = ()=>{
   
 }
    return ( <> 
      <div className="content">
<div   ref={ref} style={{maxWidth:'800px'}} className="page-content container">
        <div >
    <div >
        <h1 className="page-title text-secondary-d1">
            Facture
            <small className="page-info">
                <i className="fa fa-angle-double-right text-80"></i> 
            </small>
        </h1>
    </div>

    <div className="container px-0">
        <div className="row mt-4">
            <div className="col-12 col-lg-10 offset-lg-1">
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
                <hr className="row brc-default-l1 mx-n1 mb-4" />
                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <span className="text-sm text-grey-m2 align-middle"></span>
                            <span className="text-600 text-110 text-blue align-middle">{}</span>
                        </div>
                    </div>
                   
{fournisseur.map((item)=>(
                    <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr className="d-sm-none" />
                        <div className="text-grey-m2">
                            <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Fournisseur: {item.nom}
                            </div>

                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">Adress:</span> {item.adresse}</div>

                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">Telephone:{item.tel}</span> </div>

                            <div className="my-2"><span className="text-600 text-90"></span> <span className="badge badge-warning badge-pill px-25">Unpaid</span></div>
                        </div>
                    </div>
                   ))}
                </div>

                <div className="mt-4">
                    <Table striped bordered hover size="sm"  >
  <tr>
  <th >code</th>
      {articleData.map((article)=>(
    
    <td >{article.code}</td>
    ))}
  </tr>
  <tr >
    <th >unit price</th>
    {articleData.map((article)=>(
    
    <td >{article.prix}</td>
    ))}
  </tr>
  <tr >
    <th>quantite</th>
    {Quantite.map((qts)=>(
    
    <td >{qts}</td>
    ))}
  </tr>
  <tr >
    <th>total price</th>
    {price.map((pr)=>(
    
    <td >{pr}</td>
    ))}
  </tr>
</Table>
                    <div className="row border-b-2 brc-default-l2"></div>

                    <div className="row mt-3">
                    {Quantite.map((qts)=>{
                    <div>{qts}</div>
                })}
                        <div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            
                        </div>

              
                    </div>

                    <hr />

                    <div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </div>
     
    
</div>
      </div>
      <div >
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => ref.current}
      />
    </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <a className="btn bg-white btn-light mx-1px text-95"  data-title="PDF" onClick={toPdf}><i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>Generate Pdf</a>}
      </Pdf>
    </> );
}
 
export default Data;