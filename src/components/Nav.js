import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Store } from "../context/Store";
import { navBorder } from "./animation";
import logo from "../images/6-2-nike-logo-free-png-image.png";

const Nav = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const location = useLocation();

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-indigo-800 flex justify-between sticky top-0 left-0 shadow-lg px-8 items-center h-16 z-50">
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        color="#fff"
        className="cursor-pointer md:hidden"
        onClick={() => dispatch({ type: "MENU_TOGGLE" })}
      />
      <ul className="space-s-6 hidden md:flex">
        <li>
          <Link to="/">
            <h1 className="text-white py-1">خانه</h1>
          </Link>
          {location.pathname === "/" && (
            <motion.div
              variants={navBorder}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white border-b-2 border-b-rose-500"
            />
          )}
        </li>
        {/* {cityData.map((data) => (
          <li key={data.id}>
            <Link to={data.url}>
              <h5 className="text-white">{data.name}</h5>
            </Link>
            {location.pathname === data.url && (
              <motion.div
              variants={navBorder}
              initial="hidden"
              animate="show"
                exit="exit"
                className="text-white border-b-2 border-b-rose-500"
                />
            )}
            </li>
          ))} */}
        <li>
          <Link to="/shop">
            <h1 className="text-white py-1">فروشگاه</h1>
          </Link>
          {location.pathname === "/shop" && (
            <motion.div
              variants={navBorder}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white border-b-2 border-b-rose-500"
            />
          )}
        </li>
        <li>
          <Link to="/cart">
            <h1 className="text-white py-1 relative">
              سبد خرید
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 text-sky-200 text-sm rounded-full bg-orange-600 w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </h1>
          </Link>
          {location.pathname === "/cart" && (
            <motion.div
              variants={navBorder}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white border-b-2 border-b-rose-500"
            />
          )}
        </li>
        <li>
          <Link to="/form">
            <h1 className="text-white py-1">ثبت نام | ورود</h1>
          </Link>
          {location.pathname === "/form" && (
            <motion.div
              variants={navBorder}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white border-b-2 border-b-rose-500"
            />
          )}
        </li>
      </ul>
      <Link to="/">
        <img src={logo} alt="nike-logo" className="w-14 object-cover" />
      </Link>
    </div>
  );
};

// const NavStyles = styled.div`
//   z-index: 100;
// `;

export default Nav;
