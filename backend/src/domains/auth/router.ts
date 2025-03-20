import { Router } from "express";
import { AuthController } from "./controller";
import { Service } from "typedi";

@Service()
export class AuthRouter {
  private router: Router;

  constructor(private authController: AuthController) {
    this.router = Router();
    this.addRoutes();
  }

  getRoutes() {
    return this.router;
  }

  private addRoutes() {
    this.router.post("/signup", this.authController.signup);
    this.router.post("/login", this.authController.login);
    this.router.post("/forgot-password", this.authController.forgotPassword);
  }
}
