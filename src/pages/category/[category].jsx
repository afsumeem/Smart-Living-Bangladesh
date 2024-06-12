/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import { TbCurrencyTaka } from "react-icons/tb";

export default function CategoryPage({ products, category }) {
  const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <>
      <Head>
        <title>{category} Products - Smart Living Bangladesh</title>
        <meta name="description" content={`Products for ${category}`} />
      </Head>
      <main className=" min-h-screen ">
        <div className=" bg-black  w-full mb-5 relative">
          <div
            className="overflow-hidden opacity-40 bg-contain bg-black  w-full h-[400px]"
            style={{ backgroundImage: `url(/banner3.png)` }}
          ></div>
          <div className="absolute top-1/2 w-full">
            <h1 className="text-4xl text-center font-bold mb-8 text-white">
              {toCamelCase(category)} Products
            </h1>
          </div>
        </div>

        {/* filtered products */}
        <div className="mt-16">
          {products.length === 0 ? (
            <p className="text-center font-bold text-red-600">
              No Product Found!
            </p>
          ) : (
            <div className=" gap-3 grid grid-cols-12 grid-rows-2 px-8">
              {products.map((product, i) => (
                <div
                  className="col-span-12 md:col-span-6 lg:col-span-3  p-7 border-none gap-5 relative shadow-lg mb-5"
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
                    <span className="text-sm font-semibold">
                      {product.price}
                    </span>
                  </p>
                  <p className="bg-[#17acc0] p-1 text-white w-fit text-xs absolute top-0 right-0">
                    {product?.category}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { category } = context.params;

  // Fetch products for the specific category
  const res = await fetch(
    `https://smart-living-bangladesh-backend.onrender.com/products`
  );
  const allProducts = await res.json();
  const products = allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
  console.log(products);

  return {
    props: {
      products,
      category,
    },
  };
};
