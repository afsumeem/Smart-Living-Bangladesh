/* eslint-disable @next/next/no-img-element */
import { Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {/*  */}
      <div className=" ">
        <div className="flex justify-end gap-2 bg-[#17acc0] py-1 text-white px-3">
          <p>
            Call us <span className="font-bold">01648322000</span>
          </p>
          <span> | </span>
          <p>Diplomats Tower, kalachandpur Main Road, Baridhara, Dhaka</p>
        </div>
        <div className="border-b-1 py-1">
          <div className=" container mx-auto flex justify-between items-center ">
            <Link href="/">
              <img src="/Logo.png" alt="logo" className="h-[75px] ml-10" />
            </Link>
            <Input
              label="Search"
              variant="bordered"
              placeholder=""
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  // onClick={toggleVisibility}
                >
                  <IoSearchOutline className="text-2xl text-default-400 pointer-events-none" />
                </button>
              }
              type="text"
              // type={isVisible ? "text" : "password"}
              className="max-w-xs"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
