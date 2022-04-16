import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import { Store } from "../context/Store";

const Product = () => {
  const { state, dispatch } = useContext(Store);
  const { products, cart } = state;
  const { id } = useParams();
  const paramsId = parseInt(id);
  const navigate = useNavigate();

  const product = products.find((product) => product.id === paramsId);

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
      <div className="text-white flex flex-wrap w-full justify-around gap-4">
        <div className="flex-1 bg-red-400 basis-80 h-64"></div>
        <div className="flex-1 bg-blue-400 basis-80 h-64">
          <h1>{product.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
