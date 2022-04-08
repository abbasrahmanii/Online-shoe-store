import React from "react";
import data from "../util/dummy-data";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { pageAnim, imageAnim, descAnim } from "./animation";

const Home = () => {
  const citiesInfo = data();

  return (
    <HomeStyles variants={pageAnim} initial="hidden" animate="show" exit="exit">
      {citiesInfo.map((data) => (
        <City key={data.id}>
          <Hide>
            <Image
              variants={imageAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <img src={data.images[0]} alt={data.name} />
            </Image>
          </Hide>
          <Hide>
            <Desc variants={descAnim} initial="hidden" animate="show">
              <h1>{data.name}</h1>
              <h3>{data.country}</h3>
              <p>{data.desc}</p>
              <Link to={data.url}>Read More ...</Link>
            </Desc>
          </Hide>
        </City>
      ))}
    </HomeStyles>
  );
};

const HomeStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #29212e;
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  z-index: 1;
`;
const City = styled.div`
  width: 100%;
  min-height: 20rem;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  padding: 1rem 2rem;
  margin: 2rem 0;
`;

const Image = styled(motion.div)`
  min-width: 40rem;
  height: 25rem;
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled(motion.div)`
  flex: 1;
  margin-left: 3rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #eaeaea;
    font-family: "Caveat", cursive;
    padding-right: 4rem;
  }
  h3 {
    color: #fff;
    font-size: 1.4rem;
  }
  p {
    color: #bbb;
    margin: 3rem 0;
  }
  a {
    color: #fff;
    border: 1px solid #fff;
    padding: 0.5rem 1.3rem;
    transition: all 0.4s ease-out;
    &:hover {
      letter-spacing: 0.15rem;
      padding: 0.5rem 0.6rem;
      border: 1px solid transparent;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
  flex: 1;
`;

export default Home;
