import mongoose, { Schema, model, Document, Types } from "mongoose";
import { IPermission } from "./Permission";

export interface IRole extends Document {
  name: string;
  permissions: Types.ObjectId[] | IPermission[];
}

const RoleSchema = new Schema<IRole>(
  {
    name: { type: String, required: true, unique: true },
    permissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
  },
  { timestamps: true }
);

export const Role = mongoose.model<IRole>("Role", RoleSchema);
