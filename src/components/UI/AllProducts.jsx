/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import CustomDropdown from "./CustomeDropdown";

const AllProducts = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");

  // unique categories
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // unique features (example features)
  const uniqueFeatures = ["Fingerprint", "Camera"];

  let filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedFeature === "" ||
        (product?.productDetails &&
          product.productDetails
            .toLowerCase()
            .includes(selectedFeature.toLowerCase())))
      // &&
      // (searchTerm === "" ||
      //   product?.productName
      //     ?.toLowerCase()
      //     .includes(searchTerm.toLowerCase()) ||
      //   product?.model?.toLowerCase().includes(searchTerm?.toLowerCase()))
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
      <div className="container mx-auto mt-14 z-40">
        <div className="relative z-40">
          <h2 className="text-center text-2xl font-bold mb-5 z-50">
            All Products
          </h2>
        </div>
        {/* Filters */}
        <div className="flex gap-4 my-10 justify-center items-center flex-wrap px-8 z-40">
          <div className="z-50 w-full md:w-auto">
            <CustomDropdown
              options={["All Categories", ...uniqueCategories]}
              selected={selectedCategory || "All Categories"}
              onSelect={(value) =>
                setSelectedCategory(value === "All Categories" ? "" : value)
              }
              placeholder="Select Category"
            />
          </div>

          <div className="z-50 w-full md:w-auto">
            <CustomDropdown
              options={["Sort by Price", "Low to High", "High to Low"]}
              selected={sortOrder || "Sort by Price"}
              onSelect={(value) =>
                setSortOrder(
                  value === "Sort by Price"
                    ? ""
                    : value === "Low to High"
                    ? "low-to-high"
                    : "high-to-low"
                )
              }
              placeholder="Sort by Price"
            />
          </div>

          <div className="z-50 w-full md:w-auto">
            <CustomDropdown
              options={["Select Feature", ...uniqueFeatures]}
              selected={selectedFeature || "Select Feature"}
              onSelect={(value) =>
                setSelectedFeature(value === "Select Feature" ? "" : value)
              }
              placeholder="Select Feature"
            />
          </div>
        </div>

        <div className="grid grid-cols-7 z-40">
          {/* all products */}
          <div className="col-span-7">
            {filteredProducts.length === 0 ? (
              <p className="text-center font-bold text-red-600">
                No Product Found!
              </p>
            ) : (
              <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-8 mb-12">
                {filteredProducts.map((product, i) => (
                  <div
                    className="border-none relative mb-5 z-40 shadow product-card rounded-xl w-64 md:w-56 mx-auto"
                    key={i}
                  >
                    <Link href={`/id/${product?._id}`}>
                      <img
                        alt="Card background"
                        className="rounded-xl mb-4 w-full h-56 md:h-40 my-5"
                        src={product.image}
                      />
                      <hr />
                      <div className="p-4">
                        <h4 className="font-semibold text-sm mt-1">
                          {product.productName}
                        </h4>
                        <p className="mt-3 text-sm">
                          {" "}
                          <span className="font-semibold">Model: </span>
                          {product?.model}
                        </p>
                        <p className="mt-3 text-sm">
                          <span className="font-semibold">Price: </span> BDT-
                          {product.price}
                        </p>
                        {product?.withInstallation && (
                          <p className="mt-3 text-sm">
                            +BDT {product?.withInstallation} (With Installation)
                          </p>
                        )}

                        {product?.withRemote && (
                          <p className="mt-3 text-sm">
                            +BDT {product?.withRemote} (with Remote)
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
      </div>
    </>
  );
};

export default AllProducts;
