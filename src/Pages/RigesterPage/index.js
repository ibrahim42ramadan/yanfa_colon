import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { create_user } from "../../rtk/Redusers/users/users.slice";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const dispatch = useDispatch();
  const navto = useNavigate();

  useEffect(() => {});
  // const data = useSelector((users) => {
  //   return users;
  // });
  // console.log(data);
  const [First_Name, setFirst_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [Age, setAge] = useState("");
  const [address, setaddress] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Category, setCategory] = useState("");

  const user = {
    first_name: First_Name,
    last_name: Last_Name,
    thomnaile: ImageUrl,
    age: Age,
    address: address,
    phone_number: phone_number,
    email: email,
    password: password,
    Category,
  };
  return (
    <>
      <section className="RegisterPage">
        <div className="container">
          <div className="row">
            <div className="">
              <form
                className="Form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  await dispatch(create_user(user));
                  navto("/LoginUser");
                  // axios
                  //   .post("http://localhost:4000/users", user)
                  //   .then((response) => {
                  //     console.log(response);
                  //   })
                  //   .catch((error) => {
                  //     console.log(error);
                  //   });
                }}
              >
                <div className="row mb-3">
                  <div className="col-lg-6">
                    <label className="form-label">First Name*</label>
                    <input
                      onChange={(event) => setFirst_Name(event.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={First_Name}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Last Name*</label>
                    <input
                      onChange={(event) => setLast_Name(event.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={Last_Name}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-6">
                    <label className="form-label">ImageUrl*</label>
                    <input
                      onChange={(event) => setImageUrl(event.target.value)}
                      type="url"
                      className="form-control"
                      placeholder="ImageUrl"
                      value={ImageUrl}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label" type="numper">
                      Age *
                    </label>
                    <input
                      onChange={(event) => setAge(event.target.value)}
                      type="numper"
                      placeholder="Age"
                      className="form-control"
                      value={Age}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-6">
                    <label className="form-label">Email*</label>
                    <input
                      onChange={(event) => setemail(event.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">password*</label>
                    <input
                      onChange={(event) => setpassword(event.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="password"
                      value={password}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-6">
                    <label className="form-label">address*</label>
                    <input
                      onChange={(event) => setaddress(event.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="address"
                      value={address}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">phone number*</label>
                    <input
                      onChange={(event) => setphone_number(event.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="phone number"
                      value={phone_number}
                    />
                  </div>
                </div>
                <div className=" mb-3"></div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {}}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
