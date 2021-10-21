import React,{useState} from 'react';
import Invoice from "./Boncommande/Invoice"
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
const BonCommande = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

    return (  <>
     <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden white">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
             <Invoice/>
        </div>
      </div>
    </>);
}
 
export default BonCommande;