import { Schema, model, Document } from "mongoose";
import { IPermission } from "./Permission";

export interface IRole extends Document {
  name: string;
  permissions: IPermission[];
}

const RoleSchema = new Schema<IRole>({
  name: { type: String, required: true, unique: true },
  permissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
});

export const Role = model<IRole>("Role", RoleSchema);
