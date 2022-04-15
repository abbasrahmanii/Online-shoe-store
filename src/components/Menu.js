import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../context/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const { state, dispatch } = useContext(Store);
  const { cityData, menuStatus } = state;

  const menuStyle = {
    zIndex: 100,
    left: menuStatus ? 0 : "-110%",
    transform: menuStatus ? "skew(0deg, 0deg)" : "skew(0deg, 15deg)",
    transition: "all 0.5s ease-out",
  };

  return (
    <div
      className="w-full bg-slate-900 fixed left-0 h-screen p-8 top-0 shadow-lg shadow-slate-400"
      style={menuStyle}
      onClickCapture={() => dispatch("MENU_TOGGLE")}
    >
      <ul className="divide-y divide-cyan-400 gap-6 flex flex-col">
        <li
          className="text-slate-100 text-lg cursor-pointer"
          onClick={() => dispatch({ type: "MENU_TOGGLE" })}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </li>
        <li className="text-slate-100 text-lg">
          <Link
            to="/"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1 className="text-white">Home</h1>
          </Link>
        </li>
        {cityData.map((data) => (
          <li className="text-slate-100 text-lg" key={data.id}>
            <Link
              to={data.url}
              onClick={() => dispatch({ type: "MENU_TOGGLE" })}
              className="w-full"
            >
              <h1>{data.name}</h1>
            </Link>
          </li>
        ))}
        <li className="text-slate-100 text-lg">
          <Link
            to="/shop"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1>Shop</h1>
          </Link>
        </li>
        <li className="text-slate-100 text-lg">
          <Link
            to="/cart"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1>Cart</h1>
          </Link>
        </li>
        <li className="text-slate-100 text-lg">
          <Link
            to="/form"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1>Form</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
