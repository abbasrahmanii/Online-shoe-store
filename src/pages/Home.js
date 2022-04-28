import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Store } from "../context/Store";
import { pageAnim, imageAnim, descAnim } from "../components/animation";
import Nav from "../components/Nav";
import Menu from "../components/Menu";

const Home = () => {
  const { state } = useContext(Store);
  const { homeData } = state;

  return (
    <>
      <Nav />
      <Menu />
      <motion.div
        variants={pageAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex flex-col w-full bg-slate-900"
      >
        {homeData.map((data) => (
          <div key={data.id} className="w-full flex flex-wrap py-4 px-8 my-8">
            <motion.div
              variants={imageAnim}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex-1 basis-96 z-40"
            >
              <img
                src={data.poster}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={descAnim}
              initial="hidden"
              animate="show"
              className="flex-1 basis-96 mr-8 pr-4"
            >
              <motion.div className="overflow-hidden flex flex-col">
                <h1 className="text-center md:text-right text-4xl font-bold text-gray-300">
                  {data.name}
                </h1>
                <p className="text-center md:text-right text-gray-400 my-12">
                  {data.desc}
                </p>
                <Link
                  to={data.url}
                  className="rounded-tl-full rounded-b-full self-center md:self-start text-white py-2 px-6 border-2 border-white hover:border-transparent transition-all duration-300 ease-out hover:shadow-lg hover:text-lg"
                  style={{ backgroundColor: data.color }}
                >
                  خرید ...
                </Link>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Home;
