import React from "react";
import ActionBar from "../../Layout/ActionBar";
import { Grid2, Stack, Typography } from "@mui/material";
import RevenueCard from "../Dashboard/Cards/RevenueCard";
import MNGridCard from "../../Components/MNGridCard";
import LostDealCard from "../Dashboard/Cards/LostDealCard";
import "./index.css";

function About() {
  const breadCrumbs = [
    {
      label: "About",
      path: "/about",
    },
  ];
  return (
    <Stack>
      <ActionBar breadCrumbs={breadCrumbs} />
      <div className="about-container">
        <h1>🚀 About the Project</h1>
        <p>
          This project is a **highly scalable and dynamic routing architecture
          built with React Router v6**, supporting **Role-Based Access Control
          (RBAC)** and **Permission-Based Navigation**.
        </p>

        <h2>🎯 Problem Statement</h2>
        <p>
          In large-scale applications, not all routes are accessible to all
          users. Access depends on **user roles and their assigned
          permissions**. This architecture ensures **secure and restricted
          access** based on **user-specific roles & permissions.**
        </p>

        <h2>🛠️ Tech Stack</h2>
        <ul>
          <li>React.js</li>
          <li>React Router v6</li>
          <li>React Context API</li>
          <li>Custom Hook for Permission Handling</li>
          <li>Protected Routes with Role-Based Access Control</li>
        </ul>

        <h2>🏁 Project Architecture</h2>
        <pre>
          📂 src │ ├── 📂 routes │ ├── PrivateRoutes.js │ ├── PublicRoutes.js │
          ├── RouteHandler.js │ └── PermissionChecker.js │ ├── 📂 hooks │ └──
          useAppPermission.js │ ├── 📂 constants │ └── permissions.js │ ├── 📂
          pages │ ├── Dashboard.js │ ├── About.js │ ├── Login.js │ ├──
          NoPermission.js │ └── Error404.js │ ├── 📂 components │ └── Layout.js
          │ └── App.js
        </pre>

        <h2>✅ Features Implemented</h2>
        <ul>
          <li>Separate Private & Public Routes Handling</li>
          <li>Role-Based Access Control with Permission Handling</li>
          <li>Reusable `PermissionChecker` Component</li>
          <li>Nested Layout Support (Layout Inside Layout)</li>
          <li>Redirection for Unauthorized Access</li>
          <li>404 Page Handling</li>
        </ul>

        <h2>🔐 Permission Handling Logic</h2>
        <p>
          I've created a **custom hook `useAppPermission`** to handle all the
          permission-related logic.
        </p>
        <pre>
          {`const useAppPermission = () => {
  const userPermissions = [PERMISSIONS.VIEW_DASHBOARD]; 

  const hasAllPermission = (permissions) =>
    permissions.every((perm) => userPermissions.includes(perm));

  const hasAnyPermission = (permissions) =>
    permissions.some((perm) => userPermissions.includes(perm));

  return { hasAllPermission, hasAnyPermission };
};`}
        </pre>

        <h2>🌟 Why This Architecture?</h2>
        <ul>
          <li>Clean and Scalable Code Structure</li>
          <li>Reusable and Configurable Route Handling</li>
          <li>Role-Based Access Control (ANY | ALL Strategy)</li>
          <li>Deep Nested Layout Support</li>
        </ul>

        <h2>🏁 Current Flow</h2>
        <table>
          <thead>
            <tr>
              <th>Route</th>
              <th>Required Permission</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/dashboard</td>
              <td>VIEW_DASHBOARD</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>/resources</td>
              <td>MANAGE_RESOURCE</td>
              <td>❌ No</td>
            </tr>
            <tr>
              <td>/admin</td>
              <td>ADMIN</td>
              <td>❌ No</td>
            </tr>
          </tbody>
        </table>

        <h2>🚀 Final Goal</h2>
        <p>
          To build a **fully scalable, high-performance Role-Based Routing
          System** that supports **Multi-Role Access Management** with **Deep
          Nested Layout Support.**
        </p>

        <h2>✅ Project Successfully Completed 🔥</h2>
      </div>
    </Stack>
  );
}

export default About;
