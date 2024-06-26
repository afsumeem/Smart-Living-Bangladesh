/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@nextui-org/react";
import Head from "next/head";
import React, { useEffect, useRef } from "react";

const CategoryId = ({ selectedProduct }) => {
  // Construct WhatsApp URL
  const getWhatsAppUrl = () => {
    if (selectedProduct) {
      const countryCode = "+880";
      const phoneNumber = "01648322000";
      const message = `Hello, I'm interested in ${selectedProduct?.productName}.`;
      return `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
    }
    return "";
  };

  //
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
        <title>{selectedProduct?.productName}</title>
        <meta name="description" content={` ${selectedProduct?.productName}`} />
      </Head>
      {/*  */}
      <main className=" min-h-screen ">
        <div className="gradient-bg ">
          <div className="h-screen z-40 container mx-auto">
            <div className="grid grid-cols-2 gap-12 px-4 pt-16">
              {/* Left column for product image */}
              <div className="flex flex-col items-center z-40">
                <img
                  src={selectedProduct?.image}
                  alt={selectedProduct?.productName}
                  className="rounded-lg w-full mt-10"
                  style={{ height: "auto", maxWidth: "100%" }}
                />
              </div>
              {/* Right column for product details and order button */}
              <div className="flex flex-col justify-between z-40">
                <div className="mt-5">
                  <h2 className="flex flex-col gap-1  text-2xl mt-4 font-semibold">
                    {selectedProduct?.productName}
                  </h2>
                  <p className=" text-lg">{`Model: ${selectedProduct?.model}`}</p>
                  <p>{`Price: ${selectedProduct?.price}`}</p>
                  <p>
                    <span className="font-bold">Details</span> <br />
                    <span>{selectedProduct?.productDetails}</span>
                  </p>

                  <p>
                    <span className="font-bold">Additional Information</span>{" "}
                    <br />
                    <span>{selectedProduct?.additionalInformation}</span>
                  </p>

                  {selectedProduct?.benefits && (
                    <p>
                      <span className="font-bold">Benefits</span> <br />
                      <span>{selectedProduct?.benefits}</span>
                    </p>
                  )}
                </div>

                <Button
                  className="text-[#17acc0] border  border-[#17acc0] rounded-none "
                  variant="light"
                  as="a"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order By Whatsapp
                </Button>
              </div>
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                {/* <InteractiveBubble /> */}
                <div className="interactive" ref={interBubbleRef}></div>
              </div>
            </div>{" "}
          </div>
        </div>
      </main>
    </>
  );
};

CategoryId.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://smart-living-bangladesh-backend.onrender.com/products"
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://smart-living-bangladesh-backend.onrender.com/products/${params.id}`
  );
  const selectedProduct = await res.json();

  return {
    props: {
      selectedProduct,
    },
    revalidate: 5,
  };
};

export default CategoryId;
