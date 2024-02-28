
import { ChevronLeft, ChevronRight, Heart, Share } from 'lucide-react'
import { useState } from "react";

export default function Bmx7() {

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
                      src="https://images.carandbike.com/car-images/colors/bmw/x7/bmw-x7-dravit-grey.jpg?v=1674200104"
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
                    'https://www.bmw.in/content/dam/bmw/common/all-models/x-series/x7/2022/highlights/bmw-x-series-x7-cp-interior-highlights-desktop.jpg',
                    'data:image/jpeg;base64,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',
                    'https://carsguide.ikman.lk/wp-content/uploads/2023/12/BMX-X7-Interior.jpg',
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
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">BMWX7</h2>
                <p className="mt-4 font-semibold">₹80,000/Day</p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  available in:
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    Matt Black
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    AMG White
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    AMG Gray
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
                Impressive BMW X7 price for the base model starts at Rs. 1.47 Crore and the top model price goes,X7 price for 2 variants is listed below, Sure, the X7 is a well-engineered product like most BMWs, but the similarity to the X1, albeit in a more bloated/luxury iteration, can be a put-off to most.

.
                </p>
              </div>
            </div>
          </div>
          
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Customer Reviews
              </h2>
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
    )
}
