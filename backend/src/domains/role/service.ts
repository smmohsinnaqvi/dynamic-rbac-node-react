import { Service } from "typedi";
import { IPermission, Permission } from "../../common/models/Permission";
import { Role } from "../../common/models/Role";
import { Types } from "mongoose";
import { User } from "../../common/models/User";

@Service()
export class RoleService {
  createRoleAndPermissions = async (
    roleName: string,
    permissions: string[]
  ) => {
    const role = new Role({ name: roleName, permissions });
    return await role.save();
  };

  updateRoleAndPermissions = async (roleId: string, permissions: string[]) => {
    const role = await Role.findById(roleId);
    if (!role) {
      throw new Error("Role not found");
    }

    // Validate if provided permissions exist
    const validPermissions = await Permission.find({
      _id: { $in: permissions },
    });
    const validPermissionIds = validPermissions.map((perm: any) => perm._id);

    // Update role's permissions
    role.permissions = validPermissionIds;
    await role.save();

    return role;
  };

  getAllPermissions = async () => {
    const permissions = await Permission.find().lean();

    console.log(permissions);

    const transformedPermissions = permissions.map((perm) => ({
      name: `${perm?.action}-${perm?.resource}`,
      ...perm,
    }));

    return transformedPermissions;
  };

  getRolePermissions = async (roleId: string) => {
    const role = await Role.findById(roleId).populate("permissions").lean();

    if (!role) {
      throw new Error("Role not found");
    }

    if (!role.permissions.length) {
      return [];
    }

    // Transform permissions
    const permissionList = role.permissions.map(
      ({ action, resource, _id }: any) => ({
        name: `${action}-${resource}`, // Concatenated action-resource
        _id, // Keep other fields except action & resource
      })
    );

    return permissionList;
  };

  deleteRole = async (roleId: string) => {
    const role = await Role.findById(roleId);
    if (!role) {
      throw new Error("Role not found");
    }

    // Check if any users are assigned to this role
    const assignedUsers = await User.countDocuments({ role: roleId });
    if (assignedUsers > 0) {
      throw new Error("Cannot delete role. It is assigned to users.");
    }

    // Delete the role
    return await Role.findByIdAndDelete(roleId);
  };

  getRoleList = async () => {
    //     const user = await User.findById(userId).populate("role").lean();

    //     const RoleObject = await Role.findById(user?.role?._id)
    //       .populate("permissions")
    //       .lean();
    //     console.log(RoleObject?.permissions);
    //   };
    return await Role.find().select("-permissions");
  };
}
