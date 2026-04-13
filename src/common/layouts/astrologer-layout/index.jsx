import React, { useState, useEffect } from "react";
import { matchPath, Outlet, useLocation } from "react-router-dom";
import rightArrow from "@/assets/admin-assets/chevron-right.svg";
import AstrologerHeader from "./AstrologerHeader";
import AstrologerSidebar from "./AstrologerSidebar";

const AstrologerLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const isCallRoute = matchPath(
        { path: "/call/:id" },
        location.pathname
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleScreenChange = (e) => {
            if (e.matches) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        handleScreenChange(mediaQuery);
        mediaQuery.addEventListener("change", handleScreenChange);

        return () => {
            mediaQuery.removeEventListener("change", handleScreenChange);
        };
    }, []);

    return (
        <div className="h-screen flex flex-col">

            {/* Header */}
            {!isCallRoute && <AstrologerHeader setSidebarOpen={setSidebarOpen} />}

            <div className="flex flex-1 overflow-hidden relative">

                {/* Sidebar */}
                {!isCallRoute && sidebarOpen && (
                    <div
                        className="w-[280px] pt-3 pr-2 fixed lg:static top-[70px] left-0 h-[calc(100vh-70px)] z-50"
                    >
                        <AstrologerSidebar
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />
                    </div>
                )}

                {/* Open Button */}
                {!isCallRoute && !sidebarOpen && (
                    <button
                        className="absolute top-3 left-3 p-2 bg-white shadow rounded-md lg:hidden duration-200 z-40"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <img src={rightArrow} alt="" />
                    </button>
                )}

                {/* Main Content */}
                <main className={`flex-1 overflow-auto ${isCallRoute ? "p-0" : (!sidebarOpen ? "pt-12 px-2" : "pt-3 px-2")
                    }`}>
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default AstrologerLayout;