/* eslint-disable @next/next/no-img-element */
import React from "react";

const AllProducts = ({ products }) => {
  return (
    <div>
      <h2>All products</h2>
      <div className=" gap-6 grid grid-cols-12 grid-rows-2 px-8">
        {products.map((product, i) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 border-none m-2 p-2"
            key={i}
          >
            <h4 className="font-bold text-large mt-3 text-[#fd614a] ">
              {product.productName}
            </h4>

            <img
              alt="Card background"
              className="object-cover rounded-xl mb-4 w-full h-64"
              src={product.image}
              // width={270}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
