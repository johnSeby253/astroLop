import { create } from "zustand";

// Persistent store for role
const useStoreRoles = create((set) => ({
  role: localStorage.getItem("role") || null, // initialize from localStorage
  setRole: (newRole) => {
    localStorage.setItem("role", newRole);   // persist to localStorage
    set({ role: newRole });
  },
  clearRole: () => {
    localStorage.removeItem("role");         // remove from localStorage
    set({ role: null });
  },
}));

export default useStoreRoles;