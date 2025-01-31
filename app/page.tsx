import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { PiFlowerTulipLight } from "react-icons/pi";
import Navbar from "./components/header/page";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="lg:w-full w-auto">
        <div className="w-full pt-[60px] pl-[20px] sm:pl-[40px] flex flex-col lg:flex-row">
          <div className="h-auto lg:h-[584px] w-full lg:w-[790px] bg-[#2A254B] p-[20px] lg:p-[60px]">
            <div className="relative gap-[20px] lg:gap-[41px] mb-8 lg:mb-0">
              <h1 className="text-white text-lg lg:text-2xl leading-8 lg:leading-10">
                The furniture brand for the <br className="hidden lg:block" />
                future, with timeless designs
              </h1>
              <Link href="./components/allProducts" className="h-[48px] lg:h-[56px] w-auto px-6 lg:px-8 bg-[#F9F9F926] text-white mt-8 lg:mt-12 whitespace-nowrap">
                View Collection
                </Link>
            </div>
            <div className="text-white mt-2 lg:mt-[250px]">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </div>
          </div>

          <div className="w-full lg:w-auto  flex justify-center items-center mt-8 lg:mt-0">
            <Image
              src="/Right Image.png"
              width={520}
              height={550}
              alt="Right Image"
              className="w-full max-w-[520px] h-auto"
            />
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto p-10">
          <h1 className="text-center text-2xl font-bold mb-12">
            What Makes Our Brand Different
          </h1>

          <div className="flex flex-wrap justify-between items-start gap-8">
            <div className="flex-1 min-w-[270px] text-center space-y-4">
              <CiDeliveryTruck className="mx-auto text-4xl" />
              <h2 className="text-lg font-semibold">Next day as standard</h2>
              <p className="text-sm text-gray-600">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            <div className="flex-1 min-w-[270px] text-center space-y-4">
              <CiCircleCheck className="mx-auto text-4xl" />
              <h2 className="text-lg font-semibold">Made by true artisans</h2>
              <p className="text-sm text-gray-600">
                Handmade crafted goods made with real passion and craftsmanship
              </p>
            </div>

            <div className="flex-1 min-w-[270px] text-center space-y-4">
              <CiCreditCard1 className="mx-auto text-4xl" />
              <h2 className="text-lg font-semibold">Unbeatable prices</h2>
              <p className="text-sm text-gray-600">
                For our materials and quality, you wont find better prices
                anywhere
              </p>
            </div>

            <div className="flex-1 min-w-[270px] text-center space-y-4">
              <PiFlowerTulipLight className="mx-auto text-4xl" />
              <h2 className="text-lg font-semibold">Recycled packaging</h2>
              <p className="text-sm text-gray-600">
                We use 100% recycled packaging to ensure our footprint is
                manageable
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full mx-auto mt-12 p-4">
          <h2 className="text-2xl font-bold mb-4 ml-2 pl-6">New Ceramics</h2>{" "}
          <div className="flex flex-wrap">
            {/* Product 1 */}
            <div className=" p-2 space-y-2">
              <Image
                src="/Photo (5).png"
                width={265}
                height={375}
                alt="Dandy Chair"
                className="w-full h-auto"
              />
              <p>The Dandy Chair</p>
              <p>£125</p>
            </div>

            {/* Product 2 */}
            <div className=" p-2 space-y-2">
              <Image
                src="/Parent (1).png"
                width={265}
                height={375}
                alt="Rustic Vase Set"
                className="w-full h-auto"
              />
              <p>Rustic Vase Set</p>
              <p>£125</p>
            </div>

            {/* Product 3 */}
            <div className=" p-2 space-y-2">
              <Image
                src="/Parent (2).png"
                width={265}
                height={375}
                alt="Silky Vase"
                className="w-full h-auto"
              />
              <p>The Silky Vase</p>
              <p>£125</p>
            </div>

            {/* Product 4 */}
            <div className="p-2 space-y-2">
              <Image
                src="/Photo.png"
                width={265}
                height={375}
                alt="Lucy Lamp"
                className="w-full h-auto"
              />
              <p>The Lucy Lamp</p>
              <p>£335</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
          <Link href="/components/allProducts">
          <button className="w-[170px] h-[56px] flex items-center justify-center gap-[10px] bg-gray-300 text-black border hover:bg-gray-400">
            View Collection
            </button>
            </Link>
        </div>
        </div>
      </div>
      <div className="w-full mt-10">
        {/* Popular Products Section */}

        <div className="whitespace-nowrap w-full mt-10 ">
          <h2 className="text-2xl font-bold mb-4 ml-2 pl-6">
            Our popular products
          </h2>
          <div className="flex flex-wrap p-2 gap-2 items-start">
            {/* Sofa Product */}
            <div className=" h-[410px]  p-2 space-y-2 ">
              <Image
                src="/sofa.png"
                alt="Poplar suede sofa"
                width={650}
                height={440}
                className="w-full h-full object-cover"
              />
              <p className="mt-2 font-medium">The Poplar Suede Sofa</p>
              <p className="text-gray-600">£980</p>
            </div>

            {/* First Chair */}
            <div className=" h-[410px] mt-12 p-2 space-y-2 min-w-mt-[16px] sm:mt-16 md:mt-4 m lg:mt-0 ">
              <Image
                src="/Parent.png"
                alt="Chair"
                width={180}
                height={440}
                className="w-full h-full object-cover"
              />
              <p className="mt-2 font-medium">The Poplar Chair</p>
              <p className="text-gray-600">£125</p>
            </div>

            {/* Second Chair */}
            <div className=" h-[410px] mt-12 p-2 space-y-2 min-w-mt-[16px] sm:mt-16 md:mt-4 m lg:mt-0 ">
              <Image
                src="/Photo.png"
                alt="Chair"
                width={180}
                height={440}
                className="w-full h-full object-cover"
              />
              <p className="mt-2 font-medium">The Lamp</p>
              <p className="text-gray-600">£125</p>
            </div>
            {/* Centered Button */}
            <div className="mt-6 flex justify-center">
          <Link href="/components/allProducts">
          <button className="w-[170px] h-[56px] flex items-center justify-center gap-[10px] bg-gray-300 text-black border hover:bg-gray-400">
            View Collection
            </button>
            </Link>
        </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-10 border-2 bg-gray-300 p-6">
            <div className="bg-white p-6 sm:p-8 lg:p-12">
              <div className="text-center">
                <h1 className="text-xl sm:text-2xl tracking-wide">
                  Join the club and get the benefits
                </h1>
                <h2 className="mt-4 text-sm sm:text-base md:w-auto sm:w-auto w-auto">
                  Sign up for our newsletter and receive exclusive <br /> offers
                  on new ranges, sales, pop-up stores, and more.
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="border-2 h-[50px] w-full sm:w-[60%] lg:w-[50%] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="h-[50px] px-6 bg-black text-white font-medium hover:bg-gray-800">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1370px] mx-auto h-auto lg:h-[603px] pr-4 flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="h-auto lg:h-[603px] sm:h-auto w-full lg:w-[50%] p-6">
              <div className="relative gap-4 lg:gap-[41px] lg:w-full mg:w-auto sm:w-auto">
                <h1 className="text-xl lg:text-2xl leading-8 lg:w-full mg:w-auto sm:w-auto lg:leading-10">
                  From a studio in London to a global brand <br />
                  with over 400 outlets
                </h1>
                <h2 className="mt-6 text-sm leading-6 space-y-4  lg:w-full mg:w-auto sm:w-auto">
                  When we started Avion, the idea was simple: make <br />
                  high-quality furniture affordable and available for the <br />{" "}
                  mass market.
                  <p className=" lg:w-full mg:w-auto text-sm sm:w-auto">
                    Handmade, and lovingly crafted furniture and <br /> homeware
                    is what we live, breathe, and design. Our Chelsea boutique{" "}
                    <br /> became the hotbed for the London interior design
                    community.
                  </p>
                </h2>
              </div>
              <div className="mt-6 lg:mt-[300px]">
                <button className="border px-4 py-2 text-sm hover:bg-gray-200">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="h-auto lg:h-[603px] w-full lg:w-[50%]">
              <Image
                src="/Image (1).png"
                width={720}
                height={603}
                alt="Studio Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
