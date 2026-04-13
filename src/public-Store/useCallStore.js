// socketStore.js
import { create } from "zustand";

export const useCallStore = create((set) => ({
  incomingCalls: [],
  
  addCall: (call) =>
    set((state) => ({
      incomingCalls: [...state.incomingCalls, call],
    })),
}));