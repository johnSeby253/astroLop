import OTP_Verification from "@/roles/admin/Pages/authentication/OTP_Verification";
import Forgot_Password from "@/roles/admin/Pages/authentication/Forgot_Password";
import Login from "@/roles/admin/Pages/authentication/Login";
import Create_Password from "@/roles/admin/Pages/authentication/Create_Password";
import Dashboard from "@/roles/admin/Pages/dashboard";
import Wallet from "@/roles/admin/Pages/wallet";
import Users from "@/roles/admin/Pages/users";
import NotificationPage from "@/roles/admin/Pages/notifications/NotificationPage";
import Profile from "@/roles/admin/Pages/admin_Profile/Profile";
import CreateUser from "@/roles/admin/Pages/create_User/createUser";
import CreateExperts from "@/roles/admin/Pages/create_Experts/CreateEperts";
import ConfirmExpert from "@/roles/admin/Pages/create_Experts/ConfirmExpert";
import UserById from "@/roles/admin/Pages/users/UserById";
import UserByRefunds from "@/roles/admin/Pages/users/components/Refunds/UserByRefunds";
import AdminAstrologer from "@/roles/admin/Pages/Astrologer";
import AstrologerById from "@/roles/admin/Pages/Astrologer/AstrologerById";
import AstrologerRequest from "@/roles/admin/Pages/Astrologer/AstrologerRequest";
import RoleAndPermission from "@/roles/admin/Pages/roleAndpermissions";
import AdminSettings from "@/roles/admin/Pages/settings";
import AdminPayOut from "@/roles/admin/Pages/payout";
import PayOutById from "@/roles/admin/Pages/payout/payOutById";
import AdminRevenue from "@/roles/admin/Pages/revenue";
import AdminWallet from "@/roles/admin/Pages/wallet";
import CreateWalletPack from "@/roles/admin/Pages/wallet/CreateWalletPack";
import AdminConsultation from "@/roles/admin/Pages/Consultation";
import AdminServiceExpert from "@/roles/admin/Pages/serviceExpert";
import AdminServiceRequest from "@/roles/admin/Pages/serviceRequest";
import Blogs from "@/roles/admin/Pages/blog";
import CreatenewBlog from "@/roles/admin/Pages/blog/CreatenewBlog";


import active_dashboard from '@/assets/admin-assets/radix-icons_dashboard.svg'
import dashboard from '@/assets/admin-assets/dashboard_Inactive.svg'
import active_astro from '@/assets/admin-assets/active_astro.svg'
import astro from '@/assets/admin-assets/astroIcon.svg'
import active_serviceRequest from '@/assets/admin-assets/active_Service_request.svg'
import service_Request from '@/assets/admin-assets/service_Request.svg'
import active_Revenue from '@/assets/admin-assets/active_revenue.svg'
import revenue_Icon from '@/assets/admin-assets/revenue.svg'
import {
    BanknoteArrowUp,
    HeartHandshake,
    MessageSquareQuote,
    Settings, UserCog,
    UserRoundCheck,
    Users as UsersIcon,
    Wallet as WalletIcon
} from "lucide-react";



