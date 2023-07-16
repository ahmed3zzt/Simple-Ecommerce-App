import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import cartState from "../atom/productsAtom";
import { useRecoilState } from "recoil";

const Navbar = () => {
  const [active, setActive] = useState("hidden");
  const [cart, setCart] = useRecoilState(cartState);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Our Services", link: "/our-Services" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ].map((item) => {
    return (
      <Link
        key={item.name}
        to={item.link}
        className="mr-5 block cursor-pointer rounded p-2 text-start  font-bold transition-colors hover:text-indigo-500 "
      >
        {item.name}
      </Link>
    );
  });

  return (
    <header className=" body-font dark:bg-gray-700 text-gray-600 shadow-lg">
      <div className="container relative mx-auto flex flex-col flex-wrap p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <span className="ml-3 text-xl text-indigo-500">Ahmed Ezzt</span>
        </a>
        <button
          onClick={() => {
            if (active === "hidden") {
              setActive("block");
            } else {
              setActive("hidden");
            }
          }}
          className="absolute right-4 inline-flex h-[30px] items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-4 font-sans font-semibold tracking-wide text-white md:hidden"
        >
          <span className="text-xl font-bold">
            {active === "block" ? <AiOutlineClose /> : <CiMenuBurger />}
          </span>
        </button>
        <nav
          className={`text-md block flex-wrap justify-center md:ml-auto md:flex ${active} `}
        >
          {navItems}
          <Link
            to={"/cart"}
            className="mr-5 block cursor-pointer rounded p-2 text-start  font-bold transition-colors hover:text-indigo-500 "
          >
            Cart : {cart.length}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
