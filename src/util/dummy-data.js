import poster1 from "../images/nike-poster1.jpg";
import poster2 from "../images/nike-poster2.jpg";
import poster3 from "../images/nike-poster3.jpg";

import asset46 from "../images/asset 46.jpeg";
import asset48 from "../images/asset 48.jpeg";
import asset51 from "../images/asset 51.jpeg";
import asset52 from "../images/asset 52.jpeg";
import asset53 from "../images/asset 53.jpeg";
import asset54 from "../images/asset 54.jpeg";

import shoe1 from "../images/42-426949_nike-running-shoes-png-nike-sport-shoes-png-removebg-preview.png";
import shoe2 from "../images/158-1583031_transparent-kobe-png-nike-shoes-basketball-2019-png-removebg-preview.png";
import shoe3 from "../images/Nike-Half-boot-with-transparent-PNG.png";
import shoe4 from "../images/Red-Nike-shoes-premium-vector-PNG.png";
import shoe5 from "../images/Black-blue-nike-shoes-on-transparent-background-PNG.png";
import shoe6 from "../images/244-2441957_nike-zoom-freak-1-hd-png-download-removebg-preview.png";

const DUMMY_DATA = () => {
  return {
    homeData: [
      {
        id: 1,
        name: "رسمی",
        url: "/shop?category=party",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ",
        color: "#008CFF",
        poster: poster1,
      },
      {
        id: 2,
        name: "روزمره",
        url: "/shop?category=lifestyle",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
        color: "#7a1537",
        poster: poster2,
      },
      {
        id: 3,
        name: "ورزشی",
        url: "/shop?category=sport",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در ",
        color: "#EF4DA0",
        poster: poster3,
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
        name: "کفش #1",
        image: shoe1,
        brand: "Nike",
        price: "$ 87.11",
        sizes: ["7", "8", "9", "10"],
        colors: ["lightGreen", "red", "yellow"],
        cover: "red",
        categories: ["ورزشی"],
      },
      {
        id: 2,
        name: "کفش #2",
        image: shoe2,
        brand: "Nike",
        price: "$ 66.99",
        sizes: ["7", "8", "9", "10"],
        colors: ["yellow", "black", "blue"],
        cover: "purple",
        categories: ["روزمره"],
      },
      {
        id: 3,
        name: "کفش #3",
        image: shoe3,
        brand: "Nike",
        price: "$ 132.50",
        sizes: ["7", "8", "9", "10"],
        colors: ["red", "gray", "yellow"],
        cover: "green",
        categories: ["روزمره", "رسمی"],
      },
      {
        id: 4,
        name: "کفش #4",
        image: shoe4,
        brand: "Nike",
        price: "$ 90.00",
        sizes: ["7", "8", "9", "10"],
        colors: ["yellow", "red", "blue"],
        cover: "green",
        categories: ["روزمره", "ورزشی"],
      },
      {
        id: 5,
        name: "کفش #5",
        image: shoe5,
        brand: "Nike",
        price: "$ 54.98",
        sizes: ["7", "8", "9", "10"],
        colors: ["blue", "white", "cyan"],
        cover: "orange",
        categories: ["ورزشی", "رسمی"],
      },
      {
        id: 6,
        name: "کفش #6",
        image: shoe6,
        brand: "Nike",
        price: "$ 94.30",
        sizes: ["7", "8", "9", "10"],
        colors: ["cyan", "red", "white"],
        cover: "blue",
        categories: ["ورزشی"],
      },
    ],
  };
};

export default DUMMY_DATA;
