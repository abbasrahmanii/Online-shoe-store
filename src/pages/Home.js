import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Store } from "../context/Store";
import { pageAnim, imageAnim, descAnim } from "../components/animation";
import Nav from "../components/Nav";
import Menu from "../components/Menu";

const Home = () => {
  const { state } = useContext(Store);
  const { cityData } = state;

  return (
    <>
      <Nav />
      <Menu />
      <HomeStyles
        variants={pageAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {cityData.map((data) => (
          <City key={data.id}>
            <Image
              variants={imageAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <img src={data.images[0]} alt={data.name} />
            </Image>
            <Desc variants={descAnim} initial="hidden" animate="show">
              <Hide>
                <h1>{data.name}</h1>
                <h3>{data.country}</h3>
                <p>{data.desc}</p>
                <Link
                  to={data.url}
                  className="bg-fuchsia-700 shadow-lg shadow-fuchsia-700/50 rounded-l-full rounded-t-full"
                >
                  Read More ...
                </Link>
              </Hide>
            </Desc>
          </City>
        ))}
      </HomeStyles>
    </>
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
  display: flex;
  /* align-items: stretch; */
  flex-wrap: wrap;
  padding: 1rem 2rem;
  margin: 2rem 0;
`;

const Image = styled(motion.div)`
  flex: 1;
  /* min-width: 35rem; */
  flex-basis: 25rem;
  /* height: 100%; */
  z-index: 50;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled(motion.div)`
  flex: 1;
  flex-basis: 25rem;
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
    display: inline;
    width: max-content;
    &:hover {
      letter-spacing: 0.15rem;
      padding: 0.5rem 0.6rem;
      border: 1px solid transparent;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export default Home;
