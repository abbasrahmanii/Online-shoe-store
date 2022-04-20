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
  const { homeData } = state;

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
        {homeData.map((data) => (
          <City key={data.id}>
            <Image
              variants={imageAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <img src={data.poster} alt={data.name} />
            </Image>
            <Desc variants={descAnim} initial="hidden" animate="show">
              <Hide>
                <h1>{data.name}</h1>
                <p>{data.desc}</p>
                <Link
                  to={data.url}
                  className="rounded-l-full rounded-b-full"
                  style={{ backgroundColor: data.color }}
                >
                  خرید ...
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
  /* font-family: "Roboto", sans-serif; */
  z-index: 1;
`;
const City = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  margin: 2rem 0;
`;

const Image = styled(motion.div)`
  flex: 1;
  flex-basis: 25rem;
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
  margin-right: 2rem;
  padding-right: 1rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #eaeaea;
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
