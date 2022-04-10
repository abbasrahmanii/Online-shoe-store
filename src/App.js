import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { StoreProvider } from "./context/Store";
import { GlobalStyles } from "./util/GlobalStyles";

import City from "./components/City";
import Form from "./components/Form";
import Home from "./components/Home";
import Sign from "./components/Sign";

const App = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <StoreProvider>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path=":id" element={<City />} />
            <Route path="form" element={<Form />} />
            <Route path="form/sign" element={<Sign />} />
          </Routes>
        </AnimatePresence>
      </StoreProvider>
    </div>
  );
};

export default App;
