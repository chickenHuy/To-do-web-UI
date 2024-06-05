import React from "react";
import { Routes, Route } from "react-router-dom";
import Accout from "../pages/accout/accout";
import Home from "../pages/home/home";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Accout />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;