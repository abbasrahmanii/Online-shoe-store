import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ info }) => {
  return (
    <NavStyles className="bg-gray-400 flex justify-between p-5">
      <Link to="">
        <h1>Home</h1>
      </Link>
      <ul className="flex gap-6">
        {info.map((data) => (
          <div key={data.id}>
            <Link to={data.url}>
              <h5>{data.name}</h5>
            </Link>
          </div>
        ))}
        <Link to="/form">
          <h5>form</h5>
        </Link>
      </ul>
    </NavStyles>
  );
};

const NavStyles = styled.div`
  z-index: 100;
`;

export default Nav;
