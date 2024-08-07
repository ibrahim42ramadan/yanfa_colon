import React, { useEffect } from "react";
import SiedParForAdmin from "../../componentes/SiedParForAdmin";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function Dashbord() {
  useEffect(() => {});
  return (
    <>
      <section className="DashboardSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="hedar">
              <h2>لوحة التحكم</h2>
            </div>
            <div className="col-md-10 ">
              <Outlet />
            </div>
            <div className="col-md-2">
              <SiedParForAdmin />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
