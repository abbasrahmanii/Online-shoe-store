import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCartShopping,
  faCircleXmark,
  faHouse,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

import { Store } from "../context/Store";

const Menu = () => {
  const { state, dispatch } = useContext(Store);
  const { menuStatus } = state;
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
      <ul className="divide-y divide-cyan-400 space-y-3 flex flex-col">
        <li
          className="text-slate-100 text-lg cursor-pointer hover:text-rose-500"
          onClick={() => dispatch({ type: "MENU_TOGGLE" })}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </li>
        <li className="pt-3">
          <Link
            to="/"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full pt-3"
          >
            <h1
              className="text-slate-100 flex space-s-5 items-center"
              style={pathname === "/" ? activeMenuStyle : null}
            >
              <FontAwesomeIcon icon={faHouse} className="ml-2" />
              خانه
            </h1>
          </Link>
        </li>
        <li className="pt-3">
          <Link
            to="/shop"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1
              className="text-slate-100 flex space-s-5 items-center"
              style={pathname === "/shop" ? activeMenuStyle : null}
            >
              <FontAwesomeIcon icon={faStore} className="ml-2" />
              فروشگاه
            </h1>
          </Link>
        </li>
        <li className="pt-3">
          <Link
            to="/cart"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1
              className="text-slate-100 flex space-s-5 items-center"
              style={pathname === "/cart" ? activeMenuStyle : null}
            >
              <FontAwesomeIcon icon={faCartShopping} className="ml-2" />
              سبد خرید
            </h1>
          </Link>
        </li>
        <li className="pt-3">
          <Link
            to="/form"
            onClick={() => dispatch({ type: "MENU_TOGGLE" })}
            className="w-full"
          >
            <h1
              className="text-slate-100 flex space-s-5 items-center"
              style={pathname === "/form" ? activeMenuStyle : null}
            >
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="ml-2"
              />
              ثبت نام | ورود
            </h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
