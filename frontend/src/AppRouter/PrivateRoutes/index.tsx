import { Navigate } from "react-router-dom";
import { PERMISSIONS } from "../../constants/permissions";
import { RouteConstants } from "../../constants/route-constants";
import Layout from "../../Layout";
import Dashboard from "../../Pages/Dashboard";
import About from "../../Pages/About";
import Conversations from "../../Pages/Conversations";
import Requirements from "../../Pages/Requirements";

const privateRoutes = [
  {
    path: "/",
    component: <Layout />,

    children: [
      {
        path: "/",
        component: <Navigate to={RouteConstants.ROUTE_DASHBOARD} />,
      },
      {
        path: RouteConstants.ROUTE_DASHBOARD,
        component: <Dashboard />,
        permissions: [PERMISSIONS.VIEW_DASHBOARD],
      },
      {
        path: RouteConstants.ROUTE_ABOUT,
        component: <About />,
        permissions: [PERMISSIONS.VIEW_ABOUT],
      },
      {
        path: RouteConstants.ROUTE_SETTINGS,
        component: <About />,
        permissions: [PERMISSIONS.VIEW_SETTINGS],
      },
      {
        path: RouteConstants.ROUTE_CONVERSATION,
        component: <Conversations />,
        permissions: [PERMISSIONS.VIEW_CONVERSATIONS],
      },
      {
        path: RouteConstants.ROUTE_DEALS,
        component: <About />,
        permissions: [PERMISSIONS.VIEW_DEALS],
      },
      {
        path: RouteConstants.ROUTE_EXPORT,
        component: <About />,
        permissions: [PERMISSIONS.VIEW_EXPORT],
      },
      {
        path: RouteConstants.ROUTE_GEOGRAPHY,
        component: <Requirements />,
        permissions: [PERMISSIONS.VIEW_GEOGRAPHY],
      },
      {
        path: RouteConstants.ROUTE_REPORTS,
        component: <About />,
        permissions: [PERMISSIONS.VIEW_REPORTS],
      },
    ],
  },
];

export default privateRoutes;
