// import { useState, useEffect } from 'react';
// import { FiSearch, FiFilter } from 'react-icons/fi';
// import quickOptions from '../data/quickOptions';

// const WelcomeSection = () => {
//   const options = ['deals', 'properties', 'talents', 'experts', 'jobs', 'more'];
//   const [currentOption, setCurrentOption] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentOption((prev) => (prev + 1) % options.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="h-[40vh] bg-gradient-to-r from-white-500 via-black-500 to-green-700 flex flex-col items-center justify-center space-y-6 p-4">
//       <h1 className="text-3xl font-bold text-center">
//         Welcome Boss, find the best{" "}
//         <span className="text-blue-600">{options[currentOption]}</span>
//       </h1>
//       <div className="flex items-center w-[60%] bg-white p-4 rounded shadow-lg">
//         <FiSearch className="text-gray-500 mr-2" />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="flex-1 outline-none text-gray-600"
//         />
//         <FiFilter className="text-gray-500 ml-2" />
//       </div> 
//       <div className="flex space-x-4 flex-wrap justify-center">
//         {quickOptions.map((option, index) => (
//           <button
//             key={index}
//             className="text-sm bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;


import { useState, useEffect } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import quickOptions from "../data/quickOptions";

const WelcomeSection = () => {
  const options = ["deals", "properties", "talents", "experts", "jobs"];
  const [currentOption, setCurrentOption] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOption((prev) => (prev + 1) % options.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const moreOptions = [
    { id: 1, text: "Freelancers" },
    { id: 2, text: "Rentals" },
    { id: 3, text: "Software" },
    { id: 4, text: "Hardware" },
  ];

  return (
    <section className="h-[40vh] bg-gray-200 flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-3xl font-bold text-center text-white">
        Welcome Boss, find the best{" "}
        <span className="text-blue-500">{options[currentOption]}</span>
      </h1>
      <div className="flex items-center w-[60%] bg-white p-4 rounded-lg shadow-lg">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none text-gray-600"
        />
        <FiFilter className="text-gray-500 ml-2 cursor-pointer" />
      </div>
      <div className="flex space-x-4 flex-wrap justify-center">
        {quickOptions.map((option) => {
          const Icon = option.icon; // Extract the icon component
          return (
            <button
              onClick={option.id === 7 ?() => setIsDropdownOpen((prev) => !prev) : undefined}
              key={option.id}
              className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              <Icon className="text-lg" /> {/* Render icon as a component */}
              <span>{option.text}</span>
            </button>
          );
        })}
        <div className="relative">
          {/* <button
            className="text-sm bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 items-center"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            More
          </button> */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg p-2 z-10">
              {moreOptions.map((option) => (
                <button
                  key={option.id}
                  className="block text-left text-sm w-full px-4 py-2 hover:bg-gray-100"
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
