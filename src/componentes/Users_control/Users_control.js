import React, { useEffect } from "react";
import User_el_in_dash from "../user_el_in_dash/User_el_in_dash";
import { useDispatch, useSelector } from "react-redux";
import { get_all_users } from "../../rtk/Redusers/users/users.slice";
import "./styleforusers.css";
// import Edit_user from "../../Pages/Edit_Page/Edit_page";
export default function Users_control() {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_all_users());
  }, []);

  return (
    <table className="users_table">
      <div className="userinformation">{/* <Edit_user person={user} /> */}</div>
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
          return <User_el_in_dash user={user} />;
        })}
      </tbody>
    </table>
  );
}
