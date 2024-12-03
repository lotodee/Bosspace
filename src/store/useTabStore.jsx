import { create } from "zustand";

const useTabStore = create((set) => ({
  currentTab: "Directory",
  setCurrentTab: (tab) => set({ currentTab: tab }), 
 
}));

export default useTabStore;
