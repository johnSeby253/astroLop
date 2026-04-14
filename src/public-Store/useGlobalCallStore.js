import { create } from "zustand";


export const useGlobalCallStore = create((set) => ({
    incomingCalls: [],
    addCall: (call) =>
        set((state) => ({
            incomingCalls: [...state.incomingCalls, call],
        })),
    removeCall: (id) =>
        set((state) => ({
            incomingCalls: state.incomingCalls.filter(
                (c) => (c.id || c.channelName) !== id
            ),
        })),
}));