import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import article_img from "../images/articles.svg";
import magasin_img from "../images/magasin.svg";
import fournisseur_img from "../images/fournisseur.svg";
import commande_img from "../images/commande.svg";
import facture_img from "../images/facture.svg";
import dash_img from "../images/dashboard.svg";
import bcommande from "../images/bcommande.svg";
import blivraison from "../images/blivraison.svg";
import demande from "../images/demande.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="logo-container">
            <h1 className="logo">Gestion de stock</h1>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <ul className="mt-3">
            {/* Dashboard */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <img className="sidebar-icon" src={dash_img} />
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
              </NavLink>
            </li>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              Contacts
            </h3>
            {/* magasins */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "customers" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/magasins"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "customers" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <img className="sidebar-icon" src={magasin_img} />
                  <span className="text-sm font-medium">Magasins</span>
                </div>
              </NavLink>
            </li>
            {/* fournisseurs */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "orders" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/fournisseurs"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "orders" && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <img className="sidebar-icon" src={fournisseur_img} />
                    <span className="text-sm font-medium">Fournisseurs</span>
                  </div>
                  {/*Badge*/}
                  <div className="flex flex-shrink-0 ml-2">
                    <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm">
                      4
                    </span>
                  </div>
                  {/* /Badge */}
                </div>
              </NavLink>
            </li>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              Stock
            </h3>
            {/* articles */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "orders" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/articles"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "orders" && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <img className="sidebar-icon" src={article_img} />
                    <span className="text-sm font-medium">Articles</span>
                  </div>
                  {/* Badge 
                  <div className="flex flex-shrink-0 ml-2">
                    <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm">4</span>
                  </div>
                    */}
                </div>
              </NavLink>
            </li>
            {/* commandes */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "orders" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/commandes"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "orders" && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <img className="sidebar-icon" src={commande_img} />
                    <span className="text-sm font-medium">Commandes</span>
                  </div>
                  {/* Badge 
                  <div className="flex flex-shrink-0 ml-2">
                    <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm">4</span>
                  </div>
                  */}
                </div>
              </NavLink>
            </li>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              Ventes
            </h3>
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "campaigns" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/bonCommande"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "campaigns" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <img className="sidebar-icon" src={bcommande} />
                  <span className="text-sm font-medium">Bon de commande</span>
                </div>
              </NavLink>
            </li>
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "campaigns" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/bonLivraison"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "campaigns" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <img className="sidebar-icon" src={blivraison} />
                  <span className="text-sm font-medium">Bon de livraison</span>
                </div>
              </NavLink>
            </li>
            {/* Facutre */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "campaigns" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/factures"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "campaigns" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <img className="sidebar-icon" src={facture_img} />
                  <span className="text-sm font-medium">Facture</span>
                </div>
              </NavLink>
            </li>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              Achats
            </h3>
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "campaigns" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/bonCommande"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "campaigns" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <img className="sidebar-icon" src={bcommande} />
                  <span className="text-sm font-medium">Bon de commande</span>
                </div>
              </NavLink>
            </li>
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "campaigns" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/bonCommande"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "campaigns" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <img className="sidebar-icon" src={commande_img} />
                  <span className="text-sm font-medium">Facture d'achat</span>
                </div>
              </NavLink>
            </li>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              Assitance
            </h3>
            {/* Settings */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "settings" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/demande-fonction"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "settings" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <img className="sidebar-icon" src={demande} />
                  <span className="text-sm font-medium">
                    Demande de fonctions
                  </span>
                </div>
              </NavLink>
            </li>
            {/* Settings */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "settings" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/settings"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "settings" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <FontAwesomeIcon
                    icon={faCogs}
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "white",
                      marginRight: "8px",
                    }}
                  />

                  <span className="text-sm font-medium">Settings</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
