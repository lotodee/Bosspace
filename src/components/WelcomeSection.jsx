

// import { useState, useEffect } from "react";
// import { FiSearch, FiFilter } from "react-icons/fi";
// import quickOptions from "../data/quickOptions";

// const WelcomeSection = () => {
//   const options = ["deals", "properties", "talents", "experts", "jobs"];
//   const [currentOption, setCurrentOption] = useState(0);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentOption((prev) => (prev + 1) % options.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const moreOptions = [
//     { id: 1, text: "Freelancers" },
//     { id: 2, text: "Rentals" },
//     { id: 3, text: "Software" },
//     { id: 4, text: "Hardware" },
//   ];

//   return (
//     <section className="h-[40vh] flex flex-col items-center justify-center space-y-6 p-4 bg-[url('https://img.freepik.com/premium-photo/abstract-background-design-images-wallpaper-ai-generated_643360-134593.jpg')] bg-cover bg-center">
//       <h1 className="text-2xl md:text-3xl font-bold text-center text-white">
//         Welcome Boss, find the best{" "}
//         <span className="text-blue-500">{options[currentOption]}</span>
//       </h1>
//       <div className="flex items-center w-full md:w-[60%] bg-white p-3 rounded-full shadow-lg border-2 border-gray-300 transition-all hover:border-blue-500 focus-within:border-blue-500">
//         <FiSearch className="text-gray-500 mr-2" />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="flex-1 outline-none text-gray-600 placeholder-gray-400 bg-transparent"
//         />
//         <FiFilter className="text-gray-500 ml-2 cursor-pointer hover:text-blue-500 transition-all" />
//       </div>
//       <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-custom_pink">
//         {quickOptions.map((option) => {
//           const Icon = option.icon;
//           return (
//             <button
//               onClick={
//                 option.id === 7
//                   ? () => setIsDropdownOpen((prev) => !prev)
//                   : undefined
//               }
//               key={option.id}
//               className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//             >
//               <Icon className="text-lg" />
//               <span className="text-gray-800">{option.text}</span>
//             </button>
//           );
//         })}
//         <div className="relative">
//           {isDropdownOpen && (
//             <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-2 z-10">
//               {moreOptions.map((option) => (
//                 <button
//                   key={option.id}
//                   className="block text-left text-sm w-full px-4 py-2 hover:bg-gray-100"
//                 >
//                   {option.text}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
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
const [enter ,setEnter] = useState(false)
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
    { id: 4, text: "Talents" },

  ];

  return (
    <section className="h-[40vh] flex flex-col items-center justify-center space-y-6 p-4 bg-[url('https://th.bing.com/th/id/R.a5959263ff129b7bf1c7b578106ef56d?rik=tmn2bH7HecMXKQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fPicture-Plain-HD.jpg&ehk=xQvEklueZmmJuRuwL6YghOZRB6twsklP1vfIAqpRTAs%3d&risl=&pid=ImgRaw&r=0')] bg-cover bg-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-white">
        Welcome Boss, find the best{" "}
        <span className="text-[#09153D]">{options[currentOption]}</span>
      </h1>
      <div className="flex items-center w-full md:w-[60%] bg-white shadow-lg border-2 border-gray-300 transition-all rounded-full">
        {/* Search Input with Icon */}
        <div className="flex items-center border-r border-gray-300 flex-[6] p-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-gray-600 placeholder-gray-400 bg-transparent"
          />
        </div>

        {/* Location Input with Icon */}
        <div className="flex items-center border-r border-gray-300 flex-[3] p-2 ">
          <FiFilter className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Enter location..."
            className="flex-1 outline-none text-gray-600 placeholder-gray-400 bg-transparent"
          />
        </div>

        {/* Search Button */}
        <button className="flex-[1] bg-custom_blue text-white  p-2 hover:bg-custom_blue_sec transition-all rounded-tr-full rounded-br-full">
          Search
        </button>
      </div>

      {/* <div className={`flex items-center w-full md:w-[60%] bg-white p-3 rounded-full  transition-all ${enter ? 'border border-custom_blue' : ""}  `} onMouseEnter={()=>setEnter(true)} onMouseLeave={()=>setEnter(false)}>
        <FiSearch className="text-[#09153D] mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none text-[#09153D] placeholder-[#09153D] bg-transparent"
        />
        <FiFilter className="text-[#09153D] ml-2 cursor-pointer hover:text-blue-500 transition-all" />
      </div> */}
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-[#09153D]">
        {quickOptions.map((option) => {
          const Icon = option.icon;
          return (
            <button
              onClick={
                option.id === 7
                  ? () => setIsDropdownOpen((prev) => !prev)
                  : undefined
              }
              key={option.id}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#09153D] transition-all"
            >
              <Icon className="text-lg" />
              <span className="text-[#09153D]">{option.text}</span>
            </button>
          );
        })}
        <div className="relative">
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-2 z-10">
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
