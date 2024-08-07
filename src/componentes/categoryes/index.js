import React, { useEffect } from "react";
import CategoryCard from "../CategoryCard";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { get_all } from "../../rtk/Redusers/Caregory/Category.slice";

export default function Category() {
  const data = useSelector((state) => {
    return state.Category;
  });
  const dispach = useDispatch();
  useEffect(() => {
    dispach(get_all());
  }, []);
  console.log(data);
  return (
    <>
      <section className="CategorySectio mb-5">
        <div className="container">
          {" "}
          <div className="row">
            <div className="hedar">
              <h2>تصفح جميع الاقسام</h2>
            </div>
            {data.map((el) => {
              return <CategoryCard key={el.id} el={el} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
