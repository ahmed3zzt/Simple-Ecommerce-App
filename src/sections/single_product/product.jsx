import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/product";
import SingleProductPage from "../../components/single_product_page";
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://gray-attractive-camel.cyclic.app/products/${id}/`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  const productData = product;
  return (
    <div className="overflow-hidden">
      {Object.keys(product).length === 0 ? (
        <div className="flex min-h-[90vh] w-full items-center justify-center">
          <span className="loader"></span>
        </div>
      ) : (
        <SingleProductPage product={productData} />
      )}
    </div>
  );
};

export default SingleProduct;
