import { faHeart, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AddCours_to_favorets } from "../../rtk/Redusers/Favoretss/Favorets";
import {
  add_cours,
  edit_cours,
} from "../../rtk/Redusers/Coursess/coursess.slice";

export default function FamousCard({ cours }) {
  const dispatch = useDispatch();
  // const [isFavored, setIsFavored] = useState(false);
  // const [favorites, setFavorites] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const favorets_cours = {
    userid: user.id,
    instructorId: null,
    courseName: cours.courseName,
    instructor: cours.instructor,
    courseTime: cours.courseTime,
    instructor_thoumnaile: cours.instructor_thoumnaile,
    thoumnaile: cours.thoumnaile,
    isfavoret: true,
  };
  function styling() {
    console.log(cours.isfavoret);

    if (cours.isfavoret) {
      return (
        <p className="Flayicon text-danger ">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={async () => {
              toast.success("🎈" + "course added  favorites");
              await dispatch(AddCours_to_favorets(favorets_cours));
              await dispatch(
                edit_cours({
                  id: cours.id,
                  data: {
                    ...cours,
                    isfavoret: !cours.isfavoret,
                  },
                })
              );
            }}
          />
        </p>
      );
    } else {
      return (
        <p className="Flayicon text-light">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => {
              toast.success("🎈" + " course added  favorites");
              dispatch(AddCours_to_favorets(favorets_cours));
              dispatch(
                edit_cours({
                  id: cours.id,
                  data: {
                    ...cours,
                    isfavoret: !cours.isfavoret,
                  },
                })
              );
            }}
          />
        </p>
      );
    }
  }
  // useEffect(() => {
  //   axios.get(`http://localhost:4000/Favorets`).then((response) => {
  //     setFavorites(response.data);

  //     // Check if this course is already favored
  //     const favored = response.data.some((item) => item.cours_id === cours.id);
  //     setIsFavored(favored);
  //   });
  // }, [cours.id]);

  // const handleFavoriteClick = () => {
  //   const favoredItem = favorites.find((item) => item.cours_id === cours.id);
  //   if (favoredItem) {
  //     alert("Course is already added to the list");
  //   } else {
  //     axios
  //       .post(`http://localhost:4000/Favorets`, {
  //         userid: user.id,
  //         instructorId: null,
  //         courseName: cours.courseName,
  //         instructor: cours.instructor,
  //         courseTime: cours.courseTime,
  //         instructor_thoumnaile: cours.instructor_thoumnaile,
  //         thoumnaile: cours.thoumnaile,
  //       })
  //       .then(() => {
  //         setFavorites([...favorites, { userid: user.id, cours_id: cours.id }]);
  //         setIsFavored(true);
  //       });
  //   }
  // };

  return (
    <div
      key={cours.id}
      className=" col-lg-4 col-md-6 col-sm-12 mb-5 coursitemhover"
    >
      <div className="FamousCourseItem ">
        <div className="ThomeNail">
          {styling()}

          <Link to={`/coursInformation/${cours.id}`}>
            <img src={cours.thoumnaile} alt={cours.courseName}></img>
          </Link>
        </div>
        <div className="FamousCoursDiscription mb-1">
          <p className="fs-6">{cours.courseName}</p>
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
