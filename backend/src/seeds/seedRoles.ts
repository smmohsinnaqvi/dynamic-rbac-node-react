import mongoose from "mongoose";
import { Permission } from "../common/models/Permission";
import { Role } from "../common/models/Role";

const MONGO_URI = "mongodb://localhost:27017/OrangeFarm";

const seedRoles = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Fetch all permissions
    const permissions = await Permission.find();

    if (permissions.length === 0) {
      console.error(
        "No permissions found. Run the seedPermissions script first."
      );
      return;
    }

    const roles = [
      // {
      //   name: "Organization",
      //   permissions: permissions
      //     .filter((p) => p.action === "view")
      //     .map((p) => p._id),
      // },
      {
        name: "Admin",
        permissions: permissions.map((p) => p._id),
      },
    ];

    await Role.insertMany(roles);
    console.log("Roles seeded successfully!");
  } catch (error) {
    console.error("Error seeding roles:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedRoles();
