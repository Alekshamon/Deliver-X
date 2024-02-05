import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cities from "./components/Cities/Cities";
import ClickOrDeliver from "./components/ClickOrDeliver/ClickOrDeliver";
import Livraison from "./components/Livraison/Livraison";
import App from "./App";
import Layout from "./components/layout/Layout";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Panier from "./components/Panier/Panier";
import NotFound from "./components/NotFound/NotFound";
import { UserContextProvider } from "./contexts/userContexts";
import Paiement from "./components/Paiement/Paiement";
import PaiementDone from "./components/Paiement/PaiementDone/PaiementDone";

import ValidationLivraison from "./components/validationLivraion/ValidationLivraison";

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cities",
        element: <Cities />,
      },

      {
        path: "clickordeliver",
        element: <ClickOrDeliver />,
      },

      {
        path: "livraison",
        element: <Livraison />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/panier",
        element: <Panier />,
      },
      {
        path: "/validation-livraison",
        element: <ValidationLivraison />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/paiement",
        element: <Paiement />,
      },

      {
        path: "/paiementdone",
        element: <PaiementDone />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
);
