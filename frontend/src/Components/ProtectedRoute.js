import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function ProtectedRoute() {
    const { auth } = useAuth();

    return (
        auth ? <Outlet /> : <Navigate to="/" />
    );
}

export default ProtectedRoute;