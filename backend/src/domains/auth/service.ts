import { Service } from "typedi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Role } from "../../common/models/Role";
import { User } from "../../common/models/User";
import { Permission } from "../../common/models/Permission";

dotenv.config();

interface ITokenPayload {
  userId: string;
  email: string;
  role: string;
}

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

  generateAccessToken(tokenPayload: ITokenPayload): string {
    return jwt.sign({ tokenPayload }, this.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
  }

  generateRefreshToken(tokenPayload: ITokenPayload): string {
    return jwt.sign({ tokenPayload }, this.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
  }

  async register(
    firstName: string,
    lastName: string,
    phone: string,
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
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
      role: role._id,
    });
    await user.save();
    return user;
  }

  // 🔹 Login User & Generate Tokens
  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email");

    const isMatch = await this.comparePassword(password, user.password);
    if (!isMatch) throw new Error("Incorrect password");

    console.log("User -->", user);

    const role = await Role.findById(user.role);
    if (!role) throw new Error("Invalid Role");

    const permissionList = [];
    if (role?.permissions?.length) {
      for (const perm of role.permissions) {
        const permission = await Permission.findById(perm);
        if (permission) {
          permissionList.push(`${permission.action}-${permission.resource}`);
        }
      }
    }

    console.log("Role -->", role);

    const tokenPayload = {
      userId: user._id as string,
      email: user.email,
      role: role.name,
    };

    return {
      userId: user?._id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      phone: user?.phone,
      email: user.email,
      role: role?.name,
      permissionList,
      accessToken: this.generateAccessToken(tokenPayload),
      refreshToken: this.generateRefreshToken(tokenPayload),
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
