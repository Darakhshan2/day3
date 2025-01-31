// @typescript-eslint/no-unused-expressions
import { CiCreditCard1 } from "react-icons/ci";
import { PiFlowerTulipLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import Navbar from "../header/page";
import Image from "next/image";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1440px] mx-auto px-4">
        {/* Top Section */}
        <div className="flex bg-slate-100 mt-12 flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-[277px] gap-6 md:gap-0 md:px-[128px]">
          <h1 className="text-xl md:text-2xl tracking-[3px] leading-relaxed w-full md:w-[704px]">
            A brand built on the love of craftsmanship,{" "}
            <br className="hidden md:block" />
            quality, and outstanding customer service
          </h1>
          <button className="border h-[56px] px-8 hover:bg-gray-200 w-full md:w-auto">
            View our Products
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full h-auto lg:h-[593px] px-4 lg:px-[100px] gap-8 lg:gap-4 mt-12">
          {/* Left Block */}
          <div className="w-full lg:w-[630px] lg:h-[410px] h-auto  bg-slate-800 flex flex-col justify-between text-white px-8 py-8 lg:px-[64px] lg:py-[64px]">
            <div>
              <h1 className="text-2xl lg:text-3xl mb-4">
                It started with a small idea
              </h1>
              <p>
                A global brand with local beginnings, our story began in a{" "}
                <br className="hidden md:block" />
                small studio in South London in early 2014.
              </p>
            </div>
            <button className="border w-full lg:w-[170px] h-[56px] mt-6 lg:mt-0 whitespace-nowrap hover:bg-white hover:text-black">
              View our Products
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[630px]">
            <Image
              src="/About1.png"
              alt="About Us"
              width={630}
              height={478}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:h-[603px] w-full max-w-[1440px] mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-[850px] h-auto">
          <Image
            src="/Imageabout2.png"
            alt="About Us"
            width={850}
            height={820}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[850px] h-[555px] lg:h-[555px] bg-purple-200 flex flex-col justify-center p-6 lg:p-[84px]">
          <h1 className="text-xl lg:text-2xl leading-relaxed mb-6">
            Our service isnt just personal, its actually{" "}
            <br className="hidden lg:block" />
            hyper personally exquisite
          </h1>

          <div className="space-y-5 text-sm lg:text-base">
            <p>
              When we started Avion, the idea was simple. Make high-quality
              furniture affordable and available for the mass market.
            </p>
            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe, and design so our Chelsea boutique became the
              hotbed for the London interior design community.
            </p>
          </div>

          <button className="mt-8 lg:mt-[120px] bg-white border px-8 py-3 text-sm lg:text-base font-medium hover:bg-gray-300">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-20 p-6">
        <h1 className="text-center text-2xl font-bold mb-12">
          What Makes Our Brand Different
        </h1>

        <div className="flex flex-wrap justify-between items-start gap-8  ">
          <div className="flex-1 min-w-[270px] text-center space-y-4 p-6  bg-purple-200">
            <CiDeliveryTruck className="mx-auto text-4xl" />
            <h2 className="text-lg font-semibold">Next day as standard</h2>
            <p className="text-sm text-gray-600">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className="flex-1 min-w-[270px] text-center space-y-4 p-6 bg-purple-200">
            <CiCircleCheck className="mx-auto text-4xl" />
            <h2 className="text-lg font-semibold">Made by true artisans</h2>
            <p className="text-sm text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          <div className="flex-1 min-w-[270px] text-center space-y-4 p-6  bg-purple-200">
            <CiCreditCard1 className="mx-auto text-4xl" />
            <h2 className="text-lg font-semibold">Unbeatable prices</h2>
            <p className="text-sm text-gray-600">
              For our materials and quality, you wont find better prices
              anywhere
            </p>
          </div>

          <div className="flex-1 min-w-[270px] text-center space-y-4 p-6 bg-purple-200">
            <PiFlowerTulipLight className="mx-auto text-4xl" />
            <h2 className="text-lg font-semibold">Recycled packaging</h2>
            <p className="text-sm text-gray-600">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-300 mt-10 border-2">
        <div className="max-w-[1240px] mx-auto bg-white text-center mt-6 mb-6 border px-4 py-6 sm:py-[54px]">
          <div>
            <h1 className="text-xl sm:text-2xl tracking-[2px] sm:tracking-[4px] font-semibold">
              Join the club and get the benefits
            </h1>
            <h2 className="mt-4 text-sm sm:text-base text-gray-700">
              Sign up for our newsletter and receive exclusive offers on new
              <p>ranges, sales, pop-up stores, and more.</p>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2 mt-8">
              <input
                type="text"
                placeholder="Enter your email"
                className="border-2 h-[48px] w-full max-w-[300px] px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="h-[48px] px-6 bg-black text-white font-medium hover:bg-gray-800">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
