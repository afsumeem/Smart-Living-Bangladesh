/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

import Link from "next/link";

export default function CategoryPage({ products, category }) {
  const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  //

  return (
    <>
      <Head>
        <title>{category} Products - Smart Living Bangladesh</title>
        <meta name="description" content={`Products for ${category}`} />
      </Head>
      <main className="min-h-screen">
        <div className=" bg-black w-full relative z-30">
          <div
            className="overflow-hidden opacity-40 bg-contain bg-black w-full h-[400px]"
            style={{ backgroundImage: `url(/banner3.png)` }}
          ></div>
          <div className="absolute top-1/2 w-full">
            <h1 className="text-4xl text-center font-bold mb-8 text-white">
              {toCamelCase(category)} Products
            </h1>
          </div>
        </div>

        {/* filtered products */}
        <div className="gradient-bg">
          <div className="my-20">
            {products.length === 0 ? (
              <p className="text-center font-bold text-red-600">
                No Product Found!
              </p>
            ) : (
              <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-8 mb-12 ">
                {products.map((product, i) => (
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
                          <span className="font-semibold">
                            Model: {product?.model}
                          </span>
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
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
          </div>
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
