// // import React from "react";
// // import CountUp from "react-countup";

// // const MetricsSection = () => {
// //   const metrics = [
// //     {
// //       label: "Users",
// //       count: 13,
// //       bgColor: "bg-custom_blue",
// //       textColor: "text-white",
// //     },
// //     {
// //       label: "Cards",
// //       count: 1,
// //       bgColor: "bg-custom_orange",
// //       textColor: "text-white",
// //     },
// //     {
// //       label: "Jobs",
// //       count: 12,
// //       bgColor: "bg-custom_pink",
// //       textColor: "text-white",
// //     },
// //     {
// //       label: "Resumes",
// //       count: 9,
// //       bgColor: "bg-secondary",
// //       textColor: "text-white",
// //     },
// //     {
// //       label: "Professionals",
// //       count: 8,
// //       bgColor: "bg-custom_grey",
// //       textColor: "text-white",
// //     },
// //   ];

// //   return (
// //     <div className="w-full bg-customGray py-16">
// //       <div className="max-w-6xl mx-auto px-6">
// //         {/* Section Title */}
// //         <h2 className="text-4xl font-bold text-custom_blue text-center mb-12">
// //           Our Metrics
// //         </h2>

// //         {/* Metrics Container */}
// //         <div className="flex flex-row gap-6">
// //           {metrics.map((metric, index) => (
// //             <div
// //               key={index}
// //               className={`flex flex-col items-center justify-between rounded-lg w-full flex-wrap p-6 shadow-lg ${metric.bgColor}`}
// //             >
// //               <h3 className={`text-5xl font-extrabold ${metric.textColor}`}>
// //                 <CountUp start={0} end={metric.count} duration={2} />K
// //                 {/* Displayed as 13K */}
// //               </h3>
// //               <span className={`text-lg font-medium mt-2 ${metric.textColor}`}>
// //                 {metric.label}
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MetricsSection;


// import React from "react";
// import CountUp from "react-countup";

// const MetricsSection = () => {
//   const metrics = [
//     {
//       label: "Users",
//       count: 13,
//       bgColor: "bg-custom_blue",
//       textColor: "text-white",
//     },
//     {
//       label: "Cards",
//       count: 1,
//       bgColor: "bg-custom_orange",
//       textColor: "text-white",
//     },
//     {
//       label: "Jobs",
//       count: 12,
//       bgColor: "bg-custom_pink",
//       textColor: "text-white",
//     },
//     {
//       label: "Resumes",
//       count: 9,
//       bgColor: "bg-secondary",
//       textColor: "text-white",
//     },
//     {
//       label: "Professionals",
//       count: 8,
//       bgColor: "bg-custom_grey",
//       textColor: "text-white",
//     },
//   ];

//   return (
//     <div className="w-full bg-customGray py-16">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-custom_blue text-center mb-12">
//           Our Metrics
//         </h2>

//         {/* Metrics Container */}
//         <div className="flex flex-wrap justify-center gap-6">
//           {metrics.map((metric, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center justify-between rounded-lg p-6 shadow-lg ${metric.bgColor}`}
//               style={{
//                 flex: "1 1 calc(33.333% - 1rem)", // 3 items per row by default
//                 maxWidth: "calc(33.333% - 1rem)",
//                 minWidth: "200px", // Ensure it wraps properly
//               }}
//             >
//               <h3 className={`text-5xl font-extrabold ${metric.textColor}`}>
//                 <CountUp start={0} end={metric.count} duration={2} />K
//               </h3>
//               <span className={`text-lg font-medium mt-2 ${metric.textColor}`}>
//                 {metric.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MetricsSection;


import React from "react";
import CountUp from "react-countup";

const MetricsSection = () => {
  const metrics = [
    {
      label: "Users",
      count: 13,
      bgColor: "bg-custom_blue",
      textColor: "text-white",
    },
    {
      label: "Cards",
      count: 1,
      bgColor: "bg-custom_orange",
      textColor: "text-white",
    },
    {
      label: "Jobs",
      count: 12,
      bgColor: "bg-custom_pink",
      textColor: "text-white",
    },
    {
      label: "Resumes",
      count: 9,
      bgColor: "bg-secondary",
      textColor: "text-white",
    },
    {
      label: "Professionals",
      count: 8,
      bgColor: "bg-custom_grey",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full bg-customGray py-8 px-4">
      <div className="max-w-xs mx-auto">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-custom_blue text-center mb-6">
          Metrics
        </h2>

        {/* Metrics Container */}
        <div className="flex flex-col gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-between rounded-lg p-4 shadow-lg ${metric.bgColor}`}
              style={{
                flex: "1 1 auto", // Allow cards to shrink/grow dynamically
              }}
            >
              <div className="flex flex-col items-start">
                <h3 className={`text-3xl font-extrabold ${metric.textColor}`}>
                  <CountUp start={0} end={metric.count} duration={2} />K
                </h3>
                <span
                  className={`text-sm font-medium mt-2 ${metric.textColor}`}
                >
                  {metric.label}
                </span>
              </div>
              <div className="w-2 h-full bg-white rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsSection;
