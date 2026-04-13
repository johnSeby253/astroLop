

import active_astro from '@/assets/admin-assets/active_astro.svg'
import astro from '@/assets/admin-assets/astroIcon.svg'
import active_serviceRequest from '@/assets/admin-assets/active_Service_request.svg'
import service_Request from '@/assets/admin-assets/service_Request.svg'
import active_Revenue from '@/assets/admin-assets/active_revenue.svg'
import revenue_Icon from '@/assets/admin-assets/revenue.svg'
import {
    BanknoteArrowUp,
    HeartHandshake,
    LayoutDashboard,
    MessageSquareQuote,
    Settings, UserCog,
    UserRoundCheck,
    Users as UsersIcon,
    Wallet as WalletIcon
} from "lucide-react";
import AstrologerDashboard from '@/roles/astrologer/Pages/Dashboard'
import AstrologerLogin from '@/roles/astrologer/Pages/Onboarding/Authentication'
import AstrologerOnBoarding from '@/roles/astrologer/Pages/Onboarding/OnboardingSetUp'

import WaitingForApproval from '@/roles/astrologer/Pages/Onboarding/OnboardingSetUp/WaitingForApproval'
import PaymentStatus from '@/roles/astrologer/Pages/Onboarding/OnboardingSetUp/PaymentStatus'
import AstroPendingRequest from '@/roles/astrologer/Pages/Pending_Request'
import AstroConsultation from '@/roles/astrologer/Pages/Consultation'
import AstroEarningsPayout from '@/roles/astrologer/Pages/EarningsAndPayOut'
import AstroSettings from '@/roles/astrologer/Pages/Settings'
import astroNotification from '@/roles/astrologer/Pages/Notifications'
import AstroProfile from '@/roles/astrologer/Pages/Profile'
import CallById from '@/roles/astrologer/Pages/Pending_Request/CallById'



export const Astrologer_routes = [

    {
        key: 0,
        path: '/astrologer-login',
        label: '',
        privetRoute: false,
        isSubRoute: false,
        pageTitle: '',
        component: AstrologerLogin,
        menubar: false,
        permission: true
    },
    {
        key: 0,
        path: '/astrologer',
        label: '',
        privetRoute: false,
        isSubRoute: false,
        pageTitle: '',
        component: AstrologerOnBoarding,
        menubar: false,
        permission: true
    },
    // {
    //     key: 0,
    //     path: '/astrologer/professional',
    //     label: '',
    //     privetRoute: false,
    //     isSubRoute: false,
    //     pageTitle: '',
    //     component: AddProfessionalDetails,
    //     menubar: false,
    //     permission: true
    // },
    // {
    //     key: 0,
    //     path: '/astrologer-SetFreeTime',
    //     label: '',
    //     privetRoute: false,
    //     isSubRoute: false,
    //     pageTitle: '',
    //     component: SetFreeTime,
    //     menubar: false,
    //     permission: true
    // },
    // {
    //     key: 0,
    //     path: '/astrologer-PaymentActivation',
    //     label: '',
    //     privetRoute: false,
    //     isSubRoute: false,
    //     pageTitle: '',
    //     component: PaymentActivation,
    //     menubar: false,
    //     permission: true
    // },
    {
        key: 0,
        path: '/astrologer-paymentStatus',
        label: '',
        privetRoute: false,
        isSubRoute: false,
        pageTitle: '',
        component: PaymentStatus,
        menubar: false,
        permission: true
    },
    {
        key: 0,
        path: '/astrologer-WaitingForApproval',
        label: '',
        privetRoute: false,
        isSubRoute: false,
        pageTitle: '',
        component: WaitingForApproval,
        menubar: false,
        permission: true
    },
    {
        key: 1,
        path: '/astrologer-dashboard',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Dashboard',
        component: AstrologerDashboard,
        icon: LayoutDashboard,
        menubar: true,
        permission: true
    },
    {
        key: 1,
        path: '/astrologer-pendingRequest',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Pending Request',
        component: AstroPendingRequest,
        icon: LayoutDashboard,
        menubar: true,
        permission: true
    },
    {
        key: 1,
        path: '/astrologer-consultation',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Consultation',
        component: AstroConsultation,
        icon: LayoutDashboard,
        menubar: true,
        permission: true
    },
    {
        key: 1,
        path: '/astrologer-earnings-payout',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Earnings & PayOuts',
        component: AstroEarningsPayout,
        icon: LayoutDashboard,
        menubar: true,
        permission: true
    },
    {
        key: 1,
        path: '/astrologer-settings',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Settings',
        component: AstroSettings,
        icon: LayoutDashboard,
        menubar: true,
        permission: true
    },
    {
        key: 1,
        path: '/astrologer-notifications',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Settings',
        component: astroNotification,
        icon: LayoutDashboard,
        menubar: false,
        permission: true
    },
    {
        key: 1,
        path: '/astrologer-profile',
        label: '',
        privetRoute: true,
        isSubRoute: false,
        pageTitle: 'Settings',
        component: AstroProfile,
        icon: LayoutDashboard,
        menubar: false,
        permission: true
    },
     {
        key: 1,
        path: '/call/:id',
        label: '',
        privetRoute: true,
        call:true,
        isSubRoute: false,
        pageTitle: 'Settings',
        component: CallById,
        icon: LayoutDashboard,
        menubar: false,
        permission: true
    },



]