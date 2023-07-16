import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProduct from "./sections/single_product/product";
import Navbar from "./components/Header";
import { RecoilRoot } from "recoil";
import Cart from "./components/cart";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exect Component={App} />
          <Route path="/products/:id" exect Component={SingleProduct} />
          <Route path="/cart" exect Component={Cart} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
