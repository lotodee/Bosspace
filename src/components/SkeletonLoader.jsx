import React from "react";

const SkeletonLoader = ({ width, height, className }) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default SkeletonLoader;
