import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styl.css";
import { Link } from "react-router-dom";
export default function Erro_404() {
  return (
    <>
      <div className="error">
        <div className="container">
          <div className="content">
            <h1 className="">
              Error 4{<FontAwesomeIcon icon={faEarthAmericas} />}4
            </h1>
            <p>Page not found</p>
            <Link to="/">Back to Homepage</Link>
          </div>
        </div>
      </div>
    </>
  );
}
