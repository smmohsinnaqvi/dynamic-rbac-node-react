import { Service } from "typedi";
import { AuthService } from "./service";
import { Request, Response } from "express";

@Service()
export class AuthController {
  constructor(private authService: AuthService) {}

  register = async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, phone, email, password, role } = req.body;
      let roleToAssign = role;
      if (!role) {
        roleToAssign = "Admin";
      }
      const user = await this.authService.register(
        firstName,
        lastName,
        phone,
        email,
        password,
        roleToAssign
      );
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  // 🔹 Login User
  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const data = await this.authService.login(email, password);
      console.log(data);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  refreshAccessToken = async (req: Request, res: Response) => {
    try {
      const { refreshToken } = req.body;
      const data = await this.authService.refreshAccessToken(refreshToken);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
