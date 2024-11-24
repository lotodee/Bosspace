
// // /* eslint-disable react/prop-types */
// // import React, { useState, useEffect } from "react";

// // // MomentCard Component
// // const MomentCard = ({ image, isNew, onClick, name }) => (
// //   <div
// //     className="relative w-16 h-16 rounded-full border-4 overflow-hidden cursor-pointer transition-all duration-300"
// //     onClick={onClick}
// //   >
// //     <img src={image} alt={name} className="w-full h-full object-cover" />
// //     {/* Green border for new moments */}
// //     <div
// //       className={`absolute inset-0 rounded-full pointer-events-none ${
// //         isNew ? "border-4 border-green-500" : "border-4 border-gray-400"
// //       }`}
// //     />
// //   </div>
// // );

// // // StorySlider Component
// // const StorySlider = ({ featuredMoments }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0); // Tracks image index
// //   const [isPaused, setIsPaused] = useState(false);

// //   // Handle the next image or moment
// //   const handleNext = () => {
// //     if (currentImageIndex < featuredMoments[currentIndex].images.length - 1) {
// //       setCurrentImageIndex((prev) => prev + 1);
// //     } else if (currentIndex < featuredMoments.length - 1) {
// //       setCurrentIndex((prev) => prev + 1);
// //       setCurrentImageIndex(0);
// //     } else {
// //       setCurrentIndex(0); // Loop back to the first moment
// //       setCurrentImageIndex(0);
// //     }
// //   };

// //   // Handle the previous image or moment
// //   const handlePrevious = () => {
// //     if (currentImageIndex > 0) {
// //       setCurrentImageIndex((prev) => prev - 1);
// //     } else if (currentIndex > 0) {
// //       setCurrentIndex((prev) => prev - 1);
// //       setCurrentImageIndex(featuredMoments[currentIndex - 1].images.length - 1);
// //     } else {
// //       setCurrentIndex(featuredMoments.length - 1);
// //       setCurrentImageIndex(
// //         featuredMoments[featuredMoments.length - 1].images.length - 1
// //       );
// //     }
// //   };

// //   const handleOpenModal = (idx) => {
// //     setCurrentIndex(idx);
// //     setCurrentImageIndex(0);
// //     setIsModalOpen(true);
// //     setIsPaused(false);
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //     setIsPaused(true);
// //   };

// //   useEffect(() => {
// //     let timer;
// //     if (isModalOpen && !isPaused) {
// //       timer = setTimeout(() => {
// //         handleNext();
// //       }, 5000); // 5-second timer
// //     }
// //     return () => clearTimeout(timer);
// //   }, [isModalOpen, isPaused, currentImageIndex, currentIndex]);

// //   return (
// //     <div className=" w-full h-full flex flex-row">
// //       {/* Thumbnails */}
// //       {!isModalOpen &&
// //         featuredMoments.map((moment, idx) => (
// //           <MomentCard
// //             key={idx}
// //             image={moment.images[0]} // Thumbnail is the first image
// //             isNew={!moment.viewed} // Green border if not viewed
// //             onClick={() => handleOpenModal(idx)}
// //             name={moment.name}
// //           />
// //         ))}

// //       {/* Modal */}
// //       {isModalOpen && (
// //         <div className="absolute w-full h-full inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
// //           <div className="relative w-[70%] h-[70%] bg-white rounded-lg overflow-hidden">
// //             {/* Image */}
// //             <img
// //               src={featuredMoments[currentIndex].images[currentImageIndex]}
// //               alt={featuredMoments[currentIndex].name}
// //               className="w-full h-full object-cover"
// //             />

// //             {/* Close Button */}
// //             <button
// //               onClick={handleCloseModal}
// //               className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
// //             >
// //               ✕
// //             </button>

// //             {/* Navigation */}
// //             <button
// //               onClick={handlePrevious}
// //               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
// //             >
// //               ◀
// //             </button>
// //             <button
// //               onClick={handleNext}
// //               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
// //             >
// //               ▶
// //             </button>

// //             {/* Timer Progress Bar */}
// //             <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300">
// //               <div
// //                 className="bg-green-500 h-2 transition-all duration-5000"
// //                 style={{
// //                   width: `${
// //                     ((currentImageIndex + 1) /
// //                       featuredMoments[currentIndex].images.length) *
// //                     100
// //                   }%`,
// //                 }}
// //               ></div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default StorySlider;



