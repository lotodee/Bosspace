import {create} from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: localStorage.getItem("loggedIn") === "true",
  setIsLoggedIn: (status) => {
    set({ isLoggedIn: status });
    if (status) {
      localStorage.setItem("loggedIn", "true"); 
    } else {
      localStorage.removeItem("loggedIn"); 
    }
  },
}));

export default useAuthStore;
