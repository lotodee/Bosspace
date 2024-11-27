import React from "react";
import MetricsSection from "../components/Metrics";

const LeftSide = () => {
    return (
      <div>
        <div className="bg-gradient-to-r from-custom_blue to-custom_grey text-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-4xl font-extrabold uppercase tracking-wider">
              Become a Boss
            </h1>
            <p className="text-lg text-gray-100">
              Take charge, create your empire, and redefine your future. This is
              your moment to shine!
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-orange-500 font-semibold rounded-full shadow hover:bg-orange-500 hover:text-white transition-all duration-300">
              Start Creating
            </button>
          </div>
            </div>
            {/* <MetricsSection/> */}
      </div>
    );
};

export default LeftSide;
