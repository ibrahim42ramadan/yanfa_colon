import axios from "axios";
import React, { useEffect, useState } from "react";
import "./formstyle.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { add_cours } from "../../rtk/Redusers/Coursess/coursess.slice";
export default function AddCours() {
  const [coursName, setCoursName] = useState("");
  const [instructorId, setinstructorId] = useState("");
  const [instructor, setinstructor] = useState("");
  const [courseTime, setcourseTime] = useState("");
  const [instructor_thoumnaile, setinstructor_thoumnaile] = useState("");
  const [thoumnaile, setthoumnaile] = useState("");
  const [Category, setCategory] = useState("select Caregory");
  const dispatch = useDispatch();
  // useEffect(() => {});
  let cours = {
    instructorId: instructorId,
    courseName: coursName,
    instructor: instructor,
    courseTime: courseTime,
    instructor_thoumnaile: instructor_thoumnaile,
    thoumnaile: thoumnaile,
    Category,
  };
  console.log(Category);
  function clearinputs() {
    setCoursName("");
    setinstructorId("");
    setinstructor("");
    setcourseTime("");
    setinstructor_thoumnaile("");
    setthoumnaile("");
    setCategory("select Caregory");
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(add_cours(cours));
          clearinputs();
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                courseName
              </label>
              <input
                onChange={(e) => {
                  setCoursName(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="name الكورس"
                value={coursName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                instructor
              </label>
              <input
                onChange={(e) => {
                  setinstructor(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="instructor"
                value={instructor}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                instructor_thoumnaile
              </label>
              <input
                onChange={(e) => {
                  setinstructor_thoumnaile(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="instructor_thoumnaile"
                value={instructor_thoumnaile}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label me-2">
                Category{" "}
              </label>
              <select
                className="btn btn-success "
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Category"
                value={Category}
              >
                <option>select Caregory</option>
                <option>تسويق </option>
                <option>عمل حر</option>
                <option>صناعة المحتوي</option>
                <option>جرافك</option>
                <option>ديزاين</option>
                <option>برمجة</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                instructorId
              </label>
              <input
                onChange={(e) => {
                  setinstructorId(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="instructorId"
                value={instructorId}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                courseTime
              </label>
              <input
                onChange={(e) => {
                  setcourseTime(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="courseTime"
                value={courseTime}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                thoumnaile
              </label>
              <input
                onChange={(e) => {
                  setthoumnaile(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="thoumnaile"
                value={thoumnaile}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          ADD
        </button>
      </form>
    </div>
  );
}
