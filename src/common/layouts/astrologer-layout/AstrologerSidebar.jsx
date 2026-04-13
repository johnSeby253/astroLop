import React from "react";
import { Astrologer_routes } from "@/routes/Astrologer_Routes/astro_Routes";
import AstrologerMenuCard from "./AstrologerMenuCard";

const AstrologerSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuRoutes = Astrologer_routes.filter(
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
          <AstrologerMenuCard key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AstrologerSidebar;