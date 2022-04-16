import React, { useContext } from "react";
import { Store } from "../context/Store";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnim } from "../components/animation";
import Nav from "../components/Nav";
import Menu from "../components/Menu";

const City = () => {
  const { state } = useContext(Store);
  const { cityData } = state;

  const { pathname } = useLocation();
  const currentInfo = cityData.find((data) => data.url === pathname);
  return (
    <Page className="min-h-screen">
      <Nav />
      <Menu />
      <DetailStyles
        variants={pageAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h1>{currentInfo.name}</h1>
        <h3 className="text-white font-sans mb-4 drop-shadow-lg">
          {currentInfo.country}
        </h3>
        <p className="mb-6 mx-10 text-center text-gray-200 ">
          {currentInfo.desc}
        </p>
        <div className="flex space-x-5 justify-between items-stretch flex-wrap p-6">
          <Images className="shadow-md shadow-indigo-500/50">
            <img src={currentInfo.images[0]} alt={currentInfo.images[0]} />
          </Images>
          <Images className="shadow-md shadow-indigo-500/50">
            <img src={currentInfo.images[1]} alt={currentInfo.images[1]} />
          </Images>
          <Images className="shadow-md shadow-indigo-500/50">
            <img src={currentInfo.images[2]} alt={currentInfo.images[2]} />
          </Images>
        </div>
      </DetailStyles>
    </Page>
  );
};

const Page = styled.div`
  background-color: #383b53;
`;

const DetailStyles = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #eaeaea;
    font-family: "Caveat", cursive;
  }
`;

const Images = styled.div`
  flex: 1;
  flex-basis: 20rem;
  /* max-width: 20rem; */
  /* padding: 1rem 2rem; */
  /* height: 30vh; */
  img {
    width: 100%;
    height: 100%;
  }
`;

export default City;
