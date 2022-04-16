import paris1 from "../images/pexels-ashley-fontana-705774.jpg";
import paris2 from "../images/pexels-chait-goli-1796725.jpg";
import paris3 from "../images/pexels-eugene-dorosh-739407.jpg";

import venice1 from "../images/pexels-chait-goli-1796736.jpg";
import venice2 from "../images/pexels-frans-van-heerden-847366.jpg";
import venice3 from "../images/pexels-hitesh-choudhary-1144265.jpg";

import london1 from "../images/pexels-pixabay-88514.jpg";
import london2 from "../images/pexels-miklos-magyar-2561281.jpg";
import london3 from "../images/pexels-john-smith-726484.jpg";

import asset46 from "../images/asset 46.jpeg";
import asset48 from "../images/asset 48.jpeg";
import asset51 from "../images/asset 51.jpeg";
import asset52 from "../images/asset 52.jpeg";
import asset53 from "../images/asset 53.jpeg";
import asset54 from "../images/asset 54.jpeg";

import shoe1 from "../images/42-426949_nike-running-shoes-png-nike-sport-shoes-png-removebg-preview.png";
import shoe2 from "../images/158-1583031_transparent-kobe-png-nike-shoes-basketball-2019-png-removebg-preview.png";
import shoe3 from "../images/244-2441957_nike-zoom-freak-1-hd-png-download-removebg-preview.png";
import shoe4 from "../images/Red-Nike-shoes-premium-vector-PNG.png";
import shoe5 from "../images/Nike-Half-boot-with-transparent-PNG.png";
import shoe6 from "../images/Black-blue-nike-shoes-on-transparent-background-PNG.png";

const DUMMY_DATA = () => {
  return {
    cities: [
      {
        id: 1,
        name: "Paris",
        country: "France",
        images: [paris1, paris2, paris3],
        url: "/paris",
        desc: "Veniam reprehenderit proident commodo eiusmod proident sit ea minim duis non. Deserunt et pariatur esse. anim proident ullamco est id culpa duis. Iruream culpa cillum ullamco. Enim ipsum officia amet laboris Lorem veniam nisi occaecat. Enim ipsum officia amet laboris Lorem veniam nisi occaecat.",
        color: "cyan",
      },
      {
        id: 2,
        name: "Venice",
        country: "Italy",
        images: [venice1, venice2, venice3],
        url: "/venice",
        desc: "Veniam reprehenderit proident commodo eiusmod proident sit ea minim duis non. Deserunt et pariatur esse. anim proident ullamco est id culpa duis. Iruream culpa cillum ullamco. Enim ipsum officia amet laboris Lorem veniam nisi occaecat. Enim ipsum officia amet laboris Lorem veniam nisi occaecat.",
        color: "indigo",
      },
      {
        id: 3,
        name: "London",
        country: "England",
        images: [london1, london2, london3],
        url: "/london",
        desc: "Veniam reprehenderit proident commodo eiusmod proident sit ea minim duis non. Deserunt et pariatur esse. anim proident ullamco est id culpa duis. Iruream culpa cillum ullamco. Enim ipsum officia amet laboris Lorem veniam nisi occaecat. Enim ipsum officia amet laboris Lorem veniam nisi occaecat.",
        color: "rose",
      },
    ],
    products: [
      {
        id: 1,
        name: "product #1",
        description: "Ad quis labore enim eiusmod esse do quis ad.",
        price: "$ 129.98",
        numInStock: 4,
        delivery: 11.5,
        image: asset46,
      },
      {
        id: 2,
        name: "product #2",
        description: "Ad quis labore enim eiusmod esse do quis ad.",
        price: "$ 23.98",
        numInStock: 8,
        delivery: 11.5,
        image: asset48,
      },
      {
        id: 3,
        name: "product #3",
        description: "Ad quis labore enim eiusmod esse do quis ad.",
        price: "$ 56.98",
        numInStock: 11,
        delivery: 11.5,
        image: asset51,
      },
      {
        id: 4,
        name: "product #4",
        description: "Ad quis labore enim eiusmod esse do quis ad.",
        price: "$ 73.98",
        numInStock: 9,
        delivery: 11.5,
        image: asset52,
      },
      {
        id: 5,
        name: "product #5",
        description: "Ad quis labore enim eiusmod esse do quis ad.",
        price: "$ 13.98",
        numInStock: 4,
        delivery: 11.5,
        image: asset53,
      },
      {
        id: 6,
        name: "product #6",
        description: "Ad quis labore enim eiusmod esse do quis ad.",
        price: "$ 27.98",
        numInStock: 10,
        delivery: 11.5,
        image: asset54,
      },
    ],
    shoes: [
      {
        id: 1,
        name: "shoe #1",
        image: shoe1,
        brand: "Nike",
        sizes: ["7", "8", "9", "10"],
        colors: ["yellow", "red", "blue"],
        cover: "red",
      },
      {
        id: 2,
        name: "shoe #2",
        image: shoe2,
        brand: "Nike",
        sizes: ["7", "8", "9", "10"],
        colors: ["yellow", "red", "blue"],
        cover: "purple",
      },
      {
        id: 5,
        name: "shoe #5",
        image: shoe5,
        brand: "Nike",
        sizes: ["7", "8", "9", "10"],
        colors: ["yellow", "red", "blue"],
        cover: "green",
      },
      {
        id: 4,
        name: "shoe #4",
        image: shoe4,
        brand: "Nike",
        sizes: ["7", "8", "9", "10"],
        colors: ["yellow", "red", "blue"],
        cover: "green",
      },
      {
        id: 6,
        name: "shoe #6",
        image: shoe6,
        brand: "Nike",
        sizes: ["7", "8", "9", "10"],
        colors: ["green", "red", "yellow"],
        cover: "orange",
      },
      {
        id: 3,
        name: "shoe #3",
        image: shoe3,
        brand: "Nike",
        sizes: ["7", "8", "9", "10"],
        colors: ["cyan", "red", "sky"],
        cover: "blue",
      },
    ],
  };
};

export default DUMMY_DATA;
