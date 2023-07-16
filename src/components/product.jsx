import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <div className="p-4 md:w-2/4 lg:w-1/4">
      <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
        <img
          className="h-36 w-full object-contain object-center py-2 md:h-36 lg:h-48"
          src={props.product.image}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
            {props.product.category}
          </h2>
          <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
            {`${props.product.title.substring(0, 20)}...`}
          </h1>
          <p className="mb-3 leading-relaxed">
            {`${props.product.description.substring(0, 70)}...`}
          </p>
          <div className="flex flex-wrap items-center justify-between">
            <Link
              to={`/products/${props.product.id}`}
              className="inline-flex items-center rounded bg-indigo-300 p-2 text-indigo-900 transition-colors hover:bg-gray-100 md:mb-2 lg:mb-0"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
