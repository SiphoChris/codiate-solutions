import Image from "next/image";
import React from "react";
import { navLinks } from "@/_constants";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <div className="flex items-center flex-shrink-0">
            <a href="#" title="" className="inline-flex">
              <span className="sr-only">Codiate Solutions</span>
              <div className="relative w-48 h-34 object-contain">
                <Image
                  src="/images/codiate-logo.svg"
                  alt="Codiate Solutions logo"
                  fill={true}
                  priority={true}
                />
              </div>
            </a>
          </div>

          <div className="hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                title={link.name}
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile navigation - burger menu */}
          <div className="flex items-center justify-end space-x-5">
            <button
              type="button"
              className="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* book a call button - cta */}
            <button
              type="button"
              className="relative p-2 -m-2 text-white transition-all duration-200 hover:text-gray-200 hover:cursor-pointer"
            >
              <span className="hidden lg:inline">Book a call</span>
              <FaPhoneAlt className="size-5 hidden max-md:inline" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
