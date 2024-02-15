import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./scss/styles.scss"
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import {  GlobalProvider } from "./context/GlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider > 
    <RouterProvider router={router}></RouterProvider>
    </GlobalProvider>
  </React.StrictMode>
);
