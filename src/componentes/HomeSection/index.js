import React from "react";
import "./index.css";
export default function HomSection() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <section className="HommSection mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-sm-12">
              <div className="HiroImg">
                <img src={user.thomnaile}></img>{" "}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="HiroContent">
                <h2>المنصة التعليمية الأسرع نموًا في الوطن </h2>
                <h2>!العربي</h2>
                <span className="my-4">
                  مئات الدورات التدريبية "واكثر" باشتراك واحد.
                </span>
                <button className="">تصفح الكورسات</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