// // 

// /* eslint-disable react/prop-types */
// import React, { useState, useEffect } from "react";

// // MomentCard Component
// const MomentCard = ({ image, isNew, onClick, name, dashCount }) => {
//   const dashStyle = {
//     background: `conic-gradient(
//       green 0deg ${(360 / dashCount) * dashCount}deg,
//       transparent ${(360 / dashCount) * dashCount}deg 360deg
//     )`,
//   };

//   return (
//     <div
//       className="relative w-16 h-16 cursor-pointer rounded-full overflow-hidden transition-all duration-300"
//       onClick={onClick}
//     >
//       {/* Circular image */}
//       <img src={image} alt={name} className="w-full h-full object-cover" />

//       {/* Dotted green border for new moments */}
//       <div
//         className="absolute inset-0 rounded-full pointer-events-none"
//         style={{
//           ...dashStyle,
//           WebkitMask: "radial-gradient(circle, white 75%, transparent 100%)",
//         }}
//       />
//     </div>
//   );
// };

// // StorySlider Component
// const StorySlider = ({ featuredMoments }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // Tracks image index
//   const [isPaused, setIsPaused] = useState(false);
//   const [progress, setProgress] = useState(0); // Progress bar value

//   // Handle the next image or moment
//   const handleNext = () => {
//     if (currentImageIndex < featuredMoments[currentIndex].images.length - 1) {
//       setCurrentImageIndex((prev) => prev + 1);
//     } else if (currentIndex < featuredMoments.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//       setCurrentImageIndex(0);
//     } else {
//       setCurrentIndex(0); // Loop back to the first moment
//       setCurrentImageIndex(0);
//     }
//     setProgress(0); // Reset progress bar
//   };

//   // Handle the previous image or moment
//   const handlePrevious = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex((prev) => prev - 1);
//     } else if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//       setCurrentImageIndex(featuredMoments[currentIndex - 1].images.length - 1);
//     } else {
//       setCurrentIndex(featuredMoments.length - 1);
//       setCurrentImageIndex(
//         featuredMoments[featuredMoments.length - 1].images.length - 1
//       );
//     }
//     setProgress(0); // Reset progress bar
//   };

//   const handleOpenModal = (idx) => {
//     setCurrentIndex(idx);
//     setCurrentImageIndex(0);
//     setIsModalOpen(true);
//     setIsPaused(false);
//     setProgress(0); // Reset progress
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setIsPaused(true);
//     setProgress(0); // Reset progress
//   };

//   // Auto-progress bar and image change
//   useEffect(() => {
//     let timer;
//     if (isModalOpen && !isPaused) {
//       timer = setInterval(() => {
//         setProgress((prev) => {
//           if (prev >= 100) {
//             handleNext();
//             return 0; // Reset progress bar
//           }
//           return prev + 20; // Increment progress
//         });
//       }, 1000); // 1 second per increment
//     }
//     return () => clearInterval(timer);
//   }, [isModalOpen, isPaused, currentImageIndex, currentIndex]);

//   return (
//     <div className="w-full h-full flex flex-row">
//       {/* Thumbnails */}
//       {!isModalOpen &&
//         featuredMoments.map((moment, idx) => (
//           <MomentCard
//             key={idx}
//             image={moment.images[0]} // Thumbnail is the first image
//             isNew={!moment.viewed} // Green border if not viewed
//             onClick={() => handleOpenModal(idx)}
//             name={moment.name}
//             dashCount={moment.images.length}
//           />
//         ))}

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="absolute w-full h-full inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <div className="relative w-[70%] h-[70%] bg-white rounded-lg overflow-hidden">
//             {/* Image */}
//             <img
//               src={featuredMoments[currentIndex].images[currentImageIndex]}
//               alt={featuredMoments[currentIndex].name}
//               className="w-full h-full object-cover"
//             />

//             {/* Close Button */}
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
//             >
//               ✕
//             </button>

//             {/* Navigation */}
//             <button
//               onClick={handlePrevious}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//             >
//               ◀
//             </button>
//             <button
//               onClick={handleNext}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//             >
//               ▶
//             </button>

