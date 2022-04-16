import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Store } from "../context/Store";
import Nav from "../components/Nav";
import Menu from "../components/Menu";

const Product = () => {
  const { state } = useContext(Store);
  const { products } = state;
  const { id } = useParams();
  const paramsId = parseInt(id);
  const navigate = useNavigate();
  console.log(paramsId);

  const product = products.find((product) => product.id === paramsId);

  useEffect(() => {
    if (!product) {
      navigate("/shop");
    }
  }, [product, navigate]);

  if (!product) {
    navigate("/shop");
    return (
      <div>
        <p onClick={() => navigate("/shop")}>Invalid link</p>
      </div>
    );
  }

  return (
    <div className="bg-dark-background min-h-screen">
      <Nav />
      <Menu />
      <div className="text-white flex flex-wrap w-full justify-around gap-4 divide-x-2 divide-gray-100">
        <div className="flex-1 bg-gray-900 basis-80 h-64"></div>
        <div className="flex-1 bg-indigo-900 basis-80 h-64 p-4">
          <h1 className="font-bold text-2xl mb-2">{product.name}</h1>
          <p className="mb-2 text-sm">{product.description}</p>
          <p className="font-bold">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
