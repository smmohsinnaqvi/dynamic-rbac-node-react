import { PERMISSIONS } from "../constants/permissions";

const useAppPermission = () => {
  // Assuming you get user permissions from context or redux store
  const userPermissions = [
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.VIEW_ABOUT,
    PERMISSIONS.VIEW_SETTINGS,
    PERMISSIONS.VIEW_CONVERSATIONS,
  ];

  console.log(`user permissions - > ${userPermissions}`);

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
