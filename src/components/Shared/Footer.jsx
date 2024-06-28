/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <div>
      <footer className=" border-t border-black footer relative z-40">
        <div className="mx-auto w-full max-w-screen-xl p-4 ">
          <div className="md:flex md:justify-between ">
            <div className="mb-6 md:mb-0 text-center ml-10 ">
              <img
                src="/Logo.png"
                className="h-36 block mx-auto "
                alt="Smart Living Bangladesh"
              />
              <p className="text-white ">Smart Homes for Smarter Bangladesh</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 mt-10 ">
              <div className="text-white">
                <h2 className="mb-6 text-sm font-bold uppercase">Address</h2>
                <p className="flex flex-col text-white">
                  Baridhara, Diplomates Tower,
                  <span>kalachandpur Main Road, Baridhara,</span>
                  <span>Dhaka</span>
                </p>
              </div>
              <div className="ml-0 md:ml-14 text-white">
                <h2 className="mb-6 text-sm font-bold text-white uppercase">
                  Contact us
                </h2>
                <p className="flex flex-row items-center gap-2 z-40">
                  <img src="/call.png" alt="" className="h-4" />
                  <span>01648322000</span>
                </p>
                <p className="flex flex-row items-center gap-2">
                  <img src="/wp.png" alt="" className="h-4" />
                  <span>01648322000</span>
                </p>
                <p className="flex flex-row items-center gap-2">
                  <img src="/bkash.png" alt="" className="h-4" />
                  <span>01648322000</span>
                </p>
              </div>
              <div className="text-white">
                <h2 className="mb-6 text-sm font-bold text-white uppercase">
                  Bank Account
                </h2>
                <p className="">Standarad Chartered Bank Ltd</p>
                <p>Gulshan Branch</p>
                <p>AC No: 18140664901</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="text-white border-t-1 pt-4 mt-4 border-[#17acc0] text-center">
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
