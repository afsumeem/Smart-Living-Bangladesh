import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import AllProducts from "@/components/UI/AllProducts";
import Banner from "@/components/UI/Banner";
import Categories from "@/components/UI/Categories";
import { Inter } from "next/font/google";
import Head from "next/head";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ categories, products }) {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Head>
        <title>Smart Living Bangladesh</title>
        <meta name="description" content="Smart Homes for Smarter Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={` ${inter.className} `}>
        <div className="gradient-bg">
          <Banner />
          <Categories categories={categories} />
          <AllProducts
            products={products}
            categories={categories}
            // searchTerm={searchTerm}
          />
          <Footer />
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
          </div>
        </div>

        {/*  */}

        {/* <AnimatedGradient /> */}
      </main>
    </>
  );
}

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
