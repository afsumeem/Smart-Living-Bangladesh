/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="container mx-auto mt-14">
      <h2 className="text-center text-2xl font-bold mb-5">Categories</h2>
      <div className=" gap-6 grid grid-cols-12 grid-rows-2 px-8">
        {categories.map((category, i) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 border-none m-2 p-2 shadow-lg rounded-xl hover:shadow-2xl duration-300"
            key={i}
          >
            <Link href={`/category/${category.title.toLowerCase()}`}>
              <img
                alt="Card background"
                className="object-cover rounded-t-xl mb-4 w-full h-56"
                src={category.image}
                // width={270}
              />
              <h4 className="font-bold text-large my-5 text-[#17acc0] text-center">
                {category.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
