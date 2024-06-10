/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const AllProducts = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  // unique categories

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  //
  const filteredProducts = products.filter((product) => {
    return selectedCategory === "" || product.category === selectedCategory;
  });

  return (
    <div className="container mx-auto mt-14">
      <h2 className="text-center text-2xl font-bold mb-5">All Products</h2>

      {/*  */}

      <div className="flex gap-2 my-10 justify-center flex-wrap px-8">
        <button
          className={`px-4 py-2 rounded-lg border text-sm  ${
            selectedCategory === ""
              ? "bg-[#17acc0] border-[#17acc0] text-white font-semibold"
              : "bg-white border-gray-300"
          }`}
          onClick={() => handleCategoryChange("")}
        >
          All Categories
        </button>
        {uniqueCategories?.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg border text-sm  ${
              selectedCategory === category
                ? "bg-[#17acc0] border-[#17acc0] text-white font-semibold"
                : "bg-white border-gray-300 "
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* all products */}
      <div className=" gap-6 grid grid-cols-12 grid-rows-2 px-8">
        {filteredProducts.map((product, i) => (
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
            <h4 className="font-semibold text-sm mt-3 text-[#17acc0]">
              {product.productName}
            </h4>
            <p className="mt-2">Model: {product?.model}</p>
            <p className="flex items-center gap-1 mt-5">
              <TbCurrencyTaka className="text-xl" />{" "}
              <span className="text-sm font-semibold">{product.price}</span>
            </p>
            <p className="bg-[#17acc0] p-1 text-white w-fit text-xs absolute top-0 right-0">
              {product?.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
