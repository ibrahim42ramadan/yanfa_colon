import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function SiedParForAdmin() {
  return (
    <>
      <section className="SiedParForAdmin ">
        <ul>
          <li>
            <Link to="SiedParForUser">بياناتي</Link>
          </li>
          <li>
            <Link to="Departmentes">اقسامي</Link>
          </li>
          <li>
            <Link to="All_coursess"> كورساتي</Link>
          </li>
          <li>
            <Link to="Users_control"> المستخدمين</Link>
          </li>
          <li>
            <Link to="Inestractor"> المعلمين</Link>
          </li>
          <li>
            <Link to="AddMaster"> اضافه معلم</Link>
          </li>
          <li>
            <Link to="AddCours"> اضافة كورس</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
