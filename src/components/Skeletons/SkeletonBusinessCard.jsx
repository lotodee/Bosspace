import React from "react";

const SkeletonBusinessCard = ({ data }) => {
  
  
  return (
    <>
      {data.map((item, index) => (
        <div
          className="border w-[700px] p-4 h-56 bg-gray-100 animate-pulse rounded-lg shadow-lg overflow-hidden flex flex-row mx-2 inset-0  items-center justify-center text-center "
          key={index}
        >
          {}
          <div className="flex flex-col w-[900px]  items-center justify-center h-full p-4">
            {}
            <div className="w-16 h-16 rounded-full bg-gray-300 mb-4"></div>

            {}
            <div className="w-32 h-4 bg-gray-300 rounded mb-2"></div>

            {}
            <div className="w-24 h-4 bg-gray-300 rounded mb-4"></div>

            {}
            <div className="w-20 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonBusinessCard;
