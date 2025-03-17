import { RouteConstants } from "../../constants/route-constants";
import Login from "../../Pages/Login";

const publicRoutes = [
  {
    path: RouteConstants.ROUTE_LOGIN,
    component: <Login />,
  },
];

export default publicRoutes;
