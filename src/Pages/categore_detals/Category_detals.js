import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_one } from "../../rtk/Redusers/Caregory/Category.slice";
import { Link, useParams } from "react-router-dom";
import { get_all } from "../../rtk/Redusers/Coursess/coursess.slice";
import "./stel.css";
import FamousCard from "../../componentes/FamousCard";
export default function Category_detals() {
  const dispatch = useDispatch();
  const params = useParams();

  const department = useSelector((state) => {
    return state.Category;
  });
  const category_coursess = useSelector((state) => {
    return state.Coursess.filter((c) => {
      return (
        c.Category.trim().toLowerCase() ===
        department.departmentName?.trim().toLowerCase()
      );
    });
  });

  useEffect(() => {
    dispatch(get_one(+params.id));
    dispatch(get_all());
  }, []);
  // console.log(department.departmentName);
  console.log(category_coursess);

  return (
    <div className="Category_detals">
      <div className="container">
        <div className="Category_detals_img mb-5">
          <div className="title">
            {" "}
            <h2>{department.departmentName}</h2>
          </div>
          <p>
            <Link to={"/Dashbord/Departmentes"}>
              {" "}
              <span className="text-dark">
                {" "}
                Back to{" "}
              </span>Dashbord/Departmentes{" "}
            </Link>
          </p>
          <img src={department.thomnaile} alt={department.departmentName}></img>
        </div>
        <h3 className="mb-5">الكورسات الخاصه بهذا القسم </h3>
      </div>

      <div className="row">
        {category_coursess.length === 0 && (
          <h4 className="text-center mb-5">لايوجد كورسات لهذا القسم</h4>
        )}
        {category_coursess.length > 0 &&
          category_coursess.map((cours) => <FamousCard cours={cours} />)}
        {}
      </div>
      <div></div>
    </div>
  );
}
