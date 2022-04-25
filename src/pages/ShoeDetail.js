import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../context/Store";

import Nav from "../components/Nav";
import Menu from "../components/Menu";

const ShoeDetail = () => {
  const { state, dispatch } = useContext(Store);
  const { shoes, cart } = state;
  const { id } = useParams();
  const paramsId = parseInt(id);
  const navigate = useNavigate();

  const shoe = shoes.find((shoe) => shoe.id === paramsId);

  const [shoeDetail, setShoeDetail] = useState([shoe.sizes[0], shoe.colors[0]]);

  const selectHandler = (e) => {
    if (e.target.name === "size") {
      setShoeDetail((prev) => [e.target.value, prev[1]]);
    } else if (e.target.name === "color") {
      setShoeDetail((prev) => [prev[0], e.target.value]);
    } else {
      return;
    }
  };

  const addToCartHandler = () => {
    const isInStock = shoes.find((p) => p.id === shoe.id);
    const existItem = cart.find((p) => p.id === shoe.id);
    if (
      isInStock.numInStock === 0 ||
      existItem?.quantity === isInStock.numInStock
    ) {
      alert("با عرض پوزش\nموجودی انبار کافی نیست!");
      return;
    }
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const date = new Date().toLocaleString();
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...shoe,
        quantity,
        date,
        size: shoeDetail[0],
        color: shoeDetail[1],
      },
    });
    navigate("/cart");
  };

  useEffect(() => {
    if (!shoe) {
      navigate("/shop");
    }
  }, [shoe, navigate]);

  if (!shoe) {
    navigate("/shop");
    return (
      <div>
        <p onClick={() => navigate("/shop")}>لینک نامعتبر است.</p>
      </div>
    );
  }

  return (
    <div className="bg-dark-background min-h-screen">
      <Nav />
      <Menu />
      <div className="text-white grid grid-cols-1 md:grid-cols-8 gap-4 w-full">
        <div className="md:col-span-3">
          <img
            src={shoe.image}
            alt={shoe.name}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="p-4 col-span-1 md:col-span-3 flex flex-col space-y-4 md:pr-10 items-center md:items-start">
          <h1 className="font-bold text-2xl">{shoe.name}</h1>
          <div className="flex space-s-4 items-center">
            <h3>اندازه :</h3>
            {shoe.sizes.map((size, index) => (
              <span
                key={index}
                className="text-sm bg-slate-300 w-7 h-7 flex items-center justify-center text-black rounded-full"
              >
                {size}
              </span>
            ))}
          </div>
          <div className="flex space-s-4 items-center">
            <h3> رنگ :</h3>
            {shoe.colors.map((color, index) => (
              <span
                key={index}
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
          <p className="">موجود در انبار : {shoe.numInStock} عدد</p>
          <p className="">قیمت : {shoe.price}</p>
        </div>
        <div className="p-4 col-span-1 md:col-span-2 flex flex-col space-y-5">
          <div className="flex md:flex-col items-center md:items-start justify-center space-s-8 md:space-s-0 md:space-y-5">
            <div className="flex space-s-4 items-center">
              <h1>اندازه :</h1>
              <select
                className="appearance-none rounded-md py-1 px-4 outline-none bg-slate-100 text-black"
                name="size"
                id="size"
                onChange={(e) => selectHandler(e)}
                value={shoeDetail[0]}
              >
                {shoe.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-s-4 items-center">
              <h1>رنگ :</h1>
              <select
                className="appearance-none rounded-md py-1 px-4 outline-none bg-slate-100 text-black"
                name="color"
                id="color"
                onChange={(e) => selectHandler(e)}
                value={shoeDetail[1]}
              >
                {shoe.colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="bg-lime-600 py-2 rounded-lg text-lime-50 shadow-lg shadow-lime-600/30"
            onClick={addToCartHandler}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
