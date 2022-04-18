import React from "react";

const Card = ({ product, onClick }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-gradient-to-b from-indigo-400 to-cyan-700">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-grey-darker text-base">{product.price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="block w-full bg-rose-300 p-1 mt-3 rounded-md text-sm shadow-md hover:shadow-rose-200/40 duration-300 transition-all"
          onClick={onClick}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Card;
