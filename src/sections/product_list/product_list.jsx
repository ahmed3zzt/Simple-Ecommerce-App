import React, { useEffect, useState } from "react";
import Product from "../../components/product";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getAllProducts = () => {
    fetch("https://gray-attractive-camel.cyclic.app/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const productsData = products.map((product) => {
    return <Product product={product} key={product.id} />;
  });
  return (
    <div className="overflow-hidden">
      {products.length === 0 ? (
        <section className="dark:bg-gray-900 bg-white">
          <div className="container mx-auto animate-pulse px-6 py-10">
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:grid-cols-4 xl:gap-12">
              <div className="w-full ">
                <div className="dark:bg-gray-600 h-64 w-full rounded-lg bg-gray-300"></div>

                <h1 className="dark:bg-gray-700 mt-4 h-2 w-56 rounded-lg bg-gray-200"></h1>
                <p className="dark:bg-gray-700 mt-4 h-2 w-24 rounded-lg bg-gray-200"></p>
              </div>

              <div className="w-full ">
                <div className="dark:bg-gray-600 h-64 w-full rounded-lg bg-gray-300"></div>

                <h1 className="dark:bg-gray-700 mt-4 h-2 w-56 rounded-lg bg-gray-200"></h1>
                <p className="dark:bg-gray-700 mt-4 h-2 w-24 rounded-lg bg-gray-200"></p>
              </div>

              <div className="w-full ">
                <div className="dark:bg-gray-600 h-64 w-full rounded-lg bg-gray-300"></div>

                <h1 className="dark:bg-gray-700 mt-4 h-2 w-56 rounded-lg bg-gray-200"></h1>
                <p className="dark:bg-gray-700 mt-4 h-2 w-24 rounded-lg bg-gray-200"></p>
              </div>

              <div className="w-full ">
                <div className="dark:bg-gray-600 h-64 w-full rounded-lg bg-gray-300"></div>

                <h1 className="dark:bg-gray-700 mt-4 h-2 w-56 rounded-lg bg-gray-200"></h1>
                <p className="dark:bg-gray-700 mt-4 h-2 w-24 rounded-lg bg-gray-200"></p>
              </div>

              <div className="w-full ">
                <div className="dark:bg-gray-600 h-64 w-full rounded-lg bg-gray-300"></div>

                <h1 className="dark:bg-gray-700 mt-4 h-2 w-56 rounded-lg bg-gray-200"></h1>
                <p className="dark:bg-gray-700 mt-4 h-2 w-24 rounded-lg bg-gray-200"></p>
              </div>

              <div className="w-full ">
                <div className="dark:bg-gray-600 h-64 w-full rounded-lg bg-gray-300"></div>

                <h1 className="dark:bg-gray-700 mt-4 h-2 w-56 rounded-lg bg-gray-200"></h1>
                <p className="dark:bg-gray-700 mt-4 h-2 w-24 rounded-lg bg-gray-200"></p>
              </div>

              <div className="w-full ">
                <div className="dark:bg-gray-600 h-64 w-full rounded-lg bg-gray-300"></div>

                <h1 className="dark:bg-gray-700 mt-4 h-2 w-56 rounded-lg bg-gray-200"></h1>
                <p className="dark:bg-gray-700 mt-4 h-2 w-24 rounded-lg bg-gray-200"></p>
              </div>

              <div className="w-full ">
                <div className="dark:bg-gray-600 h-64 w-full rounded-lg bg-gray-300"></div>

                <h1 className="dark:bg-gray-700 mt-4 h-2 w-56 rounded-lg bg-gray-200"></h1>
                <p className="dark:bg-gray-700 mt-4 h-2 w-24 rounded-lg bg-gray-200"></p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <div className="container mx-auto flex flex-wrap justify-start">
            {productsData}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
