import React, { useContext } from "react";
import Card from "../components/Card";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import { Store } from "../context/Store";

const Shop = () => {
  const { state, dispatch } = useContext(Store);
  const { products, cart } = state;

  console.log(cart);

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
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
  };

  const deleteCartHandler = (product) => {
    const quantity = product.quantity - 1;
    dispatch({ type: "DELETE_CART", payload: { ...product, quantity } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-background to-indigo-900">
      <Nav />
      <Menu />
      <div>
        <h1 className="text-center p-5 text-2xl text-white">Shop</h1>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-rose-900 p-5 rounded-lg text-white  shadow-lg shadow-rose-900/70">
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
        <div className="flex gap-10 justify-around flex-wrap mx-5">
          {products.map((product) => (
            <Card
              product={product}
              onClick={() => addToCartHandler(product)}
              key={product.id}
            />
          ))}
        </div>
        <div className="flex gap-3 justify-around flex-wrap mt-3">
          <h1 className="text-center p-5 text-2xl text-white">
            Cart:{" "}
            <span
              className="text-sm text-red-300 hover:text-rose-600 cursor-pointer"
              onClick={() => dispatch({ type: "DELETE_ALL_CART" })}
            >
              delete all
            </span>
          </h1>
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-cyan-500 p-4 rounded shadow-lg shadow-cyan-500/40"
              onClick={() => deleteCartHandler(product)}
            >
              <h1>{product.name}</h1>
              <p>quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