//             {/* Progress Bar */}
//             <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300">
//               <div
//                 className="bg-green-500 h-2 transition-all"
//                 style={{
//                   width: `${progress}%`,
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StorySlider;

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

// MomentCard Component
const MomentCard = ({ image, isNew, onClick, name, dashCount,profilePicture, borderColor }) => {
  const dashArray = Array(dashCount).fill(0); // Array for dashes
  return (
    <div
      className={`relative w-20 h-20 cursor-pointer rounded-full overflow-hidden flex justify-center items-center ${borderColor}`}
      onClick={onClick}
    >
      {/* Circular image */}
      {/* <img src={image} alt={name} className="w-full h-full object-cover rounded-full" /> */}

      <img
        src={profilePicture}
        alt="Profile"
        className={`w-20 h-20 rounded-full object-cover`}
      />
      {isNew && (
        <div
          className="absolute inset-0 rounded-full border-[3px] border-dashed border-green-500"
          style={{
            maskImage: `radial-gradient(circle, transparent 85%, white 100%)`,
            WebkitMaskImage: `radial-gradient(circle, transparent 85%, white 100%)`,
          }}
        />
      )}
    </div>
  );
};

// StorySlider Component
const StorySlider = ({ featuredMoments }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Tracks image index
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // Progress bar value
  const [isNew, setIsNew] = useState(true);
  // Handle the next image or moment
  const handleNext = () => {
    if (currentImageIndex < featuredMoments[currentIndex].images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    } else if (currentIndex < featuredMoments.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCurrentImageIndex(0);
    } else {
      setCurrentIndex(0); // Loop back to the first moment
      setCurrentImageIndex(0);
    }
    setProgress(0); // Reset progress bar
  };

  // Handle the previous image or moment
  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setCurrentImageIndex(featuredMoments[currentIndex - 1].images.length - 1);
    } else {
      setCurrentIndex(featuredMoments.length - 1);
      setCurrentImageIndex(
        featuredMoments[featuredMoments.length - 1].images.length - 1
      );
    }
    setProgress(0); // Reset progress bar
  };

  const handleOpenModal = (idx) => {
    console.log("the idx:", idx);
  
    setCurrentIndex(idx);
     console.log("the curent index:", currentIndex);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    setIsPaused(false);
    setIsNew( idx === currentIndex ? false : true)
    setProgress(0); // Reset progress
  };



  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPaused(true);
    setProgress(0); // Reset progress
  };

  // Auto-progress bar and image change
  useEffect(() => {
    let timer;
    if (isModalOpen && !isPaused) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0; // Reset progress bar
          }
          return prev + 20; // Increment progress
        });
      }, 1000); // 1 second per increment
    }
    return () => clearInterval(timer);
  }, [isModalOpen, isPaused, currentImageIndex, currentIndex]);

  return (
    <div className="h-full flex flex-row w-full gap-4">
      {/* Thumbnails */}
      {!isModalOpen &&
        featuredMoments.map((moment, idx) => (
          <MomentCard
            key={idx}
            image={moment.images[0]} // Thumbnail is the first image
            isNew={isNew} // Green border if not viewed
            onClick={() => handleOpenModal(idx)}
            name={moment.name}
            profilePicture={moment.profilePicture}
            dashCount={moment.images.length}
            borderColor={isNew ? 'border border-green-500' : 'border border-red-500'}
          />
        ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative w-[70%] h-[70%] bg-white rounded-lg overflow-hidden">
            {/* Image */}
            <img
              src={featuredMoments[currentIndex].images[currentImageIndex]}
              alt={featuredMoments[currentIndex].name}
              className="w-full h-full object-cover"
            />

            {/* Profile Picture, Name, and Caption */}
            <div className="absolute top-4 left-4 flex items-center gap-4">
              <img
                src={featuredMoments[currentIndex].profilePicture}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
              />
              <div>
                <p className="text-white font-semibold">{featuredMoments[currentIndex].name}</p>
                <p className="text-white text-sm">{featuredMoments[currentIndex].caption}</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
            >
              ✕
            </button>

            {/* Navigation */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              ▶
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300">
              <div
                className="bg-green-500 h-2 transition-all"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorySlider;

