import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { StoreProvider } from "./context/Store";
import { GlobalStyles } from "./util/GlobalStyles";

import City from "./pages/City";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Order from "./pages/Order";

const App = () => {
  return (
    <div className="h-screen overflow-x-hidden font-roboto">
      <StoreProvider>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path=":id" element={<City />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="form" element={<Form />} />
            <Route path="form/sign" element={<Sign />} />
          </Routes>
        </AnimatePresence>
      </StoreProvider>
    </div>
  );
};

export default App;
