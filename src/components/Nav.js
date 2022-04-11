import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Store } from "../context/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { state, dispatch } = useContext(Store);
  const { cityData, page } = state;
  return (
    <NavStyles className="bg-indigo-900 flex justify-between p-5 sticky top-0 left-0 shadow-lg px-8">
      <FontAwesomeIcon
        icon={faBars}
        color="white"
        className="cursor-pointer md:hidden"
        onClick={() => dispatch({ type: "MENU" })}
      />
      <h1 className="cursor-pointer block text-white text-md">Logo</h1>
      <ul className="gap-6 hidden md:flex">
        <li>
          <Link
            to="/"
            onClick={() => dispatch({ type: "PAGE_TOGGLE", payload: "Home" })}
          >
            <h1 className="text-white">Home</h1>
          </Link>
          {page === "Home" && (
            <div className="text-white border-b-2 border-b-rose-500 w-full" />
          )}
        </li>
        {cityData.map((data) => (
          <li key={data.id}>
            <Link
              to={data.url}
              onClick={() =>
                dispatch({ type: "PAGE_TOGGLE", payload: data.name })
              }
            >
              <h5 className="text-white">{data.name}</h5>
            </Link>
            {page === data.name && (
              <div className="text-white border-b-2 border-b-rose-500 w-full" />
            )}
          </li>
        ))}
        <li>
          <Link
            to="/form"
            onClick={() => dispatch({ type: "PAGE_TOGGLE", payload: "Form" })}
          >
            <h1 className="text-white">Form</h1>
          </Link>
          {page === "Form" && (
            <div className="text-white border-b-2 border-b-rose-500 w-full" />
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
