import { Navigate } from "react-router-dom";
import { PERMISSIONS } from "../../constants/permissions";
import { RouteConstants } from "../../constants/route-constants";
import Layout from "../../Layout";
import Dashboard from "../../Pages/Dashboard";

const privateRoutes = [
  {
    path: "/",
    component: <Navigate to={RouteConstants.ROUTE_DASHBOARD} />,
  },
  {
    path: "/",
    component: <Layout />,

    children: [
      {
        path: RouteConstants.ROUTE_DASHBOARD,
        component: <Dashboard />,
        permissions: [PERMISSIONS.VIEW_DASHBOARD],
      },
    ],
  },
];

export default privateRoutes;
