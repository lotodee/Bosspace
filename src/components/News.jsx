import React from "react";

const News = ({ visibleNews }) => {
  return (
    <section className="text-gray-900 ">
      <h3 className="text-2xl font-bold mb-6 text-custom_blue border-b-2 border-custom_pink pb-2">
        Latest News
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleNews.map((news) => (
         <div
            key={news.id}
            className="bg-white text-gray-800 rounded shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-28 object-cover rounded-t"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2 line-clamp-1">
                {news.title}
              </h4>
              <p className="text-sm mb-2 line-clamp-2">{news.description}</p>
              <a
                href={news.link}
                className="text-blue-500 hover:underline text-sm font-bold"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
