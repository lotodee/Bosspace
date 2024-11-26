import React from "react";
import Slider from "./Slider";
import SkeletonLoader from "./SkeletonLoader"; // Assuming you have a skeleton loader component
import BusinessCard from "./BusinessCard"; // Assuming you have a BusinessCard component
import featuredCards from "../data/featuredCards";
import SkeletonBusinessCard from "./Skeletons/SkeletonBusinessCard";

const FeaturedBusinesses = ({ loading }) => {
  return (
    <section className=" ">
      <h2 className="text-xl font-bold text-center mb-4">Featured Cards</h2>
      {loading ? (
        <Slider data={featuredCards} className=" flex flex-row gap-2">
          <SkeletonBusinessCard data={featuredCards} />
        </Slider>
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
