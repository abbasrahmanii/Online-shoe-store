import React from "react";
import { useLocation } from "react-router-dom";

const Detail = ({ info }) => {
  const { pathname } = useLocation();
  const currentInfo = info.find((data) => `/${data.name}` === pathname);
  return (
    <div>
      <h1 className="bg-red-300">{currentInfo.id}</h1>
      <h1>{currentInfo.name}</h1>
      <h1>{currentInfo.age}</h1>
    </div>
  );
};

export default Detail;
