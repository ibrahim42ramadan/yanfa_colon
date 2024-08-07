import React from "react";
import "./style.css";
import { faCircleXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  delete_User,
  get_all_users,
} from "../../rtk/Redusers/users/users.slice";
import RegisterPage from "../../Pages/RigesterPage";
import Edit_user from "../../Pages/Edit_Page/Edit_page";
import { useNavigate } from "react-router-dom";

export default function User_el_in_dash({ user }) {
  const dispatch = useDispatch();
  const navto = useNavigate();
  const ediet_user = <Edit_user person={user} />;
  return (
    <>
      {" "}
      <tr className="User_el_in_dash">
        <td>#{user.id}</td>
        <td>
          <img src={user.thomnaile} alt="User" />
        </td>
        <td>
          {user.first_name} {user.last_name}
        </td>
        <td>{user.address}</td>
        <td>{user.age}</td>
        <td>{user.phone_number}</td>
        <td className="text-primary">{user.email}</td>
        <td className="">
          <button
            className="ms-2 text-danger mx-1"
            onClick={async () => {
              await dispatch(delete_User(user.id));
              await dispatch(get_all_users());
              console.log(user.id);
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <button
            className="  ms-4 text-primary"
            onClick={() => {
              navto(`/Dashbord/Edit_user/${user.id}`);
              console.log(ediet_user);
            }}
          >
            <FontAwesomeIcon icon={faPen} />{" "}
          </button>
        </td>
      </tr>
    </>

    // <section className="User_el_in_dash">
    //   <div className="thomniale">
    //     <img src={user.thomnaile}></img>
    //   </div>
    //   <div className="information">
    //     <span>
    //       {user.first_name}
    //       {user.last_name}
    //     </span>
    //     <span>{user.address}</span>
    //     <span>{user.age}</span>
    //     <span>{user.phone_number}</span>
    //     <span>{user.email}</span>
    //   </div>
    //   <div className="action">
    //     <button>delete</button>
    //     <button>ediet</button>
    //   </div>
    // </section>
  );
}
