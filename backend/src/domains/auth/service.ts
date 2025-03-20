import { Service } from "typedi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

@Service()
export class AuthService {
  private ACCESS_TOKEN_SECRET =
    process.env.ACCESS_TOKEN_SECRET || "access_secret";
  private REFRESH_TOKEN_SECRET =
    process.env.REFRESH_TOKEN_SECRET || "refresh_secret";
  private SALT_ROUNDS = 10;

  // Hash password
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.SALT_ROUNDS);
  }

  // Compare password
  async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  // Generate Access Token
  generateAccessToken(userId: string): string {
    return jwt.sign({ userId }, this.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
  }

  // Generate Refresh Token
  generateRefreshToken(userId: string): string {
    return jwt.sign({ userId }, this.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
  }
}
