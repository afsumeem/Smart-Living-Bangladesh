/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Handle clicks outside of search input
  useEffect(() => {
    const handleClickOutsideSearch = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideSearch);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearch);
    };
  }, [searchRef]);

  // Handle clicks outside of NavbarMenu
  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        toggleRef.current.click();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://smart-living-bangladesh-backend.onrender.com/products"
        );
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://smart-living-bangladesh-backend.onrender.com/categories"
        );
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product?.productName?.toLowerCase().includes(searchTerm?.toLowerCase())
      );

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, products]);

  return (
    <>
      <Navbar
        isBordered
        className="bg-inherit backdrop-blur-none backdrop-saturate-0 backdrop-filter-none px-10 border-b-0 z-40 absolute top-8"
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white"
            ref={toggleRef}
            isSelected={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Link href="/">
            <img src="/Logo.png" alt="logo" className="h-14 " />
          </Link>
        </NavbarContent>

        <NavbarContent justify="center">
          <NavbarBrand>
            <p className="text-white text-2xl">Smart Living Bangladesh</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="gap-0" justify="end">
          <NavbarItem>
            <div className="relative">
              <div ref={searchRef}>
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
                    htmlFor="searchright"
                  >
                    <HiMagnifyingGlass />
                  </label>
                </div>
                {searchResults.length > 0 && (
                  <div className="absolute right-7 mt-2 bg-white text-black rounded-sm shadow-lg w-[375px] h-44 overflow-y-scroll product-card">
                    {searchResults.map((product) => (
                      <div
                        key={product?._id}
                        className="p-2 cursor-pointer border-b-1 border-gray-400"
                        onClick={() => setSearchTerm(product?.productName)}
                      >
                        <div className="flex gap-2 items-center">
                          <img
                            src={product.image}
                            alt={product?.productName}
                            className="h-10 w-10"
                          />
                          <h5>{product?.productName}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </NavbarItem>
        </NavbarContent>

        {/* Render NavbarMenu based on isMenuOpen */}
        {isMenuOpen && (
          <div ref={menuRef}>
            <NavbarMenu className="z-50 w-60 h-auto mx-16 backdrop-blur-xl backdrop-saturate-200 backdrop-filter mt-3 bg-inherit rounded-xl">
              <NavbarMenuItem className="text-white border-b pb-2">
                <Link className="w-full" href="/" size="lg">
                  Home
                </Link>
              </NavbarMenuItem>

              {categories?.length > 0 &&
                categories.map((category, index) => (
                  <NavbarMenuItem
                    key={`${category}-${index}`}
                    className="text-white border-b pb-2"
                  >
                    <Link
                      href={`/category/${category?.title?.toLowerCase()}`}
                      className="w-full"
                      size="lg"
                    >
                      {category.title}
                    </Link>
                  </NavbarMenuItem>
                ))}
            </NavbarMenu>
          </div>
        )}
      </Navbar>
    </>
  );
};

export default Header;
