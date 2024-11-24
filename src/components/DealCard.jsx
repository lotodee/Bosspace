import React from "react";

const DealCard = ({ title, description, price, endTime, tag }) => {
  const timeLeft = Math.max(0, new Date(endTime) - new Date());

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4">
      <span
        className={`text-xs px-2 py-1 rounded ${
          tag === "Exclusive" ? "bg-yellow-400" : "bg-green-400"
        } text-white`}
      >
        {tag}
      </span>
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-sm font-bold text-blue-600">₦{price}</p>
      {timeLeft > 0 && (
        <p className="text-xs text-red-500 mt-2">
          Ends in {formatTime(timeLeft)}
        </p>
      )}
    </div>
  );
};

export default DealCard;
