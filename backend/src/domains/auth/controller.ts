import { Service } from "typedi";
import { AuthService } from "./service";
import { UserService } from "../user/service";
import { Request, Response } from "express";

@Service()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  // Signup
  signup = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const existingUser = await this.userService.findByEmail(email);
      if (existingUser)
        return res.status(400).json({ message: "User already exists" });

      const hashedPassword = await this.authService.hashPassword(password);
      const newUser = await this.userService.createUser(email, hashedPassword);

      return res.status(201).json({ message: "User created", user: newUser });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  };

  // Login
  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await this.userService.findByEmail(email);

      if (!user)
        return res.status(400).json({ message: "Invalid email or password" });

      const isMatch = await this.authService.comparePassword(
        password,
        user.password
      );
      if (!isMatch)
        return res.status(400).json({ message: "Invalid email or password" });

      const accessToken = this.authService.generateAccessToken(user.id);
      const refreshToken = this.authService.generateRefreshToken(user.id);

      return res.json({ accessToken, refreshToken });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  };

  // Forgot Password
  forgotPassword = async (req: Request, res: Response) => {
    try {
      const { email, newPassword } = req.body;
      const user = await this.userService.findByEmail(email);

      if (!user) return res.status(400).json({ message: "User not found" });

      const hashedPassword = await this.authService.hashPassword(newPassword);
      await this.userService.updatePassword(user.id, hashedPassword);

      return res.json({ message: "Password updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  };
}
