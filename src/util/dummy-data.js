import poster1 from "../images/nike-poster1.jpg";
import poster2 from "../images/nike-poster2.jpg";
import poster3 from "../images/nike-poster3.jpg";

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
    shoes: [
      {
        id: 1,
        name: "کفش #1",
        image: shoe1,
        brand: "Nike",
        price: "124000",
        sizes: ["7", "8", "9", "10"],
        colors: ["lightGreen", "red", "yellow"],
        colorsFarsi: ["سبز روشن", "قرمز", "زرد"],
        cover: "#d01e1e",
        categories: ["ورزشی"],
        numInStock: 3,
      },
      {
        id: 2,
        name: "کفش #2",
        image: shoe2,
        brand: "Nike",
        price: "323000",
        sizes: ["7", "8", "9", "10"],
        colors: ["yellow", "black", "blue"],
        colorsFarsi: ["زرد", "مشکی", "آبی"],
        cover: "#9e18c0",
        categories: ["روزمره"],
        numInStock: 3,
      },
      {
        id: 3,
        name: "کفش #3",
        image: shoe3,
        brand: "Nike",
        price: "399000",
        sizes: ["7", "8", "9", "10"],
        colors: ["red", "gray", "yellow"],
        colorsFarsi: ["قرمز", "خاکستری", "زرد"],
        cover: "#128210",
        categories: ["روزمره", "رسمی"],
        numInStock: 3,
      },
      {
        id: 4,
        name: "کفش #4",
        image: shoe4,
        brand: "Nike",
        price: "298000",
        sizes: ["7", "8", "9", "10"],
        colors: ["yellow", "red", "blue"],
        colorsFarsi: ["زرد", "قرمز", "آبی"],
        cover: "#16A34A",
        categories: ["روزمره", "ورزشی"],
        numInStock: 3,
      },
      {
        id: 5,
        name: "کفش #5",
        image: shoe5,
        brand: "Nike",
        price: "227000",
        sizes: ["7", "8", "9", "10"],
        colors: ["blue", "white", "cyan"],
        colorsFarsi: ["آبی", "سفید", "فیروزه‌ای"],
        cover: "#f6972b",
        categories: ["ورزشی", "رسمی"],
        numInStock: 3,
      },
      {
        id: 6,
        name: "کفش #6",
        image: shoe6,
        brand: "Nike",
        price: "305000",
        sizes: ["7", "8", "9", "10"],
        colors: ["cyan", "red", "white"],
        colorsFarsi: ["فیروزه‌ای", "قرمز", "سفید"],
        cover: "#452edf",
        categories: ["ورزشی"],
        numInStock: 3,
      },
    ],
  };
};

export default DUMMY_DATA;
