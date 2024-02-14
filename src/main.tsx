import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./scss/styles.scss"
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import { AdminLoginProvider } from "./context/AdminLogin.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AdminLoginProvider > 
    <RouterProvider router={router}></RouterProvider>
    </AdminLoginProvider>
  </React.StrictMode>
);
