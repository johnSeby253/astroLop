import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAdminStore = create(
    persist(
        (set) => ({
            admin: null, // admin object
            setAdmin: (admin) => set({ admin }), // save admin
            clearAdmin: () => set({ admin: null }), // clear admin
        }),
        {
            name: "admin-storage", // key in localStorage
            getStorage: () => localStorage, // optional, defaults to localStorage
        }
    )
);