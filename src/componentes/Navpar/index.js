import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { get_search_values } from "../../rtk/Redusers/search";
import { useDispatch } from "react-redux";

export default function NavPar() {
  const navto = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [searchvalue, setserachevalu] = useState("");
  // console.log(searchvalue);
  // console.log(user.type);
  function chek() {
    if (user && user.type === "admins") {
      return (
        <li>
          <Link className="text-success" to={"Dashbord"}>
            {" "}
            لوحه التحكم
          </Link>
        </li>
      );
    }
  }
  return (
    <>
      <section className="HiroSection">
        <nav>
          <ul className="mt-3">
            {chek()}

            <li>
              {user ? (
                <Link
                  className="text-success"
                  to={""}
                  onClick={() => {
                    localStorage.removeItem("user");
                    navto("/");
                  }}
                >
                  تسجيل الخروج
                </Link>
              ) : (
                <Link to={"LoginUser"}>تسجيل الدخول</Link>
              )}
            </li>
            {!user && (
              <li>
                <button className="creat">
                  <Link className="text-success" to={"RegisterUser"}>
                    {" "}
                    انشاء حساب{" "}
                  </Link>
                </button>
              </li>
            )}
            {user && (
              <li>
                <Link className="text-success" to={"Profile"}>
                  {" "}
                  حسابي
                </Link>
              </li>
            )}

            <li>
              <Link className="text-success" to={""}>
                {" "}
                مسارات التعلم
              </Link>
            </li>
          </ul>
          <div className="searchDiv  ">
            <button
              className="btn"
              onClick={() => {
                if (searchvalue !== "") {
                  dispatch(get_search_values(searchvalue));
                  navto(`/Search/${searchvalue}`);
                }
              }}
            >
              {" "}
              ابحث
            </button>
            <input
              onChange={(event) => {
                setserachevalu(event.target.value);
              }}
              className="p-3"
              type="search"
              placeholder=" ابحث عن  . . ."
              value={searchvalue}
            ></input>
          </div>
          <div className="Logo mb-3">
            <Link to={"/"}>مينفعش</Link>
          </div>
        </nav>
      </section>
    </>
  );
}
