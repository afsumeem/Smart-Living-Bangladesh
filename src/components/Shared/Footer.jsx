/* eslint-disable @next/next/no-img-element */
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 text-center ml-10">
              <img
                src="/Logo.png"
                className="h-36 block mx-auto "
                alt="Smart Living Bangladesh"
              />
              <p className="text-black">Smart Homes for Smarter Bangladesh</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 mt-10 ">
              <div className="">
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                  Address
                </h2>
                <p className="flex flex-col">
                  Baridhara, Diplomates Tower,
                  <span>kalachandpur Main Road, Baridhara,</span>
                  <span>Dhaka</span>
                </p>
              </div>
              <div className="ml-0 md:ml-14">
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                  Contact us
                </h2>
                <p className="flex flex-row items-center gap-2">
                  <IoMdCall /> <span>01648322000</span>
                </p>
                <p className="flex flex-row items-center gap-2">
                  <IoLogoWhatsapp className="text-[#42c151]" />
                  <span> 01648322000</span>
                </p>
                <p className="flex flex-row items-center gap-2">
                  <img src="/bkash.png" alt="" className="h-7" />
                  <span> 01648322000</span>
                </p>
              </div>
              <div className=" ">
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                  Bank Account
                </h2>
                <p className="">Standarad Chartered Bank Ltd</p>
                <p>Gulshan Branch</p>
                <p>AC No: 18140664901</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" border-t-1 pt-4 mt-4 border-[#17acc0] text-center">
            <p className="font-semibold text-sm">
              © 2024 Smart Living Bangladesh. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
