import { faHeart, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  AddCours_to_favorets,
  RemoveCours_from_favorets,
} from "../../rtk/Redusers/Favoretss/Favorets";
import {
  add_cours,
  edit_cours,
  get_all,
} from "../../rtk/Redusers/Coursess/coursess.slice";

export default function FamousCard({ cours }) {
  const dispatch = useDispatch();
  // const [isFavored, setIsFavored] = useState(false);
  // const [favorites, setFavorites] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(get_all());
  }, [dispatch]);

  async function addToFav() {
    toast.success("🎈" + "course added  favorites");
    await dispatch(
      edit_cours({
        id: cours.id,
        data: {
          ...cours,
          isfavoret: !cours.isfavoret,
        },
      })
    );
  }
  async function removeFromFav() {
    toast.success("🎈" + "course added  favorites");
    await dispatch(
      edit_cours({
        id: cours.id,
        data: {
          ...cours,
          isfavoret: !cours.isfavoret,
        },
      })
    );
  }
  function styling() {
    return (
      <p
        className={`Flayicon ${cours.isfavoret ? "text-danger" : "text-light"}`}
      >
        <FontAwesomeIcon
          icon={faHeart}
          onClick={async () => {
            if (user) {
              await dispatch(
                edit_cours({
                  id: cours.id,
                  data: {
                    ...cours,
                    isfavoret: !cours.isfavoret,
                  },
                })
              );
              dispatch(get_all());
            } else {
              toast.error("👨‍💻" + " Please login to add course to favorites");
            }
          }}
        />
      </p>
    );

    // } else {
    //   return (
    //     <p className="Flayicon text-light">
    //       <FontAwesomeIcon
    //         icon={faHeart}
    //         onClick={() => {
    //           toast.success("🎈" + " course added  favorites");
    //           dispatch(AddCours_to_favorets(favorets_cours));
    //           dispatch(
    //             edit_cours({
    //               id: cours.id,
    //               data: {
    //                 ...cours,
    //                 isfavoret: !cours.isfavoret,
    //               },
    //             })
    //           );
    //         }}
    //       />
    //     </p>
    //   );
    // }
  }

  return (
    <div className=" col-lg-4 col-md-6 col-sm-12 mb-5 coursitemhover">
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
