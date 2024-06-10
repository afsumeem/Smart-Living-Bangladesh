/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const AllProducts = ({ products }) => {
  return (
    <div className="container mx-auto mt-14">
      <h2 className="text-center text-2xl font-bold mb-5">All Products</h2>

      {/* all products */}
      <div className=" gap-6 grid grid-cols-12 grid-rows-2 px-8">
        {products.map((product, i) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-3  m-2 p-7 border-none gap-5 relative shadow-lg"
            key={i}
          >
            <img
              alt="Card background"
              className="object-cover rounded-xl mb-4 w-full h-32 my-5"
              src={product.image}
              // width={270}
            />
            <h4 className="font-semibold text-sm mt-3 ">
              {product.productName}
            </h4>
            <p className="mt-2">Model: {product?.model}</p>
            <p className="flex items-center gap-1 mt-5">
              <TbCurrencyTaka className="text-xl" />{" "}
              <span className="text-sm font-semibold">{product.price}</span>
            </p>
            <p className="bg-blue-500 p-1 text-white w-fit text-xs absolute top-0 right-0">
              {product?.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
