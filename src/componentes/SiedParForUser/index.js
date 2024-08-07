import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function SiedParForUser() {
  return (
    <>
      <section className="SiedParForUserSection">
        <ul>
          <li>
            <Link to="UserInformation">بياناتي</Link>
          </li>
          <li>
            <Link to="">الاشتراك</Link>
          </li>
          <li>
            <Link to=""> كورساتي</Link>
          </li>
          <li>
            <Link to="Favoret"> المفضله</Link>
          </li>
          <li>
            <Link to=""> شهاداتي</Link>
          </li>
          <li>
            <Link to="">تعديل الحساب</Link>
          </li>
          <li>
            <Link to="">تغيير كلمة المرور</Link>
          </li>
          <li>
            <Link to="">المساعدة</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
