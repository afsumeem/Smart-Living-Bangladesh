/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      {/* <div className=" mt-2 ">
      <div className="border-b-1 pb-3">
        <div className="flex justify-between container mx-auto ">
          <div className="flex items-center">
            <Link href="/">
              <img src="/Logo.png" alt="logo" className="h-20" />
            </Link>
          
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
    
    </div> */}

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
          <div className=" container mx-auto ">
            <Link href="/">
              <img src="/Logo.png" alt="logo" className="h-[68px] ml-10" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
