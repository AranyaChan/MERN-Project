import {MapPin } from 'lucide-react'
import gagan from '../assets/gagan.jpg'
import patu from '../assets/patu.jpg'
import sayantan from '../assets/sayantan.jpg'



const locations = [
  {
    title: 'Siliguri Institute of Technology',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'Sukna, Salbari, bla bla bla 123432',
  },
  {
    title: 'Head office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'UNFORTUNATELY WE DONT HAVE A HEAD OFFICE',
  },
  {
    title: 'Karnataka office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'You think we would have an office in Karnataka? LMFAO',
  },
]



const users = [
  {
    name: 'Aranya Chatterjee',
    image:
      'https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/424435766_917627953341702_7315688184166591448_n.jpg?ccb=11-4&oh=01_AdRiRyXKz23DOmCGpJ9j_YNAJ1W7vD90cBqXRz_76AKKIg&oe=65EBEA3D&_nc_sid=e6ed6c&_nc_cat=109',
    position: 'Team Lead',
  },
  {
    name: 'Sayantan Chakraborty',
    image: sayantan,
    position: 'Video Editor',
  },
  {
    name: 'Pranojjal Roy',
    image:
      patu,
    position: 'Front End developer',
  },
  {
    name: 'Gagan Paul',
    image: gagan,
    position: 'Back-End Developer',
  }
]

export default function About() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            We are Located right where you want us to be
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
           Aranya, Sayantan, Pranojjal and Gagan are back at it again!
          </p>
        </div>
        <div className="w-full space-y-4">
      
          <div className="google-map-code flex items-center justify-center gap-6 py-10">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4065.991382089005!2d88.37343214595036!3d26.76931419965726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441297b764937%3A0xc464d98ddba99ed2!2sSiliguri%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1708672492817!5m2!1sen!2sin"
                width="1000"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </div>

        </div>
        {/* locations */}
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          {locations.map((location) => (
            <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
        <hr className="mt-20" />
        {/* greetings */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
            <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  )
}
