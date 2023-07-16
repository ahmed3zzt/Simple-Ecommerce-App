import React, { useEffect } from "react";

import { useRecoilState } from "recoil";
import cartState from "../atom/productsAtom";

const SingleProductPage = (props) => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (product) => {
    if (!!localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      const cart = [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  };

  return (
    <div className="relative mx-auto my-20 w-full max-w-6xl rounded bg-white p-10 text-gray-800 shadow-xl md:text-left lg:p-20">
      <div className="-mx-10 items-center md:flex">
        <div className="mb-10 w-full px-10 md:mb-0 md:w-1/2">
          <div className="relative flex justify-center">
            <img
              src={props.product.image}
              className="relative z-0 max-h-[312px;] object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="w-full px-10 md:w-1/2">
          <div className="mb-10">
            <h1 className="mb-5 text-2xl font-bold uppercase">
              {props.product.title}
            </h1>
            <p className="text-sm">{props.product.description}</p>
          </div>
          <div>
            <div className="mr-5 inline-block align-bottom">
              <span className="align-baseline text-2xl leading-none">$</span>
              <span className="align-baseline text-5xl font-bold leading-none">
                {props.product.price}
              </span>
              <span className="align-baseline text-2xl leading-none">.99</span>
            </div>
            <div className="mt-2 inline-block space-x-1 align-bottom">
              <button className="rounded-full bg-indigo-300 px-10 py-2 font-semibold text-indigo-900 opacity-75 hover:text-gray-900 hover:opacity-100">
                <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
              </button>
              <button
                onClick={() => {
                  addToCart(props.product);
                }}
                className="rounded-full bg-indigo-300 px-10 py-2 font-semibold text-indigo-900 opacity-75 hover:text-gray-900 hover:opacity-100"
              >
                <i className="mdi mdi-cart -ml-2 mr-2"></i>ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
