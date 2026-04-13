import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("adminToken"); // or your auth logic

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin-login" replace />;
};

export default PrivateRoute;