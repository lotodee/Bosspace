
import React, { useState } from "react";
import ImageWrapper from "./ImageWrapper";
import eye from "../assets/icons/eye.svg";

const BusinessCard = ({ name, picture, title, description, contact }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-80 h-56">
      {" "}
      {}
      {}
      <div
        className=" w-full h-full "
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0)",
        }}
      >
        {}
        {!flipped ? (
          <div className="absolute   mx-2 inset-0 flex flex-col border shadow-lg items-center justify-center text-center backface-hidden p-4">
            <img
              src={picture}
              alt={name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{title}</p>
            <button
              onClick={() => setFlipped(true)}
              className="mt-4 bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition-all"
            >
              Flip Card
            </button>
          </div>
        ) : (
          
          <div
            className="absolute inset-0 flex mx-2 flex-col items-center justify-center bg-gray-800 text-white backface-hidden p-4"
            style={{
              transform: "rotateY(180deg)", 
            }}
          >
            <p className="text-lg text-gray-200 mb-4">{description}</p>

            <div className="text-center mb-4">
              <p className="text-sm font-semibold">Contact:</p>
              <p className="text-sm">{contact}</p>
            </div>

            <button
              onClick={() => setFlipped(false)}
              className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-gradient-to-l from-custom_blue to-custom_grey rounded-full shadow-md hover:bg-blue-700 transition-all"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;
