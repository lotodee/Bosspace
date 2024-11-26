import React from 'react'

const Advert = ({visibleAdverts}) => {
  return (
    <section className="text-blue-500">
      <h3 className="text-2xl font-bold mb-6 text-white border-b-2 border-gray-300 pb-2">
       Advert
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {visibleAdverts.map((advert) => (
          <div
            key={advert.id}
            className="bg-white text-gray-800 rounded shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={advert.image}
              alt={advert.title}
              className="w-full h-28 object-cover rounded-t"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2 line-clamp-1">
                {advert.title}
              </h4>
              <a
                href={advert.link}
                className="text-blue-500 hover:underline text-sm font-bold"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advert