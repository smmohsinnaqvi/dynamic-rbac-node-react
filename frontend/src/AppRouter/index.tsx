import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Layout from "../Layout";
import Dashboard from "../Pages/Dashboard";

// Lazy load your pages for code-splitting

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/home"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
        </Routes>
        {/* </Layout> */}
      </Suspense>
    </Router>
  );
};

export default AppRouter;
