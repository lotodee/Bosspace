import React, { useState } from "react";

const BusinessCard = ({ name, picture, title, description, contact }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-64 h-40 bg-white shadow-lg rounded-lg p-4 relative">
      {!flipped ? (
        <div>
          <img
            src={picture}
            alt={name}
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <h3 className="text-lg font-bold text-center">{name}</h3>
          <p className="text-sm text-center text-gray-600">{title}</p>
          <button
            onClick={() => setFlipped(true)}
            className="mt-4 bg-blue-500 text-white text-sm px-3 py-1 rounded block mx-auto"
          >
            Flip Card
          </button>
        </div>
      ) : (
        <div>
          <p className="text-sm text-gray-700 mb-2">{description}</p>
          <p className="text-sm font-bold">Contact:</p>
          <p className="text-sm text-gray-600">{contact}</p>
          <button
            onClick={() => setFlipped(false)}
            className="mt-4 bg-blue-500 text-white text-sm px-3 py-1 rounded block mx-auto"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
