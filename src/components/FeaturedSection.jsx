import Slider from "./Slider";

const FeaturedSection = ({ title, data, CardComponent }) => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <Slider data={data}>
        {data.map((item, index) => (
          <CardComponent key={index} {...item} />
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedSection;
