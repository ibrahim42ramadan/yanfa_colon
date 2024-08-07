import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_search_values } from "../../rtk/Redusers/search";
import FamousCourses from "../../componentes/Famous";
import FamousCard from "../../componentes/FamousCard";

export default function Search() {
  const [search_data, setsearch_data] = useState();
  const dispatch = useDispatch();
  const params = useParams();
  const data = useSelector((state) => {
    return state.search;
  });
  console.log(data);

  useEffect(() => {
    // dispatch(get_search_values(params.searchvalue));
  }, []);
  return (
    <>
      {data.length > 0 && (
        <h4 className="text-center mb-5">تم العثور على هذة النتائج</h4>
      )}
      {data.length === 0 && (
        <h4 className="text-center mb-5">لا يوجد نتائج لهذا البحث</h4>
      )}
      <div className="search_container">
        <div className="container ">
          <div className="row">
            {data?.map((el) => {
              return <FamousCard cours={el} />; // assuming data is array of famous courses
            })}
          </div>
        </div>
      </div>
    </>
  );
}
