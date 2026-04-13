import { create } from "zustand";
import { persist } from "zustand/middleware";

const useExpertFormStore = create(
  persist(
    (set) => ({
      formData: {
        basic: {},
        professional: {},
        priceSettings: {}
      },

      setBasicDetails: (data) =>
        set((state) => ({
          formData: { ...state.formData, basic: data }
        })),

      setProfessionalData: (data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            professional: {
              ...state.formData.professional,
              ...data
            }
          }
        })),

      setPriceSettingData: (data) =>
        set((state) => ({
          formData: { ...state.formData, priceSettings: data }
        })),

      resetForm: () => {
        set({
          formData: { basic: {}, professional: {}, priceSettings: {} }
        });

        localStorage.removeItem("expert-form-storage");
      }
    }),
    {
      name: "expert-form-storage",
      partialize: (state) => ({ formData: state.formData })
    }
  )
);

export default useExpertFormStore;