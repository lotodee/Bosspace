import React from 'react'
import FeaturedBusinesses from '../FeaturedBusiness'
import FeaturedDeals from '../FeaturedDeals'

const Others = ({loading ,featuredDeals}) => {
  return (
    <div className="flex flex-col gap-8 px-8">
      <FeaturedBusinesses loading={loading}  />
      <FeaturedDeals loading={loading} featuredDeals={featuredDeals}/>
    </div>
  );
}

export default Others