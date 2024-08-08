import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
export default function CategoryCard({ el }) {
  return (
    <>
      <div key={el.id} className="col-lg-3 col-md-6 col-sm-12">
        <div className="cardItem">
          <div className="Icon mb-3">
            <img
              src={el.thomnaile}
              className="img-fluid rounded-top"
              alt={el.departmentName}
            ></img>
          </div>
          <h5>{el.departmentName}</h5>
          <Link to={`/Dashbord/Category/${el.id}`} className="btn text-success">
            read moor
          </Link>
        </div>
      </div>
    </>
  );
}
