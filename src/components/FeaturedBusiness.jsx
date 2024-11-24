import React from "react";
import Slider from "./Slider";
import SkeletonLoader from "./SkeletonLoader"; // Assuming you have a skeleton loader component
import BusinessCard from "./BusinessCard"; // Assuming you have a BusinessCard component
import featuredCards from "../data/featuredCards";

const FeaturedBusinesses = ({ loading }) => {
  return (
    <section className="py-8 bg-gray-100 ">
      <h2 className="text-xl font-bold text-center mb-4">
        Featured Businesses
      </h2>
      {loading ? (
        <SkeletonLoader width="100%" height="200px" className="mx-auto" />
      ) : (
        <Slider data={featuredCards}>
          {featuredCards.map((card, idx) => (
            <div key={idx} className="w-full min-w-[300px] px-2">
              <BusinessCard
                name={card.name}
                picture={card.picture}
                title={card.title}
                description={card.description}
                contact={card.contact}
              />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default FeaturedBusinesses;
