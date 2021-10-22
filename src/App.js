import { focusHandling } from "cruip-js-toolkit";
import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./charts/ChartjsConfig";
import "./css/style.scss";
import Articles from "./pages/Articles";
import BonCommande from "./pages/BonDeCommande";
import Commandes from "./pages/Commande";
// Import pages
import Dashboard from "./pages/Dashboard";
import Facture from "./pages/Facture";
import Fournisseurs from "./pages/Fournisseur";
import Magasins from "./pages/Magasins";
import Settings from "./pages/Settings";
import BonDeLivraison from "./pages/BonDeLivraison";
import DemandeFonction from "./pages/DemandeFonction";
import ListeBonCommande from "./pages/ListeBonCommande";
import ListeBonLivraison from "./pages/ListeBonLivraison";
// import BonCommandeAchat from "./pages/BonCommandeAchat";
import ListeBonCommandeAchat from "./pages/ListeBonCommandeAchat";
import Login from "./pages/login/view";
// import ListeBonCommande from "./pages/ListeBonCommande"
// import ListeBonCommandeAchat from "./pages/ListeBonCommandeAchat"
// import ListeBonLivraison from "./pages/ListeBonLivraison"
import BonCommandeAchat from "./pages/BonCommandeAchat"
function App() {
   const [token, setToken] = useState();
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change
//   const setToken =()=>{

//     localStorage.setItem('token',token)
//   }
//   const GetToken=()=>{

//     const userToken = localStorage.getItem('token');
//     return userToken?.token
//   }
//  const token=GetToken()
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  // else

  /*if (!token) {
    return <Login setToken={setToken} />;
  }
else*/

  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/magasins">
          <Magasins />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
        <Route exact path="/fournisseurs">
          <Fournisseurs />
        </Route>
        <Route exact path="/commandes">
          <Commandes />
        </Route>
        <Route exact path="/factures">
          <Facture />
        </Route>
        <Route exact path="/facture-achat">
          <Facture />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/bonCommande">
          <BonCommande />
        </Route>
        <Route exact path="/bonLivraison">
          <BonDeLivraison />
        </Route>
        <Route exact path="/demande-fonction">
          <DemandeFonction />
        </Route>
        <Route exact path="/liste-bon-livraison">
          <ListeBonLivraison />
        </Route>
        <Route exact path="/liste-bon-commande">
          <ListeBonCommande />
        </Route>
        <Route exact path="/bon-commande-achat">
          <BonCommandeAchat />
        </Route>
        <Route exact path="/liste-bon-commande-achat">
          <ListeBonCommandeAchat />
        </Route>
      </Switch>
    </>
  );
}

export default App;
