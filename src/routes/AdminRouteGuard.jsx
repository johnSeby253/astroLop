import useStoreRoles from "@/public-Store/useStoreRoles";
import { Navigate, Outlet } from "react-router-dom";

const AdminRouteGuard = ({ isPrivate, role }) => {
  const setRole = useStoreRoles((state) => state.setRole);
  if (role) setRole(role);

  const tokenKeys = {
    admin: "adminToken",
    astrologer: "astrologerToken",
    // user: "userToken",
  };

  const token = localStorage.getItem(tokenKeys[role]);

  // console.log("Role", role);


  const loginRoutes = {
    admin: "/admin-login",
    astrologer: "/astrologer-login",
    user: "/login",
  };

  const dashboardRoutes = {
    admin: "/admin-dashboard",
    astrologer: "/astrologer-dashboard",
    user: "/",
  };

  // If private route and no token → login
  if (isPrivate && !token) {
    return <Navigate to={loginRoutes[role]} replace />;
  }

  // If public route and token exists → dashboard
  if (!isPrivate && token) {
    return <Navigate to={dashboardRoutes[role]} replace />;
  }

  return <Outlet />;
};

export default AdminRouteGuard;