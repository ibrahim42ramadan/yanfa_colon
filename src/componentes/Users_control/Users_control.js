import React, { useEffect, useState } from "react";
import User_el_in_dash from "../user_el_in_dash/User_el_in_dash";
import { useDispatch, useSelector } from "react-redux";
import {
  get_all_users,
  get_users_by_type,
} from "../../rtk/Redusers/users/users.slice";
import "./styleforusers.css";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
// import Edit_user from "../../Pages/Edit_Page/Edit_page";
export default function Users_control() {
  const [type, settype] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_users());
  }, []);
  useEffect(() => {
    if (type) dispatch(get_users_by_type(type.trim()));
  }, [type, dispatch]);
  // console.log(type);

  return (
    <div className="table">
      <select
        value={type}
        className="form-select form-select-lg mb-3 w-25 "
        onChange={async (event) => {
          settype(event.target.value);
        }}
      >
        <option>Select User type</option>
        <option>admins</option>
        <option>user</option>
        <option>inestructor </option>
      </select>
      <div className="container-fulid">
        <table className="users_table table table-striped table-hover">
          <div className="userinformation">
            {/* <Edit_user person={user} /> */}
          </div>
          <thead>
            <tr>
              <th>id</th>
              <th>img</th>
              <th>name</th>
              <th>addres </th>
              <th>age </th>
              <th>phone </th>
              <th>email </th>
              <th>ActiControl </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              console.log(user.type === type);

              return <User_el_in_dash user={user} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
