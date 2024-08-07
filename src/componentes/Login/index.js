import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function LoginUser() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const user = {
    email: email,
    password: password,
  };
  const navto = useNavigate();
  return (
    <section className="LoginUserSection">
      <div className="container">
        <div className="row">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              axios
                .post("http://localhost:4000/login", user)
                .then((response) => {
                  const token = response.data.accessToken;
                  const user = response.data.user;

                  navto("/");
                  localStorage.setItem("user", JSON.stringify(user));
                })

                .catch((error) => {
                  console.log(error);
                  alert(error.message + "\n" + " enter your email address");
                });
            }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                عنوان البريد الالكتروني
                <FontAwesomeIcon className="mx-3" icon={faEnvelope} />
              </label>
              <input
                onChange={(event) => setemail(event.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={`ibrahimramadan@gmail.com`}
                value={email}
              />
              <div id="emailHelp" className="form-text">
                نحن لن نشارك ابدا بياناتك مع اي شخص{" "}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                كلمة المرور
              </label>
              <input
                onChange={(event) => setpassword(event.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
              />
            </div>
            <button type="submit" className=" btn-primary">
              تسجيل
            </button>{" "}
            <button type="submit" className=" btn-primary">
              <Link className="text-light" to={"/RegisterPage"}>
                {" "}
                انشاء حساب
              </Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
