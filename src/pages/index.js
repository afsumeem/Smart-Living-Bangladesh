import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import AnimatedGradient from "@/components/UI/Animate";
import Banner from "@/components/UI/Banner";
import Categories from "@/components/UI/Categories";
import { Inter } from "next/font/google";
import Head from "next/head";
import React, { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ categories, products }) {
  const interBubbleRef = useRef(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);

  useEffect(() => {
    const move = () => {
      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(
          curX.current
        )}px, ${Math.round(curY.current)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX.current = event.clientX;
      tgY.current = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Smart Living Bangladesh</title>
        <meta name="description" content="Smart Homes for Smarter Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={` ${inter.className} `}>
        <Banner />
        <div className="gradient-bg">
          <Categories categories={categories} />
          <AllProducts products={products} categories={categories} />
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            {/* <InteractiveBubble /> */}
            <div className="interactive" ref={interBubbleRef}></div>
          </div>
        </div>

        {/*  */}

        {/* <AnimatedGradient /> */}
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
