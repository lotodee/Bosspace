import React from 'react'
import DealCardSkeleton from './Skeletons/DealCardSkeleton';
import Slider from './Slider';
import DealCard from './DealCard';

const FeaturedDeals = ({loading,featuredDeals}) => {
  return (
    <section className="py-8 bg-white">
      <div className="inline-block border-b-4 border-t-4 mb-6 mx-8">
        <h2 className="text-2xl font-extrabold text-custom_blue border-b-2 border-t-2 border-custom_pink tracking-wide text-left uppercase">
          Deals
        </h2>
      </div>
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
  );
}

export default FeaturedDeals