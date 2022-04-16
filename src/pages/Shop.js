import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import { Store } from "../context/Store";

const Shop = () => {
  const { state, dispatch } = useContext(Store);
  const { products, cart } = state;

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
      <div>
        <h1 className="text-center p-5 text-2xl text-white">Shop</h1>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-rose-900 p-5 rounded-lg text-white shadow-lg shadow-rose-900/70">
            <p>
              Total Quantity: {cart && cart.reduce((a, c) => a + c.quantity, 0)}
            </p>
            <p>
              Total Price: ${" "}
              {cart
                .reduce((a, c) => a + c.price.split(" ")[1] * c.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex gap-10 justify-around flex-wrap mx-5 pb-10">
          {products.map((product) => (
            <Card
              product={product}
              onClick={() => addToCartHandler(product)}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
