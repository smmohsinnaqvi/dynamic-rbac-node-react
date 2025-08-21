import { PERMISSIONS } from "../constants/permissions";
import { useAppSelector } from "../redux/hooks";

const useAppPermission = () => {
  const { user } = useAppSelector((state) => state.auth);
  const userPermissions = user?.permissionList;

  // Function to check if user has **all the permissions**
  const hasAllPermission = (requiredPermissions = []) => {
    return requiredPermissions.every((permission) =>
      userPermissions.includes(permission)
    );
  };

  // Function to check if user has **any of the permission**
  const hasAnyPermission = (requiredPermissions = []) => {
    return requiredPermissions.some((permission) =>
      userPermissions.includes(permission)
    );
  };

  return { hasAllPermission, hasAnyPermission };
};

export default useAppPermission;
