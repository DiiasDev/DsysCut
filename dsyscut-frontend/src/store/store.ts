import { create } from "zustand";

interface AppState {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLogged: false,
  setIsLogged: (value) => set({ isLogged: value }),
}));
