import { Outlet, Route, Routes } from "react-router-dom";
import PermissionChecker from "./PermissionChecker";
import { Fragment } from "react/jsx-runtime";

const RouteHandler = ({ routes, container }: any) => {
  const createRoutes = (route, i) => {
    const element = route?.permissions ? (
      <PermissionChecker
        permissions={route.permissions}
        permissionStrategy={route.permissionStrategy}
      >
        {route.component}
      </PermissionChecker>
    ) : (
      route.component
    );

    return (
      <Route element={element} path={route.path} key={route.path}>
        {route.children?.map(createRoutes)}
      </Route>
    );
  };

  return <Routes>{routes.map(createRoutes)}</Routes>;
};

export default RouteHandler;
