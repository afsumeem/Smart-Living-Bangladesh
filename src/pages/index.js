import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import Banner from "@/components/UI/Banner";
import Categories from "@/components/UI/Categories";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ categories, products }) {
  return (
    <>
      <Head>
        <title>Smart Living Bangladesh</title>
        <meta name="description" content="Smart Homes for Smarter Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className}`}>
        <Banner />
        <Categories categories={categories} />
        <AllProducts products={products} categories={categories} />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  //fetch categories

  const result = await fetch(
    "https://smart-living-bangladesh-backend.onrender.com/categories"
  );
  const categories = await result.json();

  //fetch products

  const allProducts = await fetch(
    "https://smart-living-bangladesh-backend.onrender.com/products"
  );
  const products = await allProducts.json();

  return {
    props: {
      categories: categories,
      products: products,
    },
    revalidate: 5,
  };
};
