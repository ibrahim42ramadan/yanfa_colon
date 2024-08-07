import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Isfavorets({ cours }) {
  return (
    <div
      key={cours.id}
      className=" col-lg-4 col-md-6 col-sm-12 mb-5 coursitemhover"
    >
      <div className="FamousCourseItem ">
        <div className="ThomeNail">
          <p className="Flayicon"></p>
          <Link to={`/coursInformation/${cours.id}`}>
            <img src={cours.thoumnaile} alt={cours.courseName}></img>
          </Link>
        </div>
        <div className="FamousCoursDiscription mb-3">
          <p className="">{cours.courseName}</p>
          <div className="Coursoverview">
            <p className="courseTime">
              {cours.courseTime}
              <FontAwesomeIcon icon={faStopwatch} />{" "}
            </p>
            <div className="InstructorData">
              <p className="me-3">{cours.instructor}</p>
              <img src={cours.instructor_thoumnaile} alt="Instructor"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
