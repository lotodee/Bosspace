import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import DealCard from "../components/DealCard";

import featuredDeals from "../data/featuredDeals";
import WelcomeSection from "../components/WelcomeSection";
import FeaturedBusinesses from "../components/FeaturedBusiness";
import DealCardSkeleton from "../components/Skeletons/DealCardSkeleton";
import FeaturedDeals from "../components/FeaturedDeals";
import Others from "../components/Others/Others";

const MiddleSection = () => {
  const [changingText, setChangingText] = useState("deals");
  const [loading, setLoading] = useState(true);
  const rotatingText = [
    "deals",
    "properties",
    "talents",
    "experts",
    "jobs",
    "more",
  ];

  // Simulate loading

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Handle rotating text
  useEffect(() => {
    const interval = setInterval(() => {
      setChangingText((prev) => {
        const nextIndex =
          (rotatingText.indexOf(prev) + 1) % rotatingText.length;
        return rotatingText[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  text-blue-500">
      {/* <Header /> */}
      <WelcomeSection />

      <div className="border-b-4 border-t-4  w-fit mx-auto mb-6 my-8">
        <h2 className="text-2xl font-extrabold text-custom_blue border-b-2 border-t-2 border-custom_pink   tracking-wide text-center uppercase">
          Featured LISTINGS
        </h2>
      </div>
      {/* 
      <NewsAdvertSection loading={loading} /> */}

      <FeaturedBusinesses loading={loading} />

      {/* Featured Deals Section */}
      <FeaturedDeals loading={loading} featuredDeals={featuredDeals} />



    
    </div>
  );
};

export default MiddleSection;

