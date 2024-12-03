/* eslint-disable react/prop-types */
import React from "react";

const IconWithText = ({ icon, text, isActive, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center cursor-pointer  ${
        isActive
          ? "text-custom_blue border-b-4 border-custom_blue pb-2"
          : "text-gray-500"
      }`}
    >
      <div
        className={`text-3xl ${
          isActive ? "text-custom_blue" : "text-gray-500"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-xs mt-1 ${
          isActive ? "text-custom_blue font-bold" : "text-gray-500"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default IconWithText;
