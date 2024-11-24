import React, { useState, useEffect } from "react";
import Slider from "./components/Slider";
import BusinessCard from "./components/BusinessCard";
import DealCard from "./components/DealCard";
import MomentCard from "./components/MomentCard";
import SkeletonLoader from "./components/SkeletonLoader";

import quickOptions from "./data/quickOptions";
import featuredCards from "./data/featuredCards";
import featuredDeals from "./data/featuredDeals";
import featuredMoments from "./data/featuredMoments";
import NewsAdvertSection from "./components/NewsAdvertSection";
import WelcomeSection from "./components/WelcomeSection";
import FeaturedBusinesses from "./components/FeaturedBusiness";
import Header from "./components/Header";
import StorySlider from "./components/MomentCard";

const App = () => {
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
    <div className="min-h-screen bg-gray-50 text-blue-500">
      {/* Top Section */}
      {/* <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">Bosspace</div>
        <div className="flex space-x-4">
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#list" className="hover:underline">
            List
          </a>
        </div>
        <div>
          <button className="px-4 py-2 bg-white text-blue-500 rounded mr-2">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-700 rounded">Sign Up</button>
        </div>
      </header> */}
      <Header />
      <WelcomeSection />
      {/* Welcome Section */}
      {/* <section className="text-center py-16 bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome Boss</h1>
        <p className="text-xl text-gray-700">
          Find the best{" "}
          <span className="text-blue-500 font-bold">{changingText}</span>
        </p>
        <div className="mt-8 flex justify-center items-center space-x-2">
          <input
            type="text"
            placeholder="Search for services, businesses..."
            className="w-2/3 px-4 py-2 border rounded-lg shadow"
          />
          <button className="p-2 bg-blue-500 text-white rounded-lg shadow">
            <i className="fas fa-filter"></i>
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {quickOptions.map((option, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded shadow hover:bg-gray-300"
            >
              {option}
            </button>
          ))}
        </div>
      </section> */}

      {/* Featured Cards Section */}

      <NewsAdvertSection loading={loading} />
      {/* <section className="py-8 bg-gray-100">
        <h2 className="text-xl font-bold text-center mb-4">
          Featured Businesses
        </h2>
        {loading ? (
          <SkeletonLoader width="100%" height="200px" className="mx-auto" />
        ) : (
          <Slider>
            {featuredCards.map((card, idx) => (
              <BusinessCard
                key={idx}
                name={card.name}
                picture={card.picture}
                title={card.title}
                description={card.description}
                contact={card.contact}
              />
            ))}
          </Slider>
        )}

      </section> */}
      <FeaturedBusinesses />

      {/* Featured Deals Section */}
      <section className="py-8 bg-white">
        <h2 className="text-xl font-bold text-center mb-4">Featured Deals</h2>
        {loading ? (
          <SkeletonLoader width="100%" height="200px" className="mx-auto" />
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
     
      {/* Featured Moments Section */}

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bosspace. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
