import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { rootRouting } from "./Routing/RootRawting";
// import "../node_modules/@fortawesome/dist/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { stor } from "./rtk/stor";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={stor}>
    <RouterProvider router={rootRouting}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
