import { Suspense } from "react";
import RouteHandler from "./RouteHandler";
import Layout from "../Layout";
import privateRoutes from "./PrivateRoutes";
import publicRoutes from "./PublicRoutes";

const Routes: React.FC = () => {
  const isAuthenticated = true;
  return (
    <Suspense fallback={<></>}>
      <>
        {isAuthenticated ? (
          <RouteHandler routes={privateRoutes} />
        ) : (
          <RouteHandler routes={publicRoutes} />
        )}
      </>
    </Suspense>
  );
};

export default Routes;
