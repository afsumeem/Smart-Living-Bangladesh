/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@nextui-org/react";
import Head from "next/head";

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

  return (
    <>
      <Head>
        <title>{selectedProduct?.productName}</title>
        <meta name="description" content={` ${selectedProduct?.productName}`} />
      </Head>
      {/*  */}
      <main className=" min-h-screen">
        <div className="gradient-bg ">
          <div className="min-h-screen z-40 container mx-auto pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16 ">
              {/* Left column for product image */}
              <div className="flex flex-col items-center justify-center z-40 ">
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
                  <h2 className="flex flex-col gap-1  text-xl mt-4 font-bold">
                    {selectedProduct?.productName}
                  </h2>
                  <p className="  mt-2">
                    <span className="font-bold">Model: </span>
                    {selectedProduct?.model}
                  </p>
                  <p className="  mt-2">
                    <span className="font-bold"> Price: </span>
                    {selectedProduct?.price}
                  </p>
                  <p className="  mt-2">
                    <span className="font-bold">Details</span> <br />
                    <span>{selectedProduct?.productDetails}</span>
                  </p>

                  <p className="  mt-2">
                    <span className="font-bold">Additional Information</span>{" "}
                    <br />
                    <span>{selectedProduct?.additionalInformation}</span>
                  </p>

                  {selectedProduct?.benefits && (
                    <p className="  mt-2">
                      <span className="font-bold">Benefits</span> <br />
                      <span>{selectedProduct?.benefits}</span>
                    </p>
                  )}

                  <Button
                    className="bg-[#17acc0] text-white rounded-none mt-5"
                    variant="light"
                    as="a"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order By Whatsapp
                  </Button>
                </div>
              </div>
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
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
