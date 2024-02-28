
import { ChevronLeft, ChevronRight, Heart, Share } from 'lucide-react'

export default function Audiaq8() {
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
                      src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Faudi%2Fq8%2Faudi-q8-floret-silver-metallic.png%3Fv%3D1617947393&w=640&q=75"
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
                    'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20180605080849_q8-n.jpg&w=700&q=90&c=1',
                    'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fgallery%2Faudi%2Fq8%2Fexterior%2Faudi-q8-backview.jpg%3Fv%3D2020-01-15&w=640&q=75',
                    'https://www.topgear.com/sites/default/files/cars-car/carousel/2018/08/audi_q8_vorsprung_054.jpg'
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
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">Audi Q8</h2>
                <p className="mt-4 font-semibold">₹90,000/Day</p>
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
                     Red
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
                The Audi Q8 is powered by a 3.0-litre V6 petrol engine that produces 335bhp and 500Nm of torque. The engine is paired to an eight-speed automatic gearbox sending power to all four wheels via the Quattro all-wheel-drive system.

.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-3 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Additional Information
              </h2>
            </header>
          </div>
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Customer Reviews
              </h2>
            </header>
          </div>
        </div>
      </div>
    </div>
    )
}
