import React, { useState, useEffect } from "react";
import logo from "@/assets/admin-assets/logo_white.svg";
import notification from "@/assets/admin-assets/notification.svg";
import menu from "@/assets/admin-assets/menu.svg";
import LogOut from "@/assets/admin-assets/log-out.svg"
import Button from "@/common/components/Button";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const navigate = useNavigate();

  // Disable scroll when menu opens
  useEffect(() => {
    if (openSideMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openSideMenu]);

  return (
    <div className="w-full h-[70px] flex items-center justify-between shadow-lg relative px-4">

      {/* Logo */}
      <div className="h-[70px] flex items-center">
        <img src={logo} alt="Logo" className="h-full" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden h-full w-[50%] lg:w-[40%] lg:flex items-center justify-evenly">
        <Button type="submit" variant="primary" className="py-1" onClick={() => navigate("/admin-create_User")}>
          + Add Users
        </Button>

        <Button type="submit" variant="primary" className="py-1" onClick={() => navigate("/admin-create_Experts")}>
          + Add Experts
        </Button>

        {/* Notification */}
        <div
          onClick={() => navigate("/admin-notification")}
          className="relative border border-[#989595] rounded-full flex items-center justify-center cursor-pointer">
          <img src={notification} className="h-10 p-1" alt="" />
          <div className="absolute top-0 right-0 rounded-full px-[5px] bg-orange-400 text-[10px] text-white">
            12
          </div>
        </div>

        {/* Profile */}
        <div
          onClick={() => navigate("/admin-profile")}
          className="border border-[#989595] px-4 py-1 rounded-[12px] flex items-center gap-4 cursor-pointer">
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyCG3jGw_PZPj17ttBPAPxdgPdpLO020L9g&s"
            alt=""
          />

          <div className="flex flex-col">
            <p className="text-[14px]">Ashok Varma</p>
            <p className="text-[14px]">Admin</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setOpenSideMenu(!openSideMenu)}>
          <img src={menu} alt="menu" />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {openSideMenu && (
        <div
          className="fixed top-[70px] inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-start justify-end"
          onClick={() => setOpenSideMenu(false)}
        >
          <div
            className="w-full bg-white shadow-lg p-4 flex flex-col gap-4 "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Notification */}

            <div className=" w-full">
              <Button type="submit" variant="secondary" className="py-1 w-full flex items-center justify-center gap-4">
                <p className="text-sm">Notifications</p>
                <div className="relative">
                  <img src={notification} className="h-8" alt="" />
                  <div className="absolute -top-1 -right-1 rounded-full px-[5px] bg-orange-400 text-[10px] text-white">
                    12
                  </div>
                </div>
              </Button>
            </div>

            <Button type="submit" variant="primary" className="py-1 w-full">
              + Add Users
            </Button>

            <Button type="submit" variant="primary" className="py-1 w-full">
              + Add Experts
            </Button>

            <Button type="submit" variant="secondary" className="py-3 w-full flex items-center justify-center gap-4">
              <p className="text-sm text-red-600">Log Out</p>
              <div className="">
                <img src={LogOut} className="h-5" alt="" />
              </div>
            </Button>

          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;