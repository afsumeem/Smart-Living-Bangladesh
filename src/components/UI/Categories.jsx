/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className="container mx-auto mt-14 ">
      <div className=" relative z-40">
        <h2 className="text-center text-2xl font-bold mb-5 z-50">Categories</h2>
      </div>

      <div className=" flex flex-wrap px-8 justify-center items-center">
        {categories.map((category, i) => (
          <div
            className=" product-card border-none m-2 px-6 py-4 shadow-sm hover:shadow-2xl duration-300 z-40 rounded-xl"
            key={i}
          >
            <Link href={`/category/${category.title.toLowerCase()}`}>
              <img
                alt="Card background"
                className="object-cover mb-4  h-24 rounded-full block mx-auto"
                src={category.image}
                // width={270}
              />
              <h4 className="font-bold text-large my-5 text-center">
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
