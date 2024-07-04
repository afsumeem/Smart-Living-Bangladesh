/* eslint-disable @next/next/no-img-element */
// import RootLayout from "@/components/Layouts/RootLayout";
import Footer from "@/components/Shared/Footer";
import { Button } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";

//

const CategoryId = ({ selectedProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Calculate total price
  const totalPrice = selectedProduct.price * quantity;
  const withInstallationPrice = totalPrice + 2000;

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
            <div className="px-4 py-16 ">
              <div className="flex justify-end z-40 relative">
                <Link
                  href="/"
                  className="text-lg font-semibold block cursor-pointer"
                >
                  &#8592; Back to Home
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {/* Left column for product image */}
                {/* <div className="flex flex-col items-center justify-center z-40 ">
                  <img
                    src={selectedProduct?.image}
                    alt={selectedProduct?.productName}
                    className="rounded-lg w-full "
                    style={{ height: "auto", maxWidth: "100%" }}
                  />
                </div> */}
                <Swiper
                  loop={true}
                  modules={[Navigation, Autoplay, Pagination]}
                  spaceBetween={30}
                  slidesPerView="auto"
                  navigation={true}
                  className="mySwiper w-[100%] overflow-visible block mx-auto rounded-2xl"
                >
                  <SwiperSlide>
                    <div className=" w-[100%] mx-auto h-auto rounded-2xl relative">
                      {/* content */}

                      <img
                        src={selectedProduct?.image}
                        alt={selectedProduct?.productName}
                        style={{ height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" w-[100%] mx-auto h-auto rounded-2xl relative">
                      {/* content */}

                      <img
                        src={selectedProduct?.image}
                        alt={selectedProduct?.productName}
                        style={{ height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* Right column for product details and order button */}
                <div className="flex flex-col justify-between z-40 ">
                  <div className=" select p-5">
                    <h2 className="flex flex-col gap-1  text-2xl mt-4 font-bold mb-3">
                      {selectedProduct?.productName}
                    </h2>
                    <p className="  my-2">
                      Model: <br />
                      <span className="font-bold text-xl">
                        {" "}
                        {selectedProduct?.model}
                      </span>
                    </p>
                    <hr />
                    <p className="  mt-2">
                      Price: <br />
                      <span className="font-bold text-xl">
                        {" "}
                        BDT-{totalPrice}
                      </span>
                    </p>
                    {selectedProduct?.withInstallation && (
                      <p className="text-gray-600 mb-2">
                        +BDT {withInstallationPrice} (with Installation)
                      </p>
                    )}
                    {selectedProduct?.withRemote && (
                      <p className="text-gray-600 mb-2">
                        +BDT {selectedProduct?.withRemote} (with Remote)
                      </p>
                    )}

                    <p className="mt-4">
                      <span className="font-medium">Quantity:</span>
                    </p>
                    <div className="flex items-center gap-4 my-2 ">
                      <button
                        className="p-1 h-6 w-6 rounded-full border-2 border-black text-xl flex items-center hover:text-white hover:bg-black duration-300 justify-center "
                        onClick={handleIncrease}
                      >
                        <span className="mb-1">+</span>
                      </button>
                      <p className="font-semibold text-xl">{quantity}</p>
                      <button
                        className="p-1 h-6 w-6 rounded-full border-2 border-black text-xl flex items-center hover:text-white hover:bg-black duration-300 justify-center "
                        onClick={handleDecrease}
                      >
                        <span className="mb-1"> -</span>
                      </button>
                    </div>
                    <p className="mt-4">
                      <span className="font-medium">Details:</span>
                      <br />
                      <span>{selectedProduct?.productDetails}</span>
                    </p>

                    <p className="  mt-2">
                      <span className="font-medium">
                        Additional Information:
                      </span>

                      <br />
                      <span>{selectedProduct?.additionalInformation}</span>
                    </p>

                    {selectedProduct?.benefits && (
                      <p className="  mt-2">
                        <span className="font-medium">Benefits:</span>
                        <br />
                        <span>{selectedProduct?.benefits}</span>
                      </p>
                    )}

                    <Button
                      className="bg-[#93fefb] text-black rounded-xl mt-8 shadow-xl w-full border font-semibold py-2"
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
          <Footer />
        </div>
      </main>
    </>
  );
};

// CategoryId.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

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
