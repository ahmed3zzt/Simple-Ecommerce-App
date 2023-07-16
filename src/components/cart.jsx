import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import cartState from "../atom/productsAtom";
import Product from "./product";
const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    if (!!localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += Number(cart[i].price);
  }

  const deleteProduct = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="container mx-auto">
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-indigo-500">
              Welcome To Cart
            </h2>
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Here You Can Buy Your Faveroite Products
            </h1>
            {cart.length === 0 ? (
              <h1 className="m-8 text-5xl text-slate-500">
                You Don't Have Any Products <br />
                Start Shopping{" "}
                <Link to="/" className="text-indigo-500">
                  Now
                </Link>
              </h1>
            ) : (
              <>
                <div className="flex flex-wrap">
                  {cart.map((product) => {
                    return (
                      <div
                        className="p-4 md:w-2/4 lg:w-1/4"
                        key={product.id}
                        onLoad={() => {
                          setPrice(product.price);
                        }}
                      >
                        <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                          <img
                            className="h-36 w-full object-contain object-center py-2 md:h-36 lg:h-48"
                            src={product.image}
                            alt="blog"
                          />
                          <div className="p-6">
                            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                              {product.category}
                            </h2>
                            <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                              {`${product.title.substring(0, 20)}...`}
                            </h1>
                            <p className="mb-3 leading-relaxed">
                              {`${product.description.substring(0, 70)}...`}
                            </p>
                            <div className="flex flex-wrap items-center justify-between">
                              Price :{product.price}
                              <button
                                class="inline-flex rounded border-0 bg-red-400 px-2 py-2 text-lg text-white hover:bg-red-600 focus:outline-none"
                                onClick={() => {
                                  deleteProduct(product);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Buy Now Full Price : {totalPrice}
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
