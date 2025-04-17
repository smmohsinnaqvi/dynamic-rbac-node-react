import { Navigate } from "react-router-dom";
import { RouteConstants } from "../../constants/route-constants";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Verification from "../../Pages/Verification";
import ForgotPassword from "../../Pages/ForgotPassword";
import ResetPassword from "../../Pages/ResetPassword";

const publicRoutes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        component: <Navigate to={RouteConstants.ROUTE_LOGIN} />,
      },

      {
        path: RouteConstants.ROUTE_LOGIN,
        component: <Login />,
      },
      {
        path: RouteConstants.ROUTE_SIGNUP,
        component: <SignUp />,
      },
      {
        path: RouteConstants.ROUTE_VERIFY,
        component: <Verification />,
      },
      {
        path: RouteConstants.ROUTE_FORGOT_PASSWORD,
        component: <ForgotPassword />,
      },

      {
        path: RouteConstants.ROUTE_RESET_PASSWORD,
        component: <ResetPassword />,
      },
    ],
  },
];

export default publicRoutes;
