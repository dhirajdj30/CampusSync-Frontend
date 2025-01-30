import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import CanteenPage from "../pages/CanteenPage";
import PrintingPage from "../pages/PrintingPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/" element={<PrivateRoute />}> */}
        <Route index element={<LandingPage />} />
        <Route path="canteen" element={<CanteenPage />} />
        <Route path="printing" element={<PrintingPage />} />
        <Route path="profile" element={<ProfilePage />} />
      {/* </Route> */}
    </Routes>
  );
};

export default AppRouter;