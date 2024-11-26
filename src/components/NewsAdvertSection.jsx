// import React from "react";
// import Slider from "./Slider";
// import newsData from "../data/newsData";
// import advertData from "../data/advertData";
// import SkeletonLoader from "./SkeletonLoader";
// import StorySlider from "./MomentCard";
// import featuredMoments from "../data/featuredMoments";

// const NewsAdvertSection = ({loading}) => {
//   return (
//     <div className="flex flex-row px-2 justify-evenly">
//       <section className="py-8  text-blue-500">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col">
//             {/* News Section */}
//             <div>
//               <h3 className="text-xl font-bold mb-4 text-black">Latest News</h3>
//               <div className="flex flex-col" data={newsData}>
//                 {newsData.map((news) => (
//                   <div
//                     key={news.id}
//                     className="bg-white text-gray-800 rounded shadow overflow-hidden hover:scale-105 transition-transform duration-300  flex flex-col"
//                   >
//                     <img
//                       src={news.image}
//                       alt={news.title}
//                       className="w-full h-40 object-cover"
//                     />
//                     <div className="p-4">
//                       <h4 className="font-bold text-lg mb-2">{news.title}</h4>
//                       <p className="text-sm mb-4">{news.description}</p>
//                       <a
//                         href={news.link}
//                         className="text-blue-500 hover:underline text-sm font-bold"
//                       >
//                         Read More
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Advert Section */}
//             <div className="w-full">
//               <h3 className="text-xl font-bold mb-4 text-black">
//                 Featured Adverts
//               </h3>
//               <div className="flex flex-col w-full">
//                 {advertData.map((advert) => (
//                   <div
//                     key={advert.id}
//                     className="bg-white text-gray-800 rounded shadow overflow-hidden transform hover:scale-110 transition-transform duration-300 flex flex-col"
//                   >
//                     <img
//                       src={advert.image}
//                       alt={advert.title}
//                       className="w-full h-40 object-cover"
//                     />
//                     <div className="p-4">
//                       <h4 className="font-bold text-lg mb-2">{advert.title}</h4>
//                       <a
//                         href={advert.link}
//                         className="text-blue-500 hover:underline text-sm font-bold"
//                       >
//                         Learn More
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <section className="py-8 border-r-2  shadow-md w-[20%] h-full mt-20">
//         <h2 className="text-xl font-bold text-left mb-4">Featured Moments</h2>
//         {loading ? (
//           <SkeletonLoader width="100%" height="80px" className="mx-auto" />
//         ) : (
//           <StorySlider featuredMoments={featuredMoments} />
//         )}
//       </section> */}
//     </div>
//   );
// };

// export default NewsAdvertSection;


import React, { useState, useEffect } from "react";
import newsData from "../data/newsData";
import advertData from "../data/advertData";
import Advert from "./Advert";
import News from "./News";

const NewsAdvertSection = () => {
  const [newsIndex, setNewsIndex] = useState(0);
  const [advertIndex, setAdvertIndex] = useState(0);

  const ITEMS_PER_PAGE = 4;

  // Cycle data every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + ITEMS_PER_PAGE) % newsData.length);
      setAdvertIndex((prev) => (prev + ITEMS_PER_PAGE) % advertData.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Slice data for pagination
  const visibleNews = newsData.slice(newsIndex, newsIndex + ITEMS_PER_PAGE);
  const visibleAdverts = advertData.slice(
    advertIndex,
    advertIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="px-4 space-y-8 bg-custom_blue h-screen">

    <News visibleNews={visibleNews}/>

   <Advert visibleAdverts={visibleAdverts}/>
    </div>
  );
};

export default NewsAdvertSection;
