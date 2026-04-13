// import { astrologerRoutes } from "./Astrologer_Routes/astrologerRoutes";
// import { userRoutes } from "./user_Routes/userRoutes";

import { Admin_routes } from "./admin_Routes/adminRoutes";
import { Astrologer_routes } from "./Astrologer_Routes/astro_Routes";
import { User_routes } from "./User_Routes/user_routes";

export const routeGroups = [
  {
    role: "admin",
    routes: Admin_routes,
  },
  {
    role: "astrologer",
    routes: Astrologer_routes,
  },
  {
    role: "user",
    routes: User_routes,
  },
];