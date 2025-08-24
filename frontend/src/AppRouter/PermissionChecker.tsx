import { Navigate } from "react-router-dom";
import useAppPermission from "../Hooks/useAppPermission";

const PermissionChecker = ({
  permissions = [],
  permissionStrategy = "ANY", // ANY | ALL
  children,
}) => {
  const { hasAllPermission, hasAnyPermission } = useAppPermission();

  const hasPermission =
    permissionStrategy === "ANY"
      ? hasAnyPermission(permissions)
      : hasAllPermission(permissions);

  if (!hasPermission) {
    return <Navigate to='/no-permission' replace />;
  }

  return children;
};

export default PermissionChecker;
