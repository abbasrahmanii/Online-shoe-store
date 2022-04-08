// import React from "react";
import paris1 from "../images/pexels-ashley-fontana-705774.jpg";
import paris2 from "../images/pexels-chait-goli-1796725.jpg";
import paris3 from "../images/pexels-eugene-dorosh-739407.jpg";
import venice1 from "../images/pexels-chait-goli-1796736.jpg";
import venice2 from "../images/pexels-frans-van-heerden-847366.jpg";
import venice3 from "../images/pexels-hitesh-choudhary-1144265.jpg";
import london1 from "../images/pexels-pixabay-88514.jpg";
import london2 from "../images/pexels-miklos-magyar-2561281.jpg";
import london3 from "../images/pexels-john-smith-726484.jpg";

const DUMMY_DATA = () => {
  return [
    {
      id: 1,
      name: "Paris",
      country: "France",
      images: [paris1, paris2, paris3],
      url: "/paris",
      desc: "Veniam reprehenderit proident commodo eiusmod proident sit ea minim duis non. Deserunt et pariatur esse. anim proident ullamco est id culpa duis. Iruream culpa cillum ullamco. Enim ipsum officia amet laboris Lorem veniam nisi occaecat. Enim ipsum officia amet laboris Lorem veniam nisi occaecat.",
    },
    {
      id: 2,
      name: "Venice",
      country: "Italy",
      images: [venice1, venice2, venice3],
      url: "/venice",
      desc: "Veniam reprehenderit proident commodo eiusmod proident sit ea minim duis non. Deserunt et pariatur esse. anim proident ullamco est id culpa duis. Iruream culpa cillum ullamco. Enim ipsum officia amet laboris Lorem veniam nisi occaecat. Enim ipsum officia amet laboris Lorem veniam nisi occaecat.",
    },
    {
      id: 3,
      name: "London",
      country: "England",
      images: [london1, london2, london3],
      url: "/london",
      desc: "Veniam reprehenderit proident commodo eiusmod proident sit ea minim duis non. Deserunt et pariatur esse. anim proident ullamco est id culpa duis. Iruream culpa cillum ullamco. Enim ipsum officia amet laboris Lorem veniam nisi occaecat. Enim ipsum officia amet laboris Lorem veniam nisi occaecat.",
    },
  ];
};

export default DUMMY_DATA;
