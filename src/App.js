import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { StoreProvider } from "./context/Store";
import { GlobalStyles } from "./util/GlobalStyles";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShoeDetail from "./pages/ShoeDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Form from "./pages/Form";
import Sign from "./pages/Sign";

const App = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <StoreProvider>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/shoes/:id" element={<ShoeDetail />} />
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
