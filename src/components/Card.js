import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = (props) => {
  const { shoe } = props;
  return (
    <>
      <CardStyles
        className={`card relative bg-sky-500 rounded-2xl overflow-hidden`}
        cover={shoe.cover}
      >
        <div className="imgBx">
          <img className="img" src={shoe.image} alt={shoe.name} />
        </div>
        <div className="contentBx">
          <h2>{shoe.name}</h2>
          <div className="size">
            <h3>اندازه :</h3>
            {shoe.sizes.map((size, index) => (
              <span
                key={index}
                className="num"
                style={{ backgroundColor: shoe.cover }}
              >
                {size}
              </span>
            ))}
          </div>
          <div className="color">
            <h3>رنگ بندی :</h3>
            {shoe.colors.map((color, index) => (
              <span key={index} style={{ backgroundColor: color }}></span>
            ))}
          </div>
          <div className="price">
            <h3>قیمت : </h3>
            <p>{shoe.price} تومان</p>
          </div>
          <Link to={`/shop/shoes/${shoe.id}`}>خرید</Link>
        </div>
      </CardStyles>
    </>
  );
};

const CardStyles = styled.div`
  /* width: 20rem; */
  width: 18rem;
  /* height: 450px; */
  height: 400px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* clip-path: circle(150px at 80% 20%); */
    clip-path: circle(120px at 80% 20%);
    /* background-color: #0a5cf3; */
    background-color: ${(props) => (props.cover ? props.cover : "white")};
    transition: 0.5s ease-in-out;
  }
  &:hover::before {
    /* clip-path: circle(300px at 80% -20%); */
    clip-path: circle(280px at 80% -20%);
  }
  &::after {
    content: "Nike";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12rem;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.1);
  }
  .imgBx {
    position: absolute;
    /* top: 50%; */
    top: 40%;
    transform: translateY(-50%);
    z-index: 2;
    width: 100%;
    height: 220px;
    transition: 0.5s;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 270px;
    }
  }
  &:hover {
    .imgBx {
      top: 0%;
      /* top: -10%; */
      transform: translateY(0%) rotate(-25deg);
    }
    .contentBx {
      /* height: 210px; */
      height: 175px;
      .size {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
      }
      .color {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.6s;
      }
      .price {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.7s;
      }
      a {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.8s;
      }
    }
  }
  .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 1;
    h2 {
      position: relative;
      font-weight: 600;
      letter-spacing: 1px;
      color: #fff;
    }
    .size,
    .color,
    .price {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 20px;
      transition: 0.5s;
      opacity: 0;
      visibility: hidden;
      h3 {
        color: #fff;
        font-weight: 300;
        font-size: 0.8rem;
        text-transform: uppercase;
        /* margin-right: 10px; */
      }

      span,
      p {
        cursor: default;
        width: 26px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 0.8rem;
        display: inline-block;
        color: #fff;
        /* background: #ffa600; */
        margin: 0 5px;
        transition: 0.5s;
        border-radius: 5px;
      }
    }
    .color {
      span {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0 5px;
        cursor: auto;
      }
    }
    .price {
      p {
        width: max-content;
      }
    }
    a {
      display: inline-block;
      padding: 4px 20px;
      background: #fff;
      border-radius: 4px;
      margin-top: 5px;
      text-decoration: none;
      font-weight: 600;
      color: #111;
      opacity: 0;
      transform: translateY(50px);
      transition: 0.5s;
    }
  }
`;

export default Card;
