/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = () => {
  return (
    <div className=" mt-2 ">
      <div className="border-b-1 pb-3">
        <div className="flex justify-between container mx-auto ">
          <div className="flex items-center">
            <img src="/Logo.png" alt="logo" className="h-20" />
            {/* <p className="font-semibold">Smart Homes for Smarter Bangladesh</p> */}
          </div>

          <div className="flex gap-2">
            <p>
              Call us <span className="font-bold">01648322000</span>
            </p>
            <span> | </span>
            <p>Diplomats Tower, kalachandpur Main Road, Baridhara, Dhaka</p>
          </div>
        </div>
      </div>
      {/* <div className="">
        <img src="/Logo.png" alt="logo" className="h-40" />{" "}
      </div> */}
    </div>
  );
};
export default Header;
