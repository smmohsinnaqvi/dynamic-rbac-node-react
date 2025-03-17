import { Navigate } from "react-router-dom";
import useAppPermission from "../Hooks/useAppPermission";

const PermissionChecker = ({
  permissions = [],
  permissionStrategy = "ANY", // ANY | ALL
  children,
}) => {
  const { hasAllPermission, hasAnyPermission } = useAppPermission();

  console.log("✅ Route Permissions:", permissions); // Check what route needs

  const hasPermission =
    permissionStrategy === "ANY"
      ? hasAnyPermission(permissions)
      : hasAllPermission(permissions);

  console.log("🔍 Has Permission:", hasPermission); // Check final condition

  if (!hasPermission) {
    return <Navigate to="/no-permission" replace />;
  }

  return children;
};

export default PermissionChecker;
