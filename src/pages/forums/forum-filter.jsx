/* eslint-disable react/prop-types */

const ForumFilters = ({ selectedFilter, setSelectedFilter }) => {
  const filters = [
    "Trending Topics",
    "Common Topics",
    "Education",
    "Beauty",
    "Fashion",
  ];

  return (
    <div className="mb-4 flex gap-4">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => setSelectedFilter(filter)}
          className={`px-4 py-2 rounded-lg ${
            selectedFilter === filter ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ForumFilters;


