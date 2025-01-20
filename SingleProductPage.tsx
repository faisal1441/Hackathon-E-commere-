import React from "react";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        <div className="lg:col-span-2">


          <div className="flex items-start bg-white p-6 rounded-lg shadow-md mb-4">
            {/* Image Section */}
            <div className="w-[200px] h-[200px]">
              <Image
                src="/02 .jpg"
                alt="Library Stool Chair"
                width={400}
                height={400}
                className="rounded-md object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="ml-8 max-w-lg">
              <h3 className="text-3xl font-bold text-[#272343]">
                Library Stool Chair
              </h3>
              <button className="text-[20px] font-normal text-white bg-[#029FAE] rounded-xl px-4 py-2 mt-4">
                $20 USD
              </button>
              <p className="line-clamp-3 font-normal text-lg text-gray-600 mt-4 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                architecto omnis laboriosam incidunt, vel blanditiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
