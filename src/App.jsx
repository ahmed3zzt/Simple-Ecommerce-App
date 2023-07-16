import React, { useState, useEffect } from "react";
import Navbar from "./components/Header";
import Products from "./sections/product_list/product_list";

import { useRecoilState } from "recoil";
import cartState from "./atom/productsAtom";
function App() {
  const [cart, setCart] = useRecoilState(cartState);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    if (!!localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  return (
    <div className="text-center selection:bg-indigo-500 selection:text-white">
      <section className="bg-gray-200 bg-center bg-no-repeat bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl lg:text-6xl">
            Welcome In Our E Shop
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-800 sm:px-16 lg:px-48 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            adipisci assumenda labore, fugiat odio, debitis commodi nesciunt
            placeat corporis voluptates expedita laboriosam voluptatibus
            consectetur magnam accusantium. Voluptate esse nam cumque.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <a
              href="#"
              className="dark:focus:ring-blue-900 inline-flex items-center justify-center rounded-lg bg-indigo-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300"
            >
              Get started
              <svg
                aria-hidden="true"
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <div className="my-4">
        <h2 className="my-8 flex flex-row flex-nowrap items-center">
          <span
            className="block flex-grow border-t border-indigo-500"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span className="mx-4 block flex-none   bg-indigo-500 px-4 py-2.5 text-2xl font-medium uppercase leading-none text-white">
            Our Shop
          </span>
          <span
            className="block flex-grow border-t border-indigo-500"
            aria-hidden="true"
            role="presentation"
          ></span>
        </h2>
        <Products />
      </div>
    </div>
  );
}

export default App;
