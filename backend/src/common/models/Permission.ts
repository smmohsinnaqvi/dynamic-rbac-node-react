import { Schema, model, Document } from "mongoose";

export interface IPermission extends Document {
  resource: string; // e.g., "user", "project"
  action: string; // e.g., "create", "read", "update", "delete"
  description?: string;
}

const PermissionSchema = new Schema<IPermission>({
  resource: { type: String, required: true },
  action: { type: String, required: true },
  description: { type: String },
});

export const Permission = model<IPermission>("Permission", PermissionSchema);
