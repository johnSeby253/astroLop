// stores/callStore.js
import { create } from "zustand";

export const useCallStore = create((set) => ({
    activeCall: null,
    isInCall: false,

    startCall: (data) =>
        set({
            activeCall: data,
            isInCall: true
        }),

    endCall: () =>
        set({
            activeCall: null,
            isInCall: false
        }),
}));