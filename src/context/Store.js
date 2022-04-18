import React, { createContext, useReducer } from "react";
import Cookies from "js-cookie";
import data from "../util/dummy-data";

export const Store = createContext();

const initialState = {
  menuStatus: Cookies.get("menuStatus")
    ? JSON.parse(Cookies.get("menuStatus"))
    : false,
  cityData: data().cities,
  products: data().products,
  shoes: data().shoes,
  filteredShoes: Cookies.get("filteredShoes")
    ? JSON.parse(Cookies.get("filteredShoes"))
    : data().shoes,
  cart: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
  shoesCart: Cookies.get("shoesCart")
    ? JSON.parse(Cookies.get("shoesCart"))
    : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      Cookies.set("menuStatus", JSON.stringify(!state.menuStatus));
      return {
        ...state,
        menuStatus: !state.menuStatus,
      };
    case "ADD_TO_CART":
      const newProduct = action.payload;
      const cartItems =
        newProduct.quantity > 1
          ? state.cart.map((item) =>
              item.id === newProduct.id ? newProduct : item
            )
          : [...state.cart, newProduct];
      // Cookies.set("cart", JSON.stringify(cartItems));
      Cookies.set("cart", JSON.stringify(cartItems));
      return {
        ...state,
        cart: cartItems.sort((a, b) => a.id - b.id),
      };
    case "DELETE_CART":
      const selectedProduct = action.payload;
      const newCartItems =
        selectedProduct.quantity > 0
          ? state.cart.map((item) =>
              item.id === selectedProduct.id ? selectedProduct : item
            )
          : state.cart.filter((item) => item.id !== selectedProduct.id);
      Cookies.set("cart", JSON.stringify(newCartItems));
      return {
        ...state,
        cart: newCartItems,
      };
    case "DELETE_ALL_CART":
      Cookies.remove("cart");
      return {
        ...state,
        cart: [],
      };
    case "COLOR_FILTER":
      return {
        ...state,
        filteredShoes: action.payload,
      };
    case "SORT":
      const filtered = state.filteredShoes;
      if (action.payload === "") {
        filtered.sort((a, b) => a.id - b.id);
      } else if (action.payload === "top") {
        filtered.sort((a, b) => b.price.split(" ")[1] - a.price.split(" ")[1]);
      } else if (action.payload === "bottom") {
        filtered.sort((a, b) => a.price.split(" ")[1] - b.price.split(" ")[1]);
      }
      return {
        ...state,
        filteredShoes: filtered,
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
