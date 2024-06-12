/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#17acc0] dark:bg-gray-900 mt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 text-center ml-0 lg:ml-20">
              <img
                src="/Logo.png"
                className="h-36 block mx-auto"
                alt="Smart Living Bangladesh"
              />
              <p className="text-white">Smart Homes for Smarter Bangladesh</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Address
                </h2>
                <p className="flex flex-col">
                  Baridhara, Diplomates Tower,
                  <span>kalachandpur Main Road, Baridhara,</span>
                  <span>Dhaka</span>
                </p>
              </div>
              <div className="ml-0 md:ml-40 ">
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                  Follow us
                </h2>
                <ul className="text-black font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center font-semibold">
              © 2024
              <a href="#" className="hover:underline">
                Smart Living Bangladesh
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-black ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
