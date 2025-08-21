import { Permission } from "../common/models/Permission";

import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/OrangeFarm";

const seedPermissions = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const permissions = [
      {
        resource: "dashboard",
        action: "read",
        description: "view dashboard access",
      },
      {
        resource: "dashboard",
        action: "update",
        description: "up dashboard access",
      },
      {
        resource: "about",
        action: "view",
        description: "view about access",
      },
      {
        resource: "settings",
        action: "create",
        description: "create new roles",
      },
      {
        resource: "settings",
        action: "read",
        description: "create new roles",
      },
      {
        resource: "settings",
        action: "update",
        description: "create new roles",
      },
      {
        resource: "role_permission",
        action: "read",
        description: "view roles & permission",
      },
      {
        resource: "role_permission",
        action: "update",
        description: "update roles & permissions",
      },
      {
        resource: "role_permission",
        action: "delete",
        description: "delete roles & permissions",
      },
    ];

    await Permission.insertMany(permissions);
    console.log("Permissions seeded successfully!");
  } catch (error) {
    console.error("Error seeding permissions:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedPermissions();
