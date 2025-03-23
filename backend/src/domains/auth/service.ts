import { Service } from "typedi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Role } from "../../common/models/Role";
import { User } from "../../common/models/User";

dotenv.config();

@Service()
export class AuthService {
  private ACCESS_TOKEN_SECRET =
    process.env.ACCESS_TOKEN_SECRET || "access_secret";
  private REFRESH_TOKEN_SECRET =
    process.env.REFRESH_TOKEN_SECRET || "refresh_secret";
  private SALT_ROUNDS = 10;

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.SALT_ROUNDS);
  }

  async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  generateAccessToken(userInfo: any): string {
    return jwt.sign({ userInfo }, this.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
  }

  generateRefreshToken(userInfo: any): string {
    return jwt.sign({ userInfo }, this.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
  }

  async register(
    name: string,
    email: string,
    password: string,
    roleName: string
  ) {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User with e-mail already exist");

    const hashedPassword = await this.hashPassword(password);

    const role = await Role.findOne({ name: roleName });
    if (!role) throw new Error("Role not found");

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role._id,
    });
    await user.save();
    return user;
  }

  // 🔹 Login User & Generate Tokens
  async login(email: string, password: string) {
    const user = await User.findOne({ email }).populate("role");
    if (!user) throw new Error("Invalid email");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Incorrect password");

    const role = await Role.findById(user.role).populate("permissions");

    const accessToken = this.generateAccessToken({
      userId: user._id,
      email: user?.email,
      role: role?.name,
    });
    const refreshToken = this.generateRefreshToken({
      userId: user._id,
      email: user?.email,
      role: role?.name,
    });
    const permissions =
      role?.permissions.map((p: any) => ({
        key: `${p.action.toUpperCase()}_${p.resource.toUpperCase()}`,
      })) || [];

    return {
      email: user.email,
      role: role?.name,
      permissions,
      accessToken,
      refreshToken,
    };
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      const decoded: any = jwt.verify(refreshToken, this.REFRESH_TOKEN_SECRET);

      // Generate a new access token
      const newAccessToken = this.generateAccessToken(decoded);

      return { accessToken: newAccessToken };
    } catch (error) {
      throw new Error("Invalid or expired refresh token");
    }
  }
}
