import { Router } from "express";
import { Service } from "typedi";
import { RoleController } from "./controller";

@Service()
export class RoleRouter {
  private router: Router;

  constructor(private roleController: RoleController) {
    this.router = Router();
    this.addRoutes();
  }

  getRoutes() {
    return this.router;
  }

  private addRoutes() {
    this.router.get("/", this.roleController.getRoleList);

    this.router.post("/create", this.roleController.createRoleAndPermissions);
    this.router.put(
      "/update/:roleId",
      this.roleController.updateRoleAndPermissions
    );
    this.router.get("/permissions", this.roleController.getAllPermissions);
    this.router.get(
      "/:roleId/permissions",
      this.roleController.getRolePermissions
    );
    this.router.delete("/:roleId", this.roleController.deleteRole);
  }
}
