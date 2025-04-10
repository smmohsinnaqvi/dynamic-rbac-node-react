import { Service } from "typedi";
import { RoleService } from "./service";
import { Request, Response } from "express";

@Service()
export class RoleController {
  constructor(private roleService: RoleService) {}

  // 🔹 Create Role and Assign Permissions
  createRoleAndPermissions = async (req: Request, res: Response) => {
    try {
      const { roleName, permissions } = req.body;
      const response = await this.roleService.createRoleAndPermissions(
        roleName,
        permissions
      );
      res.status(201).json(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  // 🔹 Update Role's Permissions
  updateRoleAndPermissions = async (req: Request, res: Response) => {
    try {
      const { roleId } = req.params;
      const { permissions } = req.body;
      const response = await this.roleService.updateRoleAndPermissions(
        roleId,
        permissions
      );
      res.status(200).json(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  // 🔹 Get All Permissions
  getAllPermissions = async (_req: Request, res: Response) => {
    try {
      const response = await this.roleService.getAllPermissions();
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  // 🔹 Get Role's Permissions
  getRolePermissions = async (req: Request, res: Response) => {
    try {
      const { roleId } = req.params;
      const response = await this.roleService.getRolePermissions(roleId);
      res.status(200).json(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  // 🔹 Delete Role
  deleteRole = async (req: Request, res: Response) => {
    try {
      const { roleId } = req.params;
      await this.roleService.deleteRole(roleId);
      res.status(200).json({ message: "Role deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  getRoleList = async (req: Request, res: Response) => {
    try {
      const response = await this.roleService.getRoleList();
      return res.status(200).json({ roleList: response });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
