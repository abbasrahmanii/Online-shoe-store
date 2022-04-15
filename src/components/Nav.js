import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Store } from "../context/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { navBorder } from "./animation";

const Nav = () => {
  const { state, dispatch } = useContext(Store);
  const { cityData } = state;
  const location = useLocation();

  return (
    <NavStyles className="bg-gradient-to-r from-cyan-500 to-indigo-800 flex justify-between p-5 sticky top-0 left-0 shadow-lg px-8">
      <FontAwesomeIcon
        icon={faBars}
        color="white"
        className="cursor-pointer md:hidden"
        onClick={() => dispatch({ type: "MENU_TOGGLE" })}
      />
      <Link to="/">
        <h1 className="cursor-pointer block text-white md:text-indigo-900 text-md font-semibold">
          Logo
        </h1>
      </Link>
      <ul className="gap-6 hidden md:flex">
        <li>
          <Link to="/">
            <h1 className="text-white">Home</h1>
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
        {cityData.map((data) => (
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
        ))}
        <li>
          <Link to="/shop">
            <h1 className="text-white">Shop</h1>
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
            <h1 className="text-white">Cart</h1>
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
            <h1 className="text-white">Form</h1>
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
    </NavStyles>
  );
};

const NavStyles = styled.div`
  z-index: 100;
`;

export default Nav;
