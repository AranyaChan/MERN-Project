
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {


  const cars = [
    {
      id: 1,
      name: "Mercedes Benz G-Wagon",
      imageUrl:
        "https://images.hindustantimes.com/auto/img/2023/09/04/1600x900/Mercedes-Benz_EQG_1693801998397_1693801998508.jpg",
      description: "Best Car you can get for your bucks",
      link: "/details",
    },
    // Add more cars here
  ];

  return (
    <div className="relative h-[300px] w-[300px] rounded-md">
      <img
        src={cars.imageUrl}
        alt={cars.name}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{car.name}</h1>
        <p className="mt-2 text-sm text-gray-300">{car.description}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          <Link to={cars.link}>Check it out &rarr;</Link>
        </button>
      </div>
    </div>
  );
};

const Test = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Test;