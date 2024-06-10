/* eslint-disable @next/next/no-img-element */
import React from "react";

const AllProducts = ({ products }) => {
  return (
    <div className="container mx-auto mt-14">
      <h2 className="text-center text-2xl font-bold mb-5">All Products</h2>
      <div className=" gap-6 grid grid-cols-12 grid-rows-2 px-8">
        {products.map((product, i) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-3  m-2 p-7 border gap-5"
            key={i}
          >
            <img
              alt="Card background"
              className="object-cover rounded-xl mb-4 w-full h-40"
              src={product.image}
              // width={270}
            />
            <h4 className="font-semibold text-sm mt-3 ">
              {product.productName}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
