import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <>
      <section className="FooterSection">
        <div className="container-fluid">
          <div className="row">
            <ul className="">
              <li>
                <Link to={""}> سياسة الخصوصيه</Link>
              </li>
              <li>
                <Link to={""}>الشروط والاحكام</Link>
              </li>
              <li>
                <Link to={""}> الأسعار</Link>
              </li>
              <li>
                <Link to={""}> الرئيسية</Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <ul className="linkItem">
              <li>
                <Link to={""}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  {" "}
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <p className="endFooter">جميع الحقوق محفوظة لموقع ينفع 2024 ©</p>
          </div>
        </div>
      </section>
    </>
  );
}
