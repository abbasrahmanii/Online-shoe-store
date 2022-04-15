import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Store } from "../context/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const { state, dispatch } = useContext(Store);
  const { cityData, menuStatus } = state;

  const { pathname } = useLocation();

  const menuStyle = {
    zIndex: 100,
    left: menuStatus ? 0 : "-110%",
    transform: menuStatus ? "skew(0deg, 0deg)" : "skew(0deg, 15deg)",
    transition: "all 0.5s ease-out",
  };

  const activeMenuStyle = {
    color: "#0fefff",
  };

  return (
    <div
      className="w-full bg-slate-900 fixed left-0 h-screen p-8 top-0 shadow-lg shadow-slate-400"
      style={menuStyle}
      onClickCapture={() => dispatch("MENU_TOGGLE")}
    >
      <ul className="divide-y divide-cyan-400 gap-6 flex flex-col">
        <li
          className="text-slate-100 text-lg cursor-pointer hover:text-rose-500"
          onClick={() => dispatch({ type: "MENU_TOGGLE" })}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </li>
        <li>
          <Link
            to="/"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1
              className="text-slate-100 text-lg"
              style={pathname === "/" ? activeMenuStyle : null}
            >
              Home
            </h1>
          </Link>
        </li>
        {cityData.map((data) => (
          <li key={data.id}>
            <Link
              to={data.url}
              onClick={() => dispatch({ type: "MENU_TOGGLE" })}
              className="w-full"
            >
              <h1
                className="text-slate-100 text-lg"
                style={pathname === data.url ? activeMenuStyle : null}
              >
                {data.name}
              </h1>
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/shop"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1
              className="text-slate-100"
              style={pathname === "/shop" ? activeMenuStyle : null}
            >
              Shop
            </h1>
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1
              className="text-slate-100"
              style={pathname === "/cart" ? activeMenuStyle : null}
            >
              Cart
            </h1>
          </Link>
        </li>
        <li>
          <Link
            to="/form"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1
              className="text-slate-100"
              style={pathname === "/form" ? activeMenuStyle : null}
            >
              Form
            </h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
