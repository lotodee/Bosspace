// import React from "react";
// import ProfileAvatar from "../components/ProfileAvatar";
// import _ from "lodash";
// import Cards from "../assets/icons/Cards";
// import Deals from "../assets/icons/Deals";
// import Eshop from "../assets/icons/Eshop";
// import Professionals from "../assets/icons/Professionals";
// import Resume from "../assets/icons/Resume";
// import Jobs from "../assets/icons/Jobs";

// const UserLoggedInCard = () => {
//   const metrics = [
//     { icon: <Jobs />, label: "Jobs", value: 20 },
//     { icon: <Deals />, label: "Deals", value: 15 },
//     { icon: <Eshop />, label: "E-shop", value: 5 },
//     { icon: <Professionals />, label: "Professionals", value: 8 },
//     { icon: <Cards />, label: "Cards", value: 12 },
//     { icon: <Resume />, label: "Resumes", value: 30 },
//   ];

//   const links = [
//     {
//       icon: <Resume />,
//       label: "Business Page",
//       link: "https://business-page-link",
//     },
//     { icon: <Cards />, label: "E-shop", link: "https://eshop-link" },
//     {
//       icon: <Professionals />,
//       label: "Link URL",
//       link: "https://link-url-link",
//     },
//     { icon: <Jobs />, label: "Facebook", link: "https://facebook-link" },
//   ];

//   const bio =
//     "This is a sample bio for demonstration purposes. You can customize this bio to display user information, and if it exceeds 100 characters, the remaining part will be truncated with ellipsis.";

//   return (
//     <div className="w-full max-w-md mx-auto mt-6 bg-white shadow-md rounded-lg overflow-hidden">
//       {/* Top Section with Gradient Background */}
//       <div className="relative bg-gradient-to-r from-[#9b113a] to-custom_blue_sec h-32">
//         {/* Profile Avatar */}
//         <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
//           <ProfileAvatar size={80} />
//         </div>
//       </div>

//       {/* Metrics Section */}
//       <div className="mt-12 px-4">
//         <div className="grid grid-cols-3 gap-4">
//           {metrics.map((metric, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center space-y-1"
//             >
//               <div className="text-custom_blue text-lg">{metric.icon}</div>
//               <span className="text-xs font-medium text-gray-600">
//                 {metric.label}
//               </span>
//               <span className="text-sm font-bold text-custom_blue">
//                 {metric.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Short Bio Section */}
//       <div className="mt-3 px-4 text-center">
//         <p className="text-gray-600 text-xs leading-5">
//           {bio.length > 100 ? `${bio.substring(0, 100)}...` : bio}{" "}
//           {bio.length > 100 && (
//             <a
//               href="#"
//               className="text-custom_blue font-medium hover:underline"
//             >
//               Read more
//             </a>
//           )}
//         </p>
//       </div>

//       {/* Links Section */}
//       <div className="mt-4 px-4">
//         <h2 className="text-gray-700 text-sm font-bold mb-2">Links:</h2>
//         <div className="space-y-2">
//           {links.map((link, index) => (
//             <div
//               key={index}
//               className="flex items-center space-x-2 text-gray-700 truncate"
//             >
//               <div className="text-custom_blue text-sm shrink-0">
//                 {link.icon}
//               </div>
//               <span className="text-xs font-medium">{link.label}:</span>
//               <a
//                 href={link.link}
//                 className="text-custom_blue text-xs font-medium hover:underline truncate"
//               >
//                 {_.truncate(link.link, { length: 18 })}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLoggedInCard;


import React from "react";
import ProfileAvatar from "../components/ProfileAvatar";
import _ from "lodash";
import Cards from "../assets/icons/Cards";
import Deals from "../assets/icons/Deals";
import Eshop from "../assets/icons/Eshop";
import Professionals from "../assets/icons/Professionals";
import Resume from "../assets/icons/Resume";
import Jobs from "../assets/icons/Jobs";
import { FaPen } from "react-icons/fa";

const UserLoggedInCard = () => {
  const metrics = [
    { icon: <Jobs />, label: "Jobs", value: 20 },
    { icon: <Deals />, label: "Deals", value: 15 },
    { icon: <Eshop />, label: "E-shop", value: 5 },
    { icon: <Professionals />, label: "Professionals", value: 8 },
    { icon: <Cards />, label: "Cards", value: 12 },
    { icon: <Resume />, label: "Resumes", value: 30 },
  ];

  const links = [
    {
      icon: <Resume />,
      label: "Business Page",
      link: "https://business-page-link",
    },
    { icon: <Cards />, label: "E-shop", link: "https://eshop-link" },
    {
      icon: <Professionals />,
      label: "Link URL",
      link: "https://link-url-link",
    },
    { icon: <Jobs />, label: "Facebook", link: "https://facebook-link" },
  ];

  const bio =
    "This is a sample bio for demonstration purposes. You can customize this bio to display user information, and if it exceeds 100 characters, the remaining part will be truncated with ellipsis.";

  return (
    <div className="w-full max-w-sm mx-auto  bg-white shadow-md rounded-lg overflow-hidden pb-4">
      {/* Top Section with Gradient Background */}
      <div className="relative bg-gradient-to-r from-[#9b113a] to-custom_blue_sec h-[200px]">
        {/* Profile Avatar */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
          <div className="relative bottom-10">
            <ProfileAvatar width="w-20" height="h-20" />
     
          </div>
        </div>
        {/* User Info */}
        <div className="mt-4 text-center px-4 absolute bottom-1 left-[15%]">
          <h2 className="text-lg font-semibold text-white">John Doe</h2>{" "}
          {/* Full Name */}
          <p className="text-sm text-gray-100">john.doe@example.com</p>{" "}
          {/* Email */}
          <p className="text-sm text-gray-100">@johndoe</p> {/* Username */}
        </div>
      </div>

      {/* Metrics Section */}
      <div className="mt-6 px-4">
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-1"
            >
              <div className="text-custom_blue text-lg">{metric.icon}</div>
              <span className="text-xs font-medium text-gray-600">
                {metric.label}
              </span>
              <span className="text-sm font-bold text-custom_blue">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Short Bio Section */}
      <div className="mt-3 px-4 text-center">
        <p className="text-gray-600 text-xs leading-5">
          {bio.length > 100 ? `${bio.substring(0, 100)}...` : bio}{" "}
          {bio.length > 100 && (
            <a
              href="#"
              className="text-custom_blue font-medium hover:underline"
            >
              Read more
            </a>
          )}
        </p>
      </div>

      {/* Links Section */}
      <div className="mt-4 px-4">
        <h2 className="text-gray-700 text-sm font-bold mb-2">Links:</h2>
        <div className="space-y-2">
          {links.map((link, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700 truncate"
            >
              <div className="text-custom_blue w-6 h-6 text-sm shrink-0">
                {link.icon}
              </div>
              <span className="text-xs font-medium">{link.label}:</span>
              <a
                href={link.link}
                className="text-custom_blue text-xs font-medium hover:underline truncate"
              >
                {_.truncate(link.link, { length: 18 })}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserLoggedInCard;
