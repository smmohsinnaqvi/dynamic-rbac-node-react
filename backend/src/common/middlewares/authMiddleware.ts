import { Request, Response, NextFunction } from "express";
import { Service } from "typedi";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { Role } from "../models/Role";

@Service()
export class AuthMiddleware {
  async authAndAuthorize(action?: string, resource?: string) {
    return async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      try {
        // 1️⃣ Check if Authorization header is present
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) {
          res
            .status(401)
            .json({ message: "Access Denied. No token provided." });
          return;
        }

        // 2️⃣ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
          id: string;
        };
        const user = await User.findById(decoded.id).populate("role").lean();

        if (!user) {
          res.status(401).json({ message: "Invalid user." });
          return;
        }

        // Attach user to request
        (req as any).user = user;

        // 3️⃣ If no action & resource are provided, skip permission check
        if (!action || !resource) {
          next();
          return;
        }

        // 4️⃣ Get role-based permissions
        const RoleObject = await Role.findById(user?.role?._id)
          .populate("permissions")
          .lean();
        const rolePermissions = RoleObject?.permissions;
        // 5️⃣ Check if the user has the required permission
        const hasPermission = rolePermissions?.some(
          (perm: any) => perm?.action === action && perm?.resource === resource
        );

        if (!hasPermission) {
          res.status(403).json({
            message: "Forbidden: You don't have access to this resource.",
          });
          return;
        }

        // 6️⃣ User is authenticated & authorized, proceed to next middleware/route handler
        next();
      } catch (error) {
        console.error("Authorization Error:", error);
        res.status(401).json({ message: "Invalid or expired token." });
      }
    };
  }
}
