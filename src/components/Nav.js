import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Store } from "../context/Store";

const Nav = () => {
  const { state, dispatch } = useContext(Store);
  const { cityData } = state;
  return (
    <NavStyles className="bg-indigo-900 flex justify-between p-5 sticky top-0 left-0 shadow-lg px-8">
      <h5
        className="text-white cursor-pointer"
        onClick={() => dispatch({ type: "MENU" })}
      >
        Menu
      </h5>
      <ul className="flex gap-6">
        <li>
          <Link to="/">
            <h1 className="text-white">Home</h1>
          </Link>
        </li>
        {cityData.map((data) => (
          <li key={data.id}>
            <Link to={data.url}>
              <h5 className="text-white">{data.name}</h5>
            </Link>
          </li>
        ))}
        <li>
          <Link to="/form">
            <h1 className="text-white">Form</h1>
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
};

const NavStyles = styled.div`
  z-index: 100;
`;

export default Nav;
