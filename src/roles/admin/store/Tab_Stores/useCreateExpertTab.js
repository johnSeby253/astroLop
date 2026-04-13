import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCreateExpertStore = create(
    persist(
        (set) => ({
            activeTab: 'basic_information', // default tab
            setActiveTab: (tab) => set({ activeTab: tab }),
        }),
        {
            name: 'create-expert-storage', // key in localStorage
            getStorage: () => localStorage, // optional, defaults to localStorage
        }
    )
);

export default useCreateExpertStore;