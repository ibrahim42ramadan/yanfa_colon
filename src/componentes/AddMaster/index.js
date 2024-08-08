import React from "react";
import "./index.css";

export default function AddMaster() {
  return (
    <>
      <section className="AddMaster mx-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-3 ">
              <label className="form-label">First Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-6 col-sm-12 mb-3">
              <label className="form-label">Last Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-3">
              <label className="form-label">Email*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-6 col-sm-12 mb-3">
              <label className="form-label">Phone Numper*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-3">
              <label className="form-label">img Url*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-6 col-sm-12 mb-3">
              <label className="form-label">password*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-3">
              <label className="form-label">First Nameb*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-6 col-sm-12 mb-3">
              <label className="form-label">First Nameb*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
