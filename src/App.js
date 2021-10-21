import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Magasins from './pages/Magasins';
import Articles from './pages/Articles';
import Fournisseurs from './pages/Fournisseur';
import Commandes from './pages/Commande';
import Facture from "./pages/Facture"
import Settings from "./pages/Settings"
import Invoice from "./pages/Invoice/Invoice"
import BonCommande from './pages/bonDeCommande/view';
import BonLivraison from './pages/BonDeLivraison/view';
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
          <BonLivraison/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
