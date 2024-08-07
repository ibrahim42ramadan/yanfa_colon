import "./index.css";
import SiedParForUser from "../../componentes/SiedParForUser";
import { Outlet } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <section className="profileHiroSection mb-5">
        <div className="container-fluid">
          {" "}
          <div className="row">
            <div className="col-lg-10 col-sm-12">
              {/* <UserInformation /> */}
              <Outlet />
            </div>
            <div className="col-lg-2 siedpar col-sm-12">
              <SiedParForUser />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
