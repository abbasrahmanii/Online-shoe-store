import React from "react";
import data from "../util/dummy-data";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const citiesInfo = data();

  const descAnim = {
    hidden: {
      x: -60,
      opacity: 0.5,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.75 },
    },
  };
  const imageAnim = {
    hidden: {
      scale: 1.5,
      opacity: 0.5,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.75 },
    },
  };

  return (
    <HomeStyles>
      <h1>Home</h1>
      {citiesInfo.map((data) => (
        <City key={data.id}>
          <Hide>
            <Image variants={imageAnim} initial="hidden" animate="show">
              <img src={data.images[0]} />
            </Image>
          </Hide>
          <Hide>
            <Desc variants={descAnim} initial="hidden" animate="show">
              <h1>{data.name}</h1>
              <h3>{data.country}</h3>
            </Desc>
          </Hide>
        </City>
      ))}
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #29212e;
  width: 100%;
  min-height: 100vh;
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
  min-width: 20rem;
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
    font-size: 2.3rem;
    font-weight: bold;
    color: #eaeaea;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Home;
