import axios from "axios";
import React, { useEffect, useState } from "react";
import FamousCard from "../FamousCard";
import Isfavorets from "../Isfavorets/Isfavorets";
import { apiLink } from "../../api/asetss";
export default function Favoret() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [favorets_coursess, setfavorets_coursess] = useState([]);
  useEffect(() => {
    axios.get(`${apiLink}/courcess?isfavoret=true`).then((response) => {
      setfavorets_coursess(response.data);
    });
  }, []);
  console.log(favorets_coursess);
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center mb-5">الكورسات المضافة الى المفضلة</h2>
        {favorets_coursess.map((cours) => (
          <Isfavorets cours={cours} />
        ))}
      </div>
    </div>
  );
}
