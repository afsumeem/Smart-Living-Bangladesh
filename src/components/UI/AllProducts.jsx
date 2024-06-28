/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

const AllProducts = ({ products, searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");

  // unique categories
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // unique features (example features)
  const uniqueFeatures = ["Fingerprint", "Camera"];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFeatureChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  let filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedFeature === "" ||
        (product?.productDetails &&
          product.productDetails
            .toLowerCase()
            .includes(selectedFeature.toLowerCase()))) &&
      (searchTerm === "" ||
        product?.productName
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product?.model?.toLowerCase().includes(searchTerm.toLowerCase()))
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

  return (
    <>
      <div className="container mx-auto mt-14 z-40 ">
        <div className="relative z-40">
          <h2 className="text-center text-2xl font-bold mb-5 z-50">
            All Products
          </h2>
        </div>
        {/*  */}
        <div className="flex gap-4 my-10 justify-center items-center flex-wrap px-8 z-40">
          <select
            className="bg-gray-50 bg-opacity-40 border border-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 z-40 backdrop-blur-md shadow "
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" selected>
              All Categories
            </option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-50 bg-opacity-40 border border-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 z-40 backdrop-blur-md shadow"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="">Sort by Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>

          <select
            className="bg-gray-50 bg-opacity-40 border border-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 z-40 backdrop-blur-md shadow"
            value={selectedFeature}
            onChange={handleFeatureChange}
          >
            <option value="">Select Feature</option>
            {uniqueFeatures.map((feature, index) => (
              <option key={index} value={feature}>
                {feature}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-7 z-40">
          {/* all products */}
          <div className="col-span-7">
            {filteredProducts.length === 0 ? (
              <p className="text-center font-bold text-red-600">
                No Product Found!
              </p>
            ) : (
              <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-8 mb-12 ">
                {filteredProducts.map((product, i) => (
                  <div
                    className=" border-none relative mb-5  z-40 shadow product-card rounded-xl"
                    key={i}
                  >
                    <Link href={`/id/${product?._id}`}>
                      <img
                        alt="Card background"
                        className="rounded-xl mb-4 w-full h-32 my-5"
                        src={product.image}
                      />
                      <hr />
                      <div className="p-4">
                        <h4 className="font-semibold text-sm mt-1">
                          {product.productName}
                        </h4>
                        <p className="mt-3 text-sm">Model: {product?.model}</p>
                        <p className="mt-3 text-sm">
                          <span className="font-semibold">Price: </span> BDT-
                          {product.price}
                        </p>
                        {product?.withInstallation && (
                          <p className="mt-3 text-sm">
                            BDT- {product?.withInstallation} (With Installation)
                          </p>
                        )}
                        <p className="bg-[#17acc0] py-1 px-2 text-white w-fit text-xs absolute top-0 right-0">
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
      </div>{" "}
    </>
  );
};

export default AllProducts;
