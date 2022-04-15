import React from "react";

const Card = ({ product, onClick }) => {
  return (
    <div className="bg-gradient-to-b from-indigo-400 to-indigo-600 p-4 rounded-lg shadow-lg shadow-indigo-500/40">
      <div className="mb-4 rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover rounded-lg"
        />
      </div>
      <h1 className="text-white">{product.name}</h1>
      <p className="text-white">{product.price}</p>
      <button
        className="block w-full bg-rose-300 p-1 mt-3 rounded-md text-sm shadow-md hover:shadow-rose-200/40 duration-300 transition-all"
        onClick={onClick}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
