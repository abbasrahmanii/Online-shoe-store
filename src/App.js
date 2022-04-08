import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import City from "./components/City";
import Form from "./components/Form";
import Home from "./components/Home";
import data from "./util/dummy-data";
import Nav from "./components/Nav";

const App = () => {
  const [info] = useState(data());
  return (
    <div className="min-h-screen">
      <Nav info={info} />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path=":id" element={<City info={info} />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
