
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row bg-[#272343] pt-[14px] pb-[14px] items-center justify-between h-[45px] sm:h-[50px]">
      <div className="max-w-screen-xl mx-auto container flex items-center justify-between w-full px-4">
        <p className="text-white flex items-center space-x-2 font-normal text-center sm:text-left xs:text-left text-[10px] sm:text-[12px] xs:text-[12px]">
          <span>Free shipping on all orders over $50</span>
        </p>
        <ul className="text-white flex items-center space-x-4 font-normal text-center sm:text-left xs:text-left text-[10px] sm:text-[12px] xs:text-[12px]">
          <li className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <div />
          </li>
          <Link href="/faq">
            <li className="cursor-pointer">FAQs</li>
          </Link>
          <li className="flex items-center space-x-2 cursor-pointer">
            <div className="text-white" />
            <span>Need Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;