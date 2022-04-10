import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../context/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const { state, dispatch } = useContext(Store);
  const { cityData, MenuStatus } = state;

  const menuStyle = {
    zIndex: 100,
    left: MenuStatus ? 0 : -240,
    transform: MenuStatus ? "skew(0deg, 0deg)" : "skew(0deg, 15deg)",
    transition: "all 0.5s ease-out",
  };

  return (
    <div
      className="w-52 bg-slate-900 fixed left-0 h-screen p-8 top-0 shadow-lg shadow-slate-400"
      style={menuStyle}
      onClickCapture={() => dispatch("MENU")}
    >
      <ul>
        <li
          className="text-slate-100 mb-6 text-lg cursor-pointer"
          onClick={() => dispatch({ type: "MENU" })}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </li>
        <li className="text-slate-100 mb-6 text-lg">
          <Link to="/" onClick={() => dispatch({ type: "MENU" })}>
            <h1 className="text-white">Home</h1>
          </Link>
        </li>
        {cityData.map((data) => (
          <li className="text-slate-100 mb-6 text-lg" key={data.id}>
            <Link to={data.url} onClick={() => dispatch({ type: "MENU" })}>
              {data.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/form" onClick={() => dispatch({ type: "MENU" })}>
            <h1 className="text-slate-100 mb-6 text-lg">Form</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
