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

  console.log(filteredShoes);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-background to-indigo-900">
      <Nav />
      <Menu />
      <div className="w-full flex space-s-8">
        <div className="flex flex-col items-center mb-6 w-1/5">
          <Filter />
        </div>
        {filteredShoes.length > 0 ? (
          <div className="grid grid-cols-3 p-4 gap-6 place-items-center w-4/5">
            {filteredShoes.map((shoe) => (
              <NewCard
                shoe={shoe}
                onClick={() => addToCartHandler(shoe)}
                key={shoe.id}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 w-full">
            <h1 className="text-white text-3xl text-center">محصولی یافت نشد</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
