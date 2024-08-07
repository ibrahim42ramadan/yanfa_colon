import { createBrowserRouter } from "react-router-dom";
import Profile from "../Pages/ProfilePage";
import Root from "../Root";
import UserInformation from "../componentes/UserInformation";
import RegisterPage from "../Pages/RigesterPage";
import LoginUser from "../componentes/Login";
import Dashbord from "../Pages/Dashbord";
import AddMaster from "../componentes/AddMaster";
import AddCours from "../componentes/AddCours";
import HomePage from "../Pages/Homepage";
import CoursInformation from "../Pages/CoursInformation/CoursInformation";
import Favoret from "../componentes/Favoret/Favoret";
import Search from "../Pages/Search/Search";
import Departmentes from "../componentes/DepartMentes/Departmentes";
import Users_control from "../componentes/Users_control/Users_control";
import Inestractor from "../componentes/Instructor/inestractor";
import All_coursess from "../componentes/All_coursess";
import Edit_user from "../Pages/Edit_Page/Edit_page";
import Erro_404 from "../Pages/error/Erro_404";
import Category_detals from "../Pages/categore_detals/Category_detals";
export const rootRouting = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Erro_404 />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "coursInformation/:id",
        element: <CoursInformation />,
      },
      {
        path: "Search/:searchvalue",
        element: <Search />,
      },
      {
        path: "coursInformation/:id",
        element: <CoursInformation />,
      },
      {
        path: "Profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <UserInformation />,
          },
          {
            path: "UserInformation",
            element: <UserInformation />,
          },
          {
            path: "Favoret",
            element: <Favoret />,
          },
        ],
      },

      {
        path: "RegisterUser",
        element: <RegisterPage />,
      },
      {
        path: "RegisterPage",
        element: <RegisterPage />,
      },
      {
        path: "LoginUser",
        element: <LoginUser />,
      },
      {
        path: "Dashbord",
        element: <Dashbord />,
        children: [
          { path: "AddMaster", element: <AddMaster /> },
          { path: "AddCours", element: <AddCours /> },
          { path: "Departmentes", element: <Departmentes /> },
          { path: "Users_control", element: <Users_control /> },
          { path: "Inestractor", element: <Inestractor /> },
          { path: "All_coursess", element: <All_coursess /> },
          { path: "Edit_user/:userid", element: <Edit_user /> },
          { path: "Category/:id", element: <Category_detals /> },
          // { path: "AddCours", element: <AddCours /> },
          // { path: "AddCours", element: <AddCours /> },
        ],
      },
    ],
  },
]);
