import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./componentes/Footer";
import NavPar from "./componentes/Navpar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Root() {
  return (
    <>
      <ToastContainer />
      <NavPar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
