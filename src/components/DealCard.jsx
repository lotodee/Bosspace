
import React, { useEffect, useState } from "react";

const DealCard = ({ title, description, price, endTime, tag, imageUrl }) => {
  const [timeLeft, setTimeLeft] = useState(
    Math.max(0, new Date(endTime) - new Date())
  );

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(0, new Date(endTime) - new Date()));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [endTime]);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const color = tag === "Exclusive" ? "bg-purple-700" : "bg-orange-600";

  return (
    <div
      className={`w-72 bg-white shadow-2xl rounded-lg overflow-hidden border-2 border-transparent transition-all duration-300 transform hover:scale-105 hover:${color} flex flex-col`}
    >
      {/* Image */}
      {/* {imageUrl && (
        <div
          className="h-40 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )} */}

      {/* Tag */}
      <div
        className={`px-4 py-2 text-white text-xs font-semibold uppercase tracking-wider ${color}`}
      >
        {tag}
      </div>

      {/* Content */}
      <div className="flex-grow p-4 space-y-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-2xl font-extrabold text-gray-800 text-left">{`₦${price}`}</p>
      </div>

      {/* Footer */}
      {timeLeft > 0 && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
          <span className="text-xs text-gray-500">Hurry, ends in:</span>
          <span className="text-lg font-semibold text-red-500">
            {formatTime(timeLeft)}
          </span>
        </div>
      )}

      {/* Ensure the footer stays at the bottom */}
      <div className="flex-grow" />
    </div>
  );
};

export default DealCard;

