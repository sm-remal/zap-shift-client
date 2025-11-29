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
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";



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
            loader: () => fetch("/services_area.json").then(res => res.json()),
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
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "approve-riders",
        Component: ApproveRiders,
      }
    ]
  }
]);