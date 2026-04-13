// stores/useCreateUserStore.js
import { create } from "zustand";

export const useCreateUserStore = create((set) => ({
    selectedRole: null,
    setSelectedRole: (role) => set({ selectedRole: role }),

    personalInfo: {
        first_name: "",
        second_name: "",
        email: "",
        dob: "",
        phone_number: "",
        gender: "",
        admin_profile_pic: null
    },

    // ✅ FIXED (merge instead of replace)
    setPersonalInfo: (field, value) =>
        set((state) => ({
            personalInfo: {
                ...state.personalInfo,
                [field]: value,
            },
        })),

    resetUserForm: () =>
        set({
            selectedRole: null,
            personalInfo: {
                first_name: "",
                second_name: "",
                email: "",
                dob: "",
                phone_number: "",
                gender: "",
                admin_profile_pic: null
            },
        }),
}));