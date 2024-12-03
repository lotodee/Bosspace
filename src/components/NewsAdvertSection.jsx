
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
    <div className="px-4 space-y-8 ">

    <News visibleNews={visibleNews}/>

   <Advert visibleAdverts={visibleAdverts}/>
    </div>
  );
};

export default NewsAdvertSection;
