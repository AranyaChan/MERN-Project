import { ChevronLeft, ChevronRight, Heart, Share } from "lucide-react";
import { useState } from "react";

export default function CarDetails() {
  const [reviewData, setReviewData] = useState({
    review: "",
  });

  

  const handleChange = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value,
    });
  };
  const createReview = (e) => {
    e.preventDefault();
    localStorage.setItem("reviewData", JSON.stringify(reviewData));
    console.log(reviewData);
  };

  return (
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Product gallery 1"
                      src="https://imgd.aeplcdn.com/664x374/n/cw/ec/39472/a6-exterior-left-front-three-quarter-3.jpeg?isig=0&q=80"
                      width={650}
                      height={750}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>
                  <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                    <ChevronLeft className="text-white" />
                    <ChevronRight className="text-white" />
                  </div>
                </div>
                <div className="flex gap-2 xl:flex-col">
                  {[
                    "https://imgd.aeplcdn.com/664x374/n/cw/ec/43731/audi-a6-interior-24.jpeg?q=80",
                    "https://live.staticflickr.com/4009/4424859554_548bfebdd5.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEpVRsyzR318W7KE-9q4HdQHaSkxTf8ybVA&usqp=CAU",
                  ].map((image, index) => (
                    <div
                      key={image}
                      className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 "
                    >
                      <img
                        alt={`Product ${index}`}
                        src={image}
                        decoding="async"
                        loading="lazy"
                        className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
                  Audi A6
                </h2>
                <p className="mt-4 font-semibold">₹40,000/Day</p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  available in:
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Black
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    AMG White
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Gray
                  </li>
                </ul>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book Now!
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <Heart size={16} className="mr-3" />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <Share size={16} className="mr-3" />
                      <span className="block">Share</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className=" mb-10 text-sm">
                  It is available in 3 variants, with an engine of 1984 cc and a
                  choice of 1 transmission: Automatic. A6 has an NCAP rating of
                  5 stars and comes with 6 airbags. Audi A6 is available in 5
                  colours. Users have reported a mileage of 14 kmpl for A6.
                </p>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className="">
            <header className="flex flex-col cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h1 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg mb-10">
                Customer Reviews
              </h1>

              {/* review start */}
              <form method="POST" className="mt-8" onSubmit={createReview}>
                <div className="flex w-full items-center ">
                  
                    <input
                      className="flex h-full w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Leave your review here!"
                      id="review"
                      name="review"
                      size="100"
                      value={reviewData.review}
                      onChange={handleChange}
                    ></input>
                  
                  <button
                    type="submit"
                    className=" ml-3 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Post
                  </button>
                </div>
              </form>
              {/* review end */}
              {reviewData.review}
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}