export const Admin_routes = [
    {
        key: 0,
        path: '/admin-login',
        label: '',
        privetRoute: false,
        isSubRoute: false,
        pageTitle: '',
        component: Login,
        menubar: false,
        permission: true
    },
    {
        key: 1,
        path: '/admin-forgot_password',
        label: '',
        privetRoute: false,
        isSubRoute: false,
        pageTitle: '',
        component: Forgot_Password,
        menubar: false,
        permission: true
    },
    {
        key: 2,
        path: '/admin-otp_verify',
        label: '',
        privetRoute: false,
        isSubRoute: false,
        pageTitle: '',
        component: OTP_Verification,
        menubar: false,
        permission: true
    },
    {
        key: 3,
        path: '/admin-create_password',
        label: '',
        privetRoute: false,
        isSubRoute: false,
        pageTitle: '',
        component: Create_Password,
        menubar: false,
        permission: true
    },
    {
        key: 4,
        path: '/admin-dashboard',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Dashboard',
        component: Dashboard,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: true,
        permission: true
    },
    {
        key: 5,
        path: '/admin-wallet',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Wallet Pack',
        component: AdminWallet,
        icon: WalletIcon,
        menubar: true,
        permission: true,
        activePaths: ["/admin-create_newWallet"]
    },
    {
        key: 6,
        path: '/admin-create_newWallet',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Wallet Pack',
        component: CreateWalletPack,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true,

    },
    {
        key: 7,
        path: '/admin-users',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Users',
        component: Users,
        icon: UsersIcon,
        iconActive: active_dashboard,
        menubar: true,
        permission: true,
        activePaths: ["/admin-userRefunds", "/admin-userById/:id"]

    },
    {
        key: 8,
        path: '/admin-notification',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Notification',
        component: NotificationPage,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 9,
        path: '/admin-profile',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Admin Profile',
        component: Profile,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 10,
        path: '/admin-create_User',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Admin Add new User',
        component: CreateUser,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 11,
        path: '/admin-create_Experts',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Admin Add new Experts',
        component: CreateExperts,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 12,
        path: '/admin-confirmExperts',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Admin Confirm Expert',
        component: ConfirmExpert,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 13,
        path: "/admin-userById/:id",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Admin-UserBy Id",
        component: UserById,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 14,
        path: "/admin-userRefunds",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Admin-UserRefunds",
        component: UserByRefunds,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 15,
        path: "/admin-Astrologer",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Astrologer",
        component: AdminAstrologer,
        icon: astro,
        iconActive: active_astro,
        menubar: true,
        permission: true,
        activePaths: ["/admin-Astrologer", "/admin-astrologer_requests", "/admin-astrologer/:id"]
    },
    {
        key: 16,
        path: "/admin-astrologer/:id",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Admin Astrologery Id",
        component: AstrologerById,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 17,
        path: "/admin-astrologer_requests",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Admin-Astrologer Requests",
        component: AstrologerRequest,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true
    },
    {
        key: 18,
        path: '/admin-consultation',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Consultation',
        component: AdminConsultation,
        icon: HeartHandshake,
        menubar: true,
        permission: true,
        // activePaths: ["/admin-create_newWallet"]
    },
    {
        key: 19,
        path: '/admin-serviceExpert',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Service Expert',
        component: AdminServiceExpert,
        icon: UserRoundCheck,
        menubar: true,
        permission: true,
        // activePaths: ["/admin-create_newWallet"]
    },
    {
        key: 20,
        path: '/admin-serviceRequest',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Service Request',
        component: AdminServiceRequest,
        icon: service_Request,
        iconActive: active_serviceRequest,
        menubar: true,
        permission: true,
        // activePaths: ["/admin-create_newWallet"]
    },
    {
        key: 21,
        path: "/admin-revenue",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Revenue",
        component: AdminRevenue,
        icon: revenue_Icon,
        iconActive: active_Revenue,
        menubar: true,
        permission: true,
        activePaths: [""]
    },
    {
        key: 22,
        path: "/admin-payout",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "PayOut",
        component: AdminPayOut,
        icon: BanknoteArrowUp,
        menubar: true,
        permission: true,
        activePaths: ["/admin-payoutBy_astrologer_id/:id"]
    },
    {
        key: 23,
        path: "/admin-payoutBy_astrologer_id/:id",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "PayOut",
        component: PayOutById,
        icon: dashboard,
        iconActive: active_dashboard,
        menubar: false,
        permission: true,
        activePaths: [""]
    },
    {
        key: 24,
        path: "/admin-blogs",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Blogs",
        component: Blogs,
        icon: MessageSquareQuote,
        menubar: true,
        permission: true,
        activePaths: ["/admin-create_blog"]
    },
    {
        key: 25,
        path: "/admin-create_blog",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Blogs",
        component: CreatenewBlog,
        menubar: false,
        permission: true,
        activePaths: [""]
    },
    {
        key: 26,
        path: "/admin-settings",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Settings",
        component: AdminSettings,
        icon: Settings,
        menubar: true,
        permission: true,
        activePaths: [""]
    },
    {
        key: 27,
        path: "/admin-role_&_permission",
        label: "",
        privetRoute: true,
        isSubRoute: false,
        pageTitle: "Role & Permission",
        component: RoleAndPermission,
        icon: UserCog,
        menubar: true,
        permission: true,
        activePaths: [""]
    },

]