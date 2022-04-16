import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Sign = () => {
  const location = useLocation();
  const { name, pass } = queryString.parse(location.search);
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Pass: {pass}</h1>
    </div>
  );
};

export default Sign;
