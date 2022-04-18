import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../context/Store";

import Nav from "../components/Nav";
import Menu from "../components/Menu";
// import Card from "../components/Card";
import NewCard from "../components/NewCard";
import Filter from "../components/Filter";

const Shop = () => {
  const { state, dispatch } = useContext(Store);
  const { products, filteredShoes, cart } = state;
  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    const isInStock = products.find((p) => p.id === product.id);
    const existItem = cart.find((p) => p.id === product.id);
    if (
      isInStock.numInStock === 0 ||
      existItem?.quantity === isInStock.numInStock
    ) {
      alert("با عرض پوزش\nموجودی انبار کافی نیست!");
      return;
    }
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const date = new Date().toLocaleString();
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity, date } });
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-background to-indigo-900">
      <Nav />
      <Menu />
      <div className="w-full flex">
        <div className="flex flex-col items-center mb-6 w-1/5">
          <Filter />
        </div>
        {/* <div className="flex gap-10 justify-around flex-wrap mx-5 pb-10"> */}
        <div className="grid grid-cols-3 p-4 gap-6 place-items-center w-4/5">
          {/* {products.map((product) => (
            <Card
              product={product}
              onClick={() => addToCartHandler(product)}
              key={product.id}
            />
          ))} */}
          {filteredShoes.map((shoe) => (
            <NewCard
              shoe={shoe}
              onClick={() => addToCartHandler(shoe)}
              key={shoe.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
