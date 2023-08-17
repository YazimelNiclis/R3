import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Root from "./pages/root.jsx";
import Contact from "./pages/contact";
import App from "./App";
import Logo from "./components/header/Logo";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Logo />
    <RouterProvider router={router} />
  </>
);
