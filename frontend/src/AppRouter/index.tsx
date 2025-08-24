import { Suspense } from "react";
import RouteHandler from "./RouteHandler";
import privateRoutes from "./PrivateRoutes";
import publicRoutes from "./PublicRoutes";
import { useAppSelector } from "../redux/hooks";

const Routes: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state?.auth);
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
