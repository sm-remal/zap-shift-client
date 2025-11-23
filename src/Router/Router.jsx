import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";
import Rider from "../pages/Rider/Rider";
import PrivateRoutes from "./PrivateRoutes";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import SandParcel from "../pages/SandParcel/SandParcel";



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
            loader: () => fetch("/services_area.json").then(res => res.json()),
        },
        {
            path: "about",
            Component: About
        },
        {
            path: "rider",
            element: <PrivateRoutes><Rider></Rider></PrivateRoutes>
        },
        {
            path: "send-parcel",
            loader: () => fetch("/services_area.json").then(res => res.json()),
            element: <PrivateRoutes><SandParcel></SandParcel></PrivateRoutes>
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
      },
      {
        path: "forget-password",
        Component: ForgetPassword,
      }
    ]
  }
]);