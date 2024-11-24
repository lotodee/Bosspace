import React from "react";
import Slider from "./Slider";
import newsData from "../data/newsData";
import advertData from "../data/advertData";

const NewsAdvertSection = () => {
  return (
    <section className="py-8  text-blue-500">
      <div className="container mx-auto px-4">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Latest News</h3>
            <Slider data={newsData}>
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="bg-white text-gray-800 rounded shadow overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">{news.title}</h4>
                    <p className="text-sm mb-4">{news.description}</p>
                    <a
                      href={news.link}
                      className="text-blue-500 hover:underline text-sm font-bold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Advert Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Featured Adverts</h3>
            <Slider Slider={advertData}>
              {advertData.map((advert) => (
                <div
                  key={advert.id}
                  className="bg-white text-gray-800 rounded shadow overflow-hidden transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={advert.image}
                    alt={advert.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">{advert.title}</h4>
                    <a
                      href={advert.link}
                      className="text-blue-500 hover:underline text-sm font-bold"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAdvertSection;
