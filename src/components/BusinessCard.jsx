
import React, { useState } from "react";
import ImageWrapper from "./ImageWrapper";
import eye from "../assets/icons/eye.svg";

const BusinessCard = ({ name, picture, title, description, contact }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-80 h-56 translate-x-1">
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
          <div className="absolute border   mx-[10px] inset-0 flex flex-col border-customGray shadow-lg items-center justify-center text-center backface-hidden p-4 bg-gradient-to-l from-custom_blue to-custom_grey">
            <img
              src={picture}
              alt={name}
              className="w-16 h-16  border bg-custom_orange rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="text-sm text-gray-100">{title}</p>
            <button
              onClick={() => setFlipped(true)}
              className="mt-4 bg-custom_blue text-white text-sm px-3 py-1 rounded hover:bg-custom_blue_sec transition-all "
            >
              Flip Card
            </button>
          </div>
        ) : (
          <div
            className="absolute inset-0 flex mx-2 flex-col items-center justify-center bg-custom_blue text-white backface-hidden p-4"
            style={{
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-[15px] text-gray-200 mb-4">{description}</p>

            <div className="text-center mb-4">
              <p className="text-sm font-semibold">Contact:</p>
              <p className="text-sm">{contact}</p>
            </div>

            <button
              onClick={() => setFlipped(false)}
              className="px-3 py-1 mt-4 text-sm font-semibold text-white bg-gradient-to-l from-custom_blue to-custom_grey rounded-md shadow-md hover:bg-custom_blue transition-all"
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


// import React, { useState } from "react";
// import { FaLinkedin } from "react-icons/fa";

// const BusinessCard = ({
//   name,
//   picture,
//   title,
//   description,
//   contact,
//   logo,
//   linkedInUrl,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative group w-80 h-56 mx-4"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Card */}
//       <div
//         className={`w-full h-full border rounded-md shadow-lg bg-gradient-to-l from-custom_blue to-custom_grey flex flex-col items-center justify-center p-4 transition-transform duration-1000 ${
//           isHovered ? "animate-spin-slow" : ""
//         }`}
//       >
//         <img
//           src={picture}
//           alt={name}
//           className="w-16 h-16 bg-custom_orange rounded-full mb-2"
//         />
//         <h3 className="text-lg font-semibold text-white">{name}</h3>
//         <p className="text-sm text-gray-100">{title}</p>
//       </div>

//       {/* Popup */}
//       {isHovered && (
//         <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 w-72 p-4 bg-white rounded-md shadow-lg z-10 animate-fade-in">
//           <div className="flex items-center mb-2">
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-10 h-10 mr-3 rounded-full"
//             />
//             <h4 className="text-lg font-bold text-gray-800">{name}</h4>
//           </div>
//           <p className="text-sm text-gray-600">{description}</p>
//           <a
//             href={linkedInUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center mt-3 text-blue-500 hover:underline"
//           >
//             <FaLinkedin className="w-5 h-5 mr-2" />
//             View on LinkedIn
//           </a>
//           <div className="mt-3">
//             <p className="text-sm font-semibold text-gray-800">Contact:</p>
//             <p className="text-sm text-gray-600">{contact}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusinessCard;
