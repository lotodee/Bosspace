// const featuredDeals = [
//   {
//     title: "Discount Plumbing Services",
//     description: "Get your pipes fixed at half the price.",
//     price: "15,000",
//     endTime: "2024-12-05T23:59:59",
//     tag: "Exclusive",
//   },
//   {
//     title: "50% Off Graphic Design",
//     description: "Professional design services at a discount.",
//     price: "10,000",
//     endTime: "2024-11-28T23:59:59",
//     tag: "Premium",
//   },
//   {
//     title: "Discount Plumbing Services",
//     description: "Get your pipes fixed at half the price.",
//     price: "15,000",
//     endTime: "2024-11-30T23:59:59",
//     tag: "Exclusive",
//   },
//   {
//     title: "50% Off Graphic Design",
//     description: "Professional design services at a discount.",
//     price: "10,000",
//     endTime: "2024-11-28T23:59:59",
//     tag: "Premium",
//   },

// ];

// export default featuredDeals;



const getTomorrowNoon = () => {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1); // Add one day
  tomorrow.setHours(12, 0, 0, 0); // Set time to 12:00 PM
  return tomorrow.toISOString();
};

const featuredDeals = [
  {
    title: "Discount Plumbing Services",
    description: "Get your pipes fixed at half the price.",
    price: "15,000",
    endTime: getTomorrowNoon(), 
    tag: "Exclusive",
  },
  {
    title: "50% Off Graphic Design",
    description: "Professional design services at a discount.",
    price: "10,000",
    endTime: getTomorrowNoon(), 
    tag: "Premium",
  },
  {
    title: "Discount Plumbing Services",
    description: "Get your pipes fixed at half the price.",
    price: "15,000",
    endTime: getTomorrowNoon(), 
    tag: "Exclusive",
  },
  
];

export default featuredDeals;
