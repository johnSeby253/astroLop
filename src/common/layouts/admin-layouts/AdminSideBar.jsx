import React from "react";
import AdminMenuCard from "./AdminMenuCard";
import { Admin_routes } from "@/routes/admin_Routes/adminRoutes";

const AdminSideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuRoutes = Admin_routes.filter(
    (route) => route.menubar && route.permission
  );

  return (
    <div className="bg-background shadow-card rounded-tr-[14px] p-3 h-full w-full ">

      {/* Close Button (only mobile) */}
      {sidebarOpen && (
        <div className="w-full flex items-center justify-end">
          <button
            className=" lg:hidden p-2 bg-white rounded shadow"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
      )}

      <div className="flex flex-col gap-2">
        {menuRoutes.map((item) => (
          <AdminMenuCard key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AdminSideBar;