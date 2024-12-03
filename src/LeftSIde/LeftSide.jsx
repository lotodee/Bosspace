import React from "react";
import UserLoggedInCard from "./UserLoggedInCard";
import useAuthStore from "../store/useAuthStore";
import Footer from "../components/Footer";

const LeftSide = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <div className="flex flex-col h-full">
      {!isLoggedIn ? (
        <div className="flex-1">
          <div className="bg-gradient-to-r from-[#9b113a] to-custom_blue_sec text-white p-8 rounded-sm shadow-md rounded-t-lg">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <h1 className="text-4xl font-extrabold uppercase tracking-wider">
                Become a Boss
              </h1>
              <p className="text-lg text-gray-100">
                Take charge, create your empire, and redefine your future. This
                is your moment to shine!
              </p>
              <button className="mt-4 px-6 py-3 bg-white text-custom_blue font-semibold rounded-md shadow hover:bg-custom_blue hover:text-white transition-all duration-300">
                Start Creating
              </button>
            </div>
          </div>
        </div>
      ) : (
        <UserLoggedInCard />
      )}

      {/* Footer Section */}
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
};

export default LeftSide;
