import React from "react";
import MetricsSection from "../components/Metrics";

const LeftSide = () => {
    return (
      <div className="h-40vh">
        <div className="bg-gradient-to-r from-[#9b113a] to-custom_blue_sec text-white p-8 rounded-sm shadow-md">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-4xl font-extrabold uppercase tracking-wider">
              Become a Boss
            </h1>
            <p className="text-lg text-gray-100">
              Take charge, create your empire, and redefine your future. This is
              your moment to shine!
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-custom_blue font-semibold rounded-md shadow hover:bg-custom_blue hover:text-white transition-all duration-300">
              Start Creating
            </button>
          </div>
        </div>
        {/* <MetricsSection/> */}
      </div>
    );
};

export default LeftSide;
