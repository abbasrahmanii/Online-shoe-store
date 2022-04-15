import React, { useContext } from "react";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import { Store } from "../context/Store";

const Cart = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const deleteCartHandler = (product) => {
    const quantity = product.quantity - 1;
    dispatch({ type: "DELETE_CART", payload: { ...product, quantity } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-background to-slate-700">
      <Nav />
      <Menu />
      <h1 className="text-white text-center m-4 text-2xl">Cart Page</h1>
      {cart.length < 1 ? (
        <h3 className="text-white text-center m-2">Cart is Empty!</h3>
      ) : (
        <div className="flex justify-around gap-3">
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-cyan-500 p-4 rounded shadow-lg shadow-cyan-500/40"
            >
              <h1>{product.name}</h1>
              <p>quantity: {product.quantity}</p>
              <p>
                total price: ${" "}
                {(product.quantity * product.price.split(" ")[1]).toFixed(2)}
              </p>
              <button
                className="bg-rose-500 w-full mt-3 rounded-full"
                onClick={() => deleteCartHandler(product)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
