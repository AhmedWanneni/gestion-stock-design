import React,{useState} from 'react';
import Invoice from "./Boncommande/Invoice"
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { useStyles } from './style';
const BonCommande = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const classes = useStyles();
    return (  <>
     <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden white">
          {/*  Site header */}
         
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <h4 className={classes.title} >Bon de commandes</h4>
             <Invoice/>
        </div>
      </div>
    </>);
}
 
export default BonCommande;