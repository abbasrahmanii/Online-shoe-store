import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Store } from "../context/Store";
import Nav from "../components/Nav";
import Menu from "../components/Menu";

const Cart = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const navigate = useNavigate();

  // const addToCartHandler = (product) => {
  //   const isInStock = products.find((p) => p.id === product.id);
  //   const existItem = cart.find((p) => p.id === product.id);
  //   if (
  //     isInStock.numInStock === 0 ||
  //     existItem?.quantity === isInStock.numInStock
  //   ) {
  //     alert("با عرض پوزش\nموجودی انبار کافی نیست!");
  //     return;
  //   }
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const date = new Date().toLocaleString();
  //   dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity, date } });
  // };

  // const deleteCartHandler = (product) => {
  //   const quantity = product.quantity - 1;
  //   dispatch({ type: "DELETE_CART", payload: { ...product, quantity } });
  // };
  const deleteAllHandler = (product) => {
    dispatch({ type: "DELETE_CART", payload: { ...product, quantity: 0 } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-background to-slate-700">
      <Nav />
      <Menu />
      <h1 className="text-white text-center m-4 text-2xl">سبد خرید</h1>
      {cart.length < 1 ? (
        <>
          <h3 className="text-white text-center m-2">سبد خالی خالی است!</h3>
          <h5
            className="text-cyan-300 hover:text-blue-300 text-center text-sm m-2 cursor-pointer"
            onClick={() => navigate("/shop")}
          >
            به فروشگاه بروید!
          </h5>
        </>
      ) : (
        // <div className="grid items-start w-full justify-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full md:gap-8 justify-items-center items-center">
          <div className="col-span-1 bg-rose-900 p-5 rounded-lg text-white shadow-lg shadow-rose-900/70">
            <p>
              تعداد محصولات : {cart && cart.reduce((a, c) => a + c.quantity, 0)}
            </p>
            <p>
              مجموع قیمت : ${" "}
              {cart
                .reduce((a, c) => a + c.price.split(" ")[1] * c.quantity, 0)
                .toFixed(2)}
            </p>
            <button
              className="mt-4 text-sm w-full bg-slate-100 rounded-md py-1 text-rose-900 hover:shadow-xl"
              onClick={() => navigate("/order")}
            >
              ادامه سفارش
            </button>
          </div>
          <div className="md:col-span-3 mt-5 md:mt-0 w-full px-3 overflow-x-auto">
            <table className="text-center table-fixed">
              <thead className=" bg-gradient-to-r from-slate-400 to-slate-300">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-600">شناسه</th>
                  <th className="px-6 py-2 text-xs text-gray-600">تصویر</th>
                  <th className="px-6 py-2 text-xs text-gray-600">نام</th>
                  <th className="px-6 py-2 text-xs text-gray-600">تعداد</th>
                  <th className="px-6 py-2 text-xs text-gray-600">اندازه</th>
                  <th className="px-6 py-2 text-xs text-gray-600">رنگ</th>
                  <th className="px-6 py-2 text-xs text-gray-600">قیمت کل</th>
                  <th className="px-6 py-2 text-xs text-gray-600">
                    زمان ثبت سفارش
                  </th>
                  <th className="px-6 py-2 text-xs text-gray-600">حذف</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y-2">
                {cart.map((product) => (
                  <tr key={product.id} className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 flex justify-center">
                      <Link to={`/shop/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12"
                        />
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">
                        {product.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {/* <FontAwesomeIcon
                      icon={faArrowDown}
                      className="cursor-pointer text-red-400 mx-2"
                      onClick={() => deleteCartHandler(product)}
                    />{" "} */}
                      {product.quantity}
                      {/* {" "}
                    <FontAwesomeIcon
                    icon={faArrowUp}
                    className="cursor-pointer text-green-400 mx-2"
                    onClick={() => addToCartHandler(product)}
                    /> */}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {product.size}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {product.color}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      ${" "}
                      {(product.quantity * product.price.split(" ")[1]).toFixed(
                        2
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {product.date}
                    </td>
                    <td
                      className="px-6 py-4 text-sm text-gray-500"
                      onClick={() => deleteAllHandler(product)}
                    >
                      <button className="px-4 py-1 text-sm text-white bg-red-400 rounded">
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
