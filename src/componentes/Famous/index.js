import React, { useEffect, useState } from "react";
import FamousCard from "../FamousCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { get_all } from "../../rtk/Redusers/Coursess/coursess.slice";

export default function FamousCourses() {
  const data = useSelector((state) => {
    return state.Coursess;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all());
  }, []);
  console.log(data);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="hedar">
            <h2>أشهر الكورسات</h2>
          </div>

          {data?.map((cours) => {
            return <FamousCard cours={cours} />;
          })}
        </div>
      </div>
    </>
  );
}
