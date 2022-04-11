import React, { createContext, useReducer } from "react";
import data from "../util/dummy-data";

export const Store = createContext();

const initialState = {
  MenuStatus: false,
  page: "Home",
  cityData: data(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MENU":
      return {
        ...state,
        MenuStatus: !state.MenuStatus,
      };
    case "PAGE_TOGGLE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
