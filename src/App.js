import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Detail from "./components/Detail";
import Form from "./components/Form";
import Home from "./components/Home";
import data from "./util/dummy-data";

const App = () => {
  const [info] = useState(data());
  return (
    <div className="App">
      <nav className="bg-gray-400 flex justify-between p-5">
        <Link to="">
          <h1>Navbar</h1>
        </Link>
        <ul className="flex gap-6">
          {info.map((data) => (
            <div key={data.id}>
              <Link to={`/${data.name}`}>
                <h5>{data.name}</h5>
              </Link>
            </div>
          ))}
          <Link to="/form">
            <h5>form</h5>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path=":id" element={<Detail info={info} />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
