import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: mongoose.Types.ObjectId;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
