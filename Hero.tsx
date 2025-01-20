import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#F0F2F3]">
      <div className="w-full max-w-screen-xl flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6 text-center sm:text-left">
          <h1 className="text-[14px] pt-[50px] sm:pt-[119px] font-normal text-[#272343]">
            WELCOME TO CHAIRY
          </h1>
          <p className="text-[40px] sm:text-[60px] font-bold mb-6">
            Best Furniture Collection for your interior.
          </p>
          <button
            className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700"
            aria-label="Shop Now"
          >
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 flex justify-center">
          <Image
            src="/Product Image (1).png"
            alt="pic"
            width={434}
            height={584}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
