/* eslint-disable react/prop-types */
import DealCardSkeleton from "./Skeletons/DealCardSkeleton";
import DealCard from "./DealCard";
import { FaArrowRight } from "react-icons/fa";
const FeaturedDeals = ({ loading, featuredDeals }) => {
  return (
    <section className="py-8 bg-white">
      <div className="flex items-center justify-between mb-6 mx-8">
        <div className="inline-block border-b-4 border-t-4">
          <h2 className="text-2xl font-extrabold text-custom_blue border-b-2 border-t-2 border-custom_pink tracking-wide text-left uppercase">
            Deals
          </h2>
        </div>
        <button className=" font-semibold text-custom_blue rounded-md p-2 flex items-center justify-center gap-2 group hover:border-custom_blue hover:border hover:text-custom_blue hover:bg-white">
          <span className="group-hover:text-custom_blue">See All</span>
          <FaArrowRight className="h-3 w-3 text-custom_blue" />
        </button>
      </div>

      {loading ? (
        <DealCardSkeleton data={featuredDeals} />
      ) : (
        <div className="justify-between flex flex-row h-full mb-10">
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
        </div>
      )}
    </section>
  );
};

export default FeaturedDeals;
