/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";

const AllProducts = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  // unique categories
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  //

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleFeatureChange = (feature) => {
    setSelectedFeatures((prevSelectedFeatures) =>
      prevSelectedFeatures.includes(feature)
        ? prevSelectedFeatures.filter((f) => f !== feature)
        : [...prevSelectedFeatures, feature]
    );
  };

  let filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.category === selectedCategory) &&
      selectedFeatures.every((feature) =>
        product?.productDetails?.toLowerCase().includes(feature?.toLowerCase())
      )
    );
  });

  if (sortOrder === "low-to-high") {
    filteredProducts = filteredProducts.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  } else if (sortOrder === "high-to-low") {
    filteredProducts = filteredProducts.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
  }

  //

  return (
    <div className="container mx-auto mt-14 z-40 ">
      <div className=" relative z-50">
        <h2 className="text-center text-2xl font-bold mb-5 z-50">
          All Products
        </h2>
      </div>
      {/*  */}

      <div className="flex gap-2 my-10 justify-center flex-wrap px-8 z-40">
        <button
          className={`px-4 py-2 rounded-lg border text-sm z-40 ${
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
            className={`px-4 py-2 rounded-lg border text-sm z-40 ${
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

      <div className="grid grid-cols-7 z-40">
        <div className="col-span-1 z-40 ">
          <h5 className=" mb-3 font-bold text-[#17acc0]">Price Range</h5>
          <Checkbox
            radius="full"
            isSelected={sortOrder === "low-to-high"}
            onChange={() => handleSortChange("low-to-high")}
          >
            Low to High
          </Checkbox>
          <Checkbox
            radius="full"
            isSelected={sortOrder === "high-to-low"}
            onChange={() => handleSortChange("high-to-low")}
          >
            High to Low
          </Checkbox>

          <div className="z-40 ">
            <h5 className=" mt-8 mb-3 font-bold text-[#17acc0]">Features</h5>
            <Checkbox
              radius="full"
              isSelected={selectedFeatures.includes("Fingerprint")}
              onChange={() => handleFeatureChange("Fingerprint")}
            >
              Fingerprint
            </Checkbox>
            <Checkbox
              radius="full"
              isSelected={selectedFeatures.includes("Camera")}
              onChange={() => handleFeatureChange("Camera")}
            >
              Camera
            </Checkbox>
          </div>
        </div>

        {/* all products */}
        <div className="col-span-6">
          {filteredProducts.length === 0 ? (
            <p className="text-center font-bold text-red-600">
              No Product Found!
            </p>
          ) : (
            <div className=" gap-3 grid grid-cols-12 grid-rows-2 px-8 mb-12">
              {filteredProducts.map((product, i) => (
                <div
                  className="col-span-12 md:col-span-6 lg:col-span-3 border-none gap-5 relative shadow-lg mb-5 bg-white z-40"
                  key={i}
                >
                  <Link href={`/id/${product?._id}`}>
                    <img
                      alt="Card background"
                      className="object-cover rounded-xl mb-4 w-full h-32 my-5"
                      src={product.image}
                      // width={270}
                    />
                    <hr />
                    <div className="p-5">
                      <h4 className="font-semibold text-sm mt-3 text-[#17acc0]">
                        {product.productName}
                      </h4>
                      <p className="mt-2 text-sm">Model: {product?.model}</p>

                      <p className=" mt-5 font-semibold">
                        Price: {product.price}
                      </p>

                      <p className="bg-[#17acc0] p-1 text-white w-fit text-xs absolute top-0 right-0">
                        {product?.category}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default AllProducts;
