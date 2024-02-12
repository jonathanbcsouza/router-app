import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import { router } from './router'; // JONATHAN <--------------

import "./index.css";
import { router } from "./FABIO/routes/root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
