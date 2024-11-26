import React from "react";

const DealCardSkeleton = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => (
        <div
          key={index} 
          className="w-72 bg-gray-100 shadow-2xl rounded-lg overflow-hidden border border-gray-300 animate-pulse flex flex-col"
        >

          <div className="h-40 w-full bg-gray-300"></div>


          <div className="px-4 py-2 bg-gray-300 text-gray-300"></div>


          <div className="flex-grow p-4 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div> {}
            <div className="h-4 bg-gray-300 rounded w-full"></div>{" "}
            {}
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>{" "}
            {}
            <div className="h-8 bg-gray-300 rounded w-1/3"></div> {}
          </div>

          {}
          <div className="px-6 py-4 bg-gray-200 border-t border-gray-300 flex justify-between items-center">
            <div className="h-4 bg-gray-300 rounded w-24"></div>{" "}
            {}
            <div className="h-6 bg-gray-300 rounded w-16"></div> {}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealCardSkeleton;
