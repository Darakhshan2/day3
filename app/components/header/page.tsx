"use client";
import Link from "next/link";
import { useState } from "react";
import {
  IoIosSearch,
  IoIosContact,
  IoIosMenu,
  IoIosClose,
} from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto h-[60px] px-4 sm:px-8">
        <IoIosSearch className="h-[20px] w-[20px] text-gray-600" />
        <h1 className="text-xl font-bold">Avion</h1>
        <div className="flex items-center gap-4">
          {/* <IoCartOutline className="h-[20px] w-[20px] text-gray-600" /> */}
          <IoIosContact className="h-[20px] w-[20px] text-gray-600" />
          {/* Menu Toggle Button */}
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoIosClose className="h-[24px] w-[24px] text-gray-600" />
            ) : (
              <IoIosMenu className="h-[24px] w-[24px] text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-300"></div>

      {/* Navigation Menu */}
      <nav className={`${isMenuOpen ? "block" : "hidden"} sm:block mt-4`}>
      <ul className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-700 text-sm sm:text-base">
  <li className="cursor-pointer hover:text-black">
    <Link href="/" className="focus:outline-none focus:text-black">
      Home
    </Link>
  </li>
  <li className="cursor-pointer hover:text-black">
    <Link href="/components/about" className="focus:outline-none focus:text-black">
      About
    </Link>
  </li>
  <li className="cursor-pointer hover:text-black">
    <Link href="/components/allProducts" className="focus:outline-none focus:text-black">
      All Products
    </Link>
  </li>
 
  <li className="cursor-pointer hover:text-black">
    <Link href="/components/shopping" className="focus:outline-none focus:text-black">
      Shopping
    </Link>
  </li>
 
</ul>
      </nav>
    </div>
  );
}
