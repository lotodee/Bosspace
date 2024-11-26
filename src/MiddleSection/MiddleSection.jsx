import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import DealCard from "../components/DealCard";

import featuredDeals from "../data/featuredDeals";
import WelcomeSection from "../components/WelcomeSection";
import FeaturedBusinesses from "../components/FeaturedBusiness";
import DealCardSkeleton from "../components/Skeletons/DealCardSkeleton";

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
{/* 
      <NewsAdvertSection loading={loading} /> */}

          <FeaturedBusinesses  loading={loading}  />


      {/* Featured Deals Section */}
      <section className="py-8 bg-white">
        <h2 className="text-xl font-bold text-center mb-4">Featured Deals</h2>
        {loading ? (
          <DealCardSkeleton data={featuredDeals} />
        ) : (
          <Slider data={featuredDeals}>
            {featuredDeals.map((deal, idx) => (
              <DealCard
                key={idx}
                title={deal.title}
                description={deal.description}
                price={deal.price}
                endTime={deal.endTime}
                tag={deal.tag}
              />
            ))}
          </Slider>
        )}
      </section>

    
    </div>
  );
};

export default MiddleSection;

