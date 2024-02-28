import { Link,} from "react-router-dom";



const cars = [
  {
    name: 'BMWx7',
    image:
      'https://www.v3cars.com/media/model-imgs/1674211375-bmw-x7-facelift.webp',
    position: '3.0 L 6-cylinder, 3.0 L 6-cylinder diesel',
    to: '/bmx7',
  },
  {
    name: 'Audi Q-8',
    image: 'https://cdn.motor1.com/images/mgl/mrY7q/s3/audi-q8-tfsi-e-quattro-2020.jpg',
    position: '3.0 L V6 turbocharged',
    to: '/q8',
  },
  {
    name: 'Mercedes G-Wagon',
    image:
      'https://i.i-sgcm.com/new_cars/cars/12394/12394_m.jpg',
    position: 'Sport Utility Vehicle',
    to: '/gwagon'
  },
  {
    name: 'Hyundai Verna',
    image: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/144893/hyundai-verna-left-front-three-quarter0.jpeg?isig=0',
    position: 'Indian Sedan at its finest ',
    to: '/gwagon'
  },
  
]

export default function Carlist() {
  return (
    <>
      <div className="flex items-center justify-center gap-6 py-10">

        {cars.map((car) => (
        <div className="relative h-[300px] w-[300px] rounded-md">
          <img
            src={car.image}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              {" "}
              {car.name}
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              {car.position}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              <Link to={car.to}>Check it out &rarr;</Link>
            </button>
          </div>  
        </div>
        ))}


    
      </div>
     
    </>
  );
}
