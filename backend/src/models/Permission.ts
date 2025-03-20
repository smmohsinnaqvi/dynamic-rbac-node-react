import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema({
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  resource: { type: String, required: true },
  action: { type: String, required: true },
});

module.exports = mongoose.model("Permission", PermissionSchema);
