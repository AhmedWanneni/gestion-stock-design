import { focusHandling } from 'cruip-js-toolkit';
import React, { useEffect } from 'react';
import {
  Route, Switch, useLocation
} from 'react-router-dom';
import './charts/ChartjsConfig';
import './css/style.scss';
import Articles from './pages/Articles';
import BonCommande from './pages/BonDeCommande';
import Commandes from './pages/Commande';
// Import pages
import Dashboard from './pages/Dashboard';
import Facture from "./pages/Facture";
import Fournisseurs from './pages/Fournisseur';
import Magasins from './pages/Magasins';
import Settings from "./pages/Settings";
import BonDeLivraison from './pages/BonDeLivraison';
import DemandeFonction from './pages/DemandeFonction';
function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
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
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/bonCommande">
          <BonCommande/>
        </Route>
        <Route exact path="/bonLivraison">
          <BonDeLivraison/>
        </Route>
        <Route exact path="/demande-fonction">
          <DemandeFonction/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
