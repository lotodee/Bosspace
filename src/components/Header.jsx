import React, { useState } from "react";
import { FaBell, FaWallet } from "react-icons/fa"; // Using react-icons for wallet and bell icons
import useAuthStore from "../store/useAuthStore";
import ProfileBar from "./ProfileBar";
import logo from "../assets/icons/logo.png";
import ProfileAvatar from "./ProfileAvatar";
const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const [notificationCount, setNotificationCount] = useState(5); // Example notification count

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header
      className={`p-4 flex justify-between items-center shadow-lg top-0 sticky z-50 text-custom_blue ${
        loggedIn ? "bg-white" : "bg-white"
      }`}
    >
      <div className="flex items-center space-x-4">
        {/* Logo Text */}
        {/* <div className="text-lg font-bold text-[40px] text-custom_blue">
          Bosspace
        </div> */}
        <img src={logo} className="w-15 h-10"/>
      </div>
 <ProfileBar />
      {loggedIn ? (
        <div className="flex items-center space-x-6">
          {/* Wallet Icon */}
          <FaWallet className="text-custom_blue text-2xl cursor-pointer w-8 h-8" />

          {/* Notification Bell with Badge */}
          <div className="relative">
            <FaBell className="text-custom_blue text-2xl cursor-pointer w-8 h-8" />
            {notificationCount > 0 && (
              <span className="absolute bottom-4 left-4 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </div>
          <ProfileAvatar />
          <button
            className="px-4 py-2 bg-custom_blue text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex space-x-4">
          {/* Login Button */}
          <button
            className={`px-4 py-2 bg-white rounded border border-custom_blue text-custom_blue`}
            onClick={handleLogin}
          >
            Login
          </button>

          {/* Sign Up Button */}
          <button className="px-4 py-2 bg-custom_blue text-white rounded">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
