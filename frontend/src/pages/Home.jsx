import { Link } from "react-router-dom";
import vid1 from "./../assets/vid.mp4";



function Home() {
  return (
    <div >
      <div className=" flex items-center justify-center h-full w-full">
        <video className="object-cover" src={vid1} autoPlay muted loop></video>

      </div>

      {/* hehe start */}
      <div className=" mt-2 hover:bg-stone-300 rounded-full relative isolate z-0 px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-4xl transition-colors duration-300 hover:text-stone-600 font-bold tracking-tight text-gray-900 sm:text-6xl">
            Embark on Your Next Adventure
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Gear Up, where every journey begins with a promise of excitement and convenience. 
            <br></br>At Gear Up, we believe in more than just providing transportation.<br></br> With top-notch customer service, transparent pricing, 
            and a commitment to reliability, we ensure that every mile of your adventure is smooth and memorable. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                 <Link to="/carlist">View Collection</Link>
              </button>
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Link to="/signup">Register </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* hehe end */}


      <div className=" hover:bg-gradient-to-r from-slate-500 to-fuchsia-300 rounded-full flex items-center justify-center gap-6 mb-3 py-10">
        <div className=" mt-5 ml-5 relative h-[400px] w-[300px] rounded-md">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/2019-audi-a6-3-0t-118-1547049594.jpg?crop=1xw:1xh;center,top&resize=980:*"
            alt="Audi A6"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="hover:text-gray-500/ text-lg font-semibold text-white">Audi A6</h1>
            <p className="mt-2 text-sm text-gray-300">
              Top Selling this month
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              <Link to="/details">View More &rarr;</Link>
            </button>
          </div>
        </div>

        <div className="relative h-[400px] w-[300px] rounded-md">
          <img
            src="https://www.bmw.in/content/dam/bmw/common/all-models/x-series/x7/2022/highlights/bmw-x-series-x7-cp-interior-highlights-desktop.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="hover:text-gray-500/ text-lg font-semibold text-white">BMW x7</h1>
            <p className="mt-2 text-sm text-gray-300">
              Best in Class Performance
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View More &rarr;
            </button>
          </div>
        </div>

        <div className="relative h-[400px] w-[300px] rounded-md">
          <img
            src="https://www.financialexpress.com/wp-content/uploads/2023/09/audi-q8-facelift.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="hover:text-gray-500/ text-lg font-semibold text-white">Audi Q8</h1>
            <p className="mt-2 text-sm text-gray-300">
             Supreme Comfort
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View More &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="text-center  sm:gap-12 grid-rows-4 ">
       
        <div className="">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <svg
              className="h-9 w-9 text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
          Wide Selection
          </h3>
          <p className="mt-4 text-sm text-gray-600">
          Find the perfect car for your needs, from compact city vehicles to spacious SUVs and luxury options. Browse by category, location, or specific features.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-9 w-9 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
          Simple Booking
          </h3>
          <p className="mt-4 text-sm text-gray-600">
          Secure your rental car in just a few clicks. Our user-friendly interface guides you through the process, making it quick and easy to book your desired vehicle.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-9 w-9 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
          Transparent Pricing
          </h3>
          <p className="mt-4 text-sm text-gray-600">
          No hidden fees, upfront pricing with clear breakdowns of costs. Compare rates, add-ons, and insurance options to find the best deal for your budget.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
