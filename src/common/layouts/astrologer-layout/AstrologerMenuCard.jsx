import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const AstrologerMenuCard = ({ item }) => {
    const location = useLocation();

    const isActive =
        item.activePaths?.some((path) => {
            if (path.includes(":")) {
                const basePath = path.split("/:")[0];
                return location.pathname.startsWith(basePath);
            }
            return location.pathname === path;
        }) || location.pathname === item.path;


    const Icon = item.icon;


    return (
        <NavLink
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all 
        ${isActive ? "bg-[#F4EEFD] text-primary" : "text-[#7B7B7B]"}`}
        >
            {typeof Icon === "string" ? (
                <img
                    src={isActive ? item.iconActive : item.icon}
                    alt={item.pageTitle}
                    className="w-5 h-5"
                />
            ) : (
                <Icon
                    size={20}
                    className={isActive ? "text-primary" : "text-[#7B7B7B]"}
                />
            )}
            <span className="text-[16px] font-semibold font-urbanist leading-normal">
                {item.pageTitle}
            </span>
        </NavLink>
    );
};

export default AstrologerMenuCard;