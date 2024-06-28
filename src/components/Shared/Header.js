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
import { useEffect, useState } from "react";

const Header = ({ searchTerm, setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const menuItems = ["Home"];

  const changeNavbarColor = () => {
    if (window.scrollY >= 620) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className={`${
          colorChange
            ? "navbar1 colorChange border-b"
            : "bg-inherit backdrop-blur-none backdrop-saturate-0 backdrop-filter-none px-10 mt-5 border-b-0"
        } z-50 fixed `}
      >
        <NavbarContent className=" " justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`${colorChange ? "text-black" : "text-white"} `}
          />
          <Link href="/">
            <img src="/Logo.png" alt="logo" className="h-9 " />
          </Link>
        </NavbarContent>

        <NavbarContent className="  " justify="center">
          <NavbarBrand>
            <p
              className={`${
                colorChange ? "text-black" : "text-white"
              } text-2xl`}
            >
              Smart Living Bangladesh
            </p>
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
                className={`${
                  colorChange ? "text-black" : "text-white"
                } button searchbutton`}
                for="searchright"
              >
                <HiMagnifyingGlass />
              </label>
            </div>
          </NavbarItem>
          <NavbarItem className="">
            <IoCartOutline
              className={`${
                colorChange ? "text-black" : "text-white"
              } text-2xl`}
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="z-50 w-60 h-20 mx-16 backdrop-blur-xl backdrop-saturate-200 backdrop-filter mt-3 bg-inherit rounded-xl">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className={`${
                colorChange ? "text-black" : "text-white"
              } border-b pb-2`}
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
