import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all } from "../../rtk/Redusers/Caregory/Category.slice";
import CategoryCard from "../CategoryCard";

export default function Departmentes() {
  const data = useSelector((state) => state.Category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all());
  }, []);
  console.log(data);

  return (
    <div className="Departmentes_container">
      <div className="container">
        <div className="row">
          {data.length === 0 && (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {data.length > 0 &&
            data.map((el) => <CategoryCard key={el.id} el={el} />)}
        </div>
      </div>
    </div>
  );
}
