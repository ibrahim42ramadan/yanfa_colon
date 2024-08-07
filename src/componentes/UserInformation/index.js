import React from "react";
import "./index.css";
export default function UserInformation() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <>
      <section className="UserInformation">
        <div className="container">
          {" "}
          <div className="row">
            <div className="col-lg-6  col-sm-12">
              <div className="UserImg">
                <img src={user.thomnaile} className="" alt=""></img>
              </div>
            </div>
            <div className="col-lg-6  col-sm-12">
              <div className="UserIData  ">
                <p>
                  {" "}
                  <span> الاسم: </span>
                  {user.first_name}
                  {user.last_name}
                </p>

                <p>
                  {" "}
                  <span>رقم الهاتف: </span> {user.phone_number}
                </p>
                <p>
                  {" "}
                  <span> العمر: </span>
                  {user.age}
                </p>
                <p>
                  {" "}
                  <span>العنوان: </span>
                  {user.address}
                </p>
                <p>
                  {" "}
                  <span> الايميل: </span>
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
