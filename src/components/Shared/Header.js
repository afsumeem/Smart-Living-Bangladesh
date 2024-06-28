/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { IoCartOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";

const Header = ({ searchTerm, setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home"];

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-inherit backdrop-blur-none backdrop-saturate-0 backdrop-filter-none px-10 border-b-0 z-40 absolute top-8"
        x
      >
        <NavbarContent className=" " justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white"
          />
          <Link href="/">
            <img src="/Logo.png" alt="logo" className="h-14 " />
          </Link>
        </NavbarContent>

        <NavbarContent className="  " justify="center">
          <NavbarBrand>
            <p className="text-white    text-2xl">Smart Living Bangladesh</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className=" gap-0" justify="end">
          <NavbarItem>
            <div className="search-container">
              <input
                className="search expandright"
                id="searchright"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <label
                className="text-white button searchbutton"
                for="searchright"
              >
                <HiMagnifyingGlass />
              </label>
            </div>
          </NavbarItem>
          <NavbarItem className="">
            <IoCartOutline className="text-white text-2xl" />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="z-50 w-60 h-20 mx-16 backdrop-blur-xl backdrop-saturate-200 backdrop-filter mt-3 bg-inherit rounded-xl">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="text-white border-b pb-2"
            >
              <Link className="w-full " href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};
export default Header;
