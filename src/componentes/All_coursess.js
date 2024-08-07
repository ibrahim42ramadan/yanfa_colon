import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all } from "../rtk/Redusers/Coursess/coursess.slice";
import FamousCard from "./FamousCard";

export default function All_coursess() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.Coursess;
  });
  useEffect(() => {
    dispatch(get_all());
  }, []);
  console.log(data);

  return (
    <div className="All_coursess">
      <div className="container">
        <div className="row">
          {data.length === 0 && (
            <div className="fs-1 text-center">Loading...</div>
          )}
          {data.map((item) => (
            <FamousCard cours={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
