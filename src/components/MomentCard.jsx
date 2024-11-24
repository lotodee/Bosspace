import React from "react";

const MomentCard = ({ image, isOpen, name }) => {
  return (
    <div className="w-16 h-16 rounded-full border-4 overflow-hidden">
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover ${
          isOpen ? "border-green-500" : "border-gray-400"
        }`}
      />
    </div>
  );
};

export default MomentCard;
