import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";



export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "coverage",
            Component: Coverage,
            loader: () => fetch("/services_area.json")
        },
        {
            path: "about",
            Component: About
        }
    ]
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      }
    ]
  }
]);