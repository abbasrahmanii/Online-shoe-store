import React, { useContext, useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Store } from "../context/Store";

const Filter = () => {
  const { state, dispatch } = useContext(Store);
  const { shoes } = state;

  const [colorSelected, setColorSelected] = useState([]);
  const [categorySelected, setCategorySelected] = useState([]);

  let colors = [];
  for (let x of shoes) {
    for (let y of x.colors) {
      colors.push(y);
    }
  }

  const allColors = [...new Set(colors)];
  const allCategories = ["روزمره", "ورزشی", "رسمی"];

  const categoryHandler = useCallback(
    (e, InputName) => {
      if (e.target.checked) {
        setCategorySelected([...categorySelected, InputName]);
      } else {
        setCategorySelected(
          categorySelected.filter((name) => name !== InputName)
        );
      }
    },
    [categorySelected]
  );

  const colorHandler = useCallback(
    (color) => {
      const checkColor = colorSelected.find((col) => col === color);
      if (checkColor) {
        setColorSelected(colorSelected.filter((col) => col !== color));
      } else {
        setColorSelected([...colorSelected, color]);
      }
    },
    [colorSelected]
  );

  const clearFilter = (type) => {
    type === "category" ? setCategorySelected([]) : setColorSelected([]);
  };

  const sortHandler = (e) => {
    dispatch({ type: "SORT", payload: e.target.value });
  };

  useEffect(() => {
    const filteredColor = shoes.filter(
      (shoe) =>
        shoe.colors.some((element, index, array) =>
          colorSelected.find((p) => p === element)
        ) === true
    );

    const filteredCategory = shoes.filter(
      (shoe) =>
        shoe.categories.some((element, index, array) =>
          categorySelected.find((p) => p === element)
        ) === true
    );

    const filtered = filteredColor.filter(
      (shoe) =>
        shoe.categories.some((element, index, array) =>
          categorySelected.find((p) => p === element)
        ) === true
    );

    if (colorSelected.length === 0) {
      if (categorySelected.length === 0) {
        dispatch({ type: "COLOR_FILTER", payload: shoes });
      } else {
        dispatch({ type: "COLOR_FILTER", payload: filteredCategory });
      }
    } else {
      if (categorySelected.length === 0) {
        dispatch({ type: "COLOR_FILTER", payload: filteredColor });
      } else {
        dispatch({ type: "COLOR_FILTER", payload: filtered });
      }
    }
  }, [colorSelected, categorySelected, dispatch, shoes]);

  return (
    <div className="flex flex-col md:fixed right-0 md:w-1/4">
      <div className=" bg-cyan-400 flex flex-col rounded-xl mx-4 my-4 p-4">
        <h2 className="mb-1">دسته بندی :</h2>
        {allCategories.map((cat, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={cat}
              id={cat}
              checked={categorySelected.find((str) => str === cat)}
              className="ml-2 accent-emerald-700 hover:accent-emerald-800"
              onClick={(e) => categoryHandler(e, cat)}
            />
            <span>{cat}</span>
          </div>
        ))}
        <h2 className="mb-1 mt-3">رنگ :</h2>
        <div className="gap-2 flex flex-wrap">
          {allColors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 inline-block rounded-full cursor-pointer text-center"
              style={{
                backgroundColor: color,
                opacity: colorSelected.find((c) => c === color) ? 0.7 : 1,
              }}
              color={color}
              onClick={() => colorHandler(color)}
            >
              {colorSelected.find((c) => c === color) &&
                (color === "black" ? (
                  <FontAwesomeIcon icon={faCheck} color="#FFF" />
                ) : (
                  <FontAwesomeIcon icon={faCheck} />
                ))}
            </span>
          ))}
        </div>
        <div className="flex flex-col mt-3 items-start">
          {colorSelected.length > 0 || categorySelected.length > 0 ? (
            <p className="text-sm">فیلترهای فعال :</p>
          ) : (
            ""
          )}
          <div className="flex space-s-2 mt-1">
            {colorSelected.length > 0 && (
              <span className="py-1 px-2 border-2 border-slate-700 text-sm">
                رنگ ({colorSelected.length}){" "}
                <FontAwesomeIcon
                  icon={faXmark}
                  color="#555"
                  className="cursor-pointer"
                  onClick={() => clearFilter("color")}
                />
              </span>
            )}
            {categorySelected.length > 0 && (
              <span className="py-1 px-2 border-2 border-slate-700 text-sm">
                دسته بندی ({categorySelected.length}){" "}
                <FontAwesomeIcon
                  icon={faXmark}
                  color="#555"
                  className="cursor-pointer"
                  onClick={() => clearFilter("category")}
                />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="bg-lime-600 flex flex-col rounded-xl mx-4 my-4 p-4">
        <h1 className="mb-1">مرتب سازی :</h1>
        <select
          className="appearance-none rounded-md bg-slate-50 p-1 outline-none"
          name="sort"
          id="sort"
          onChange={(e) => sortHandler(e)}
        >
          <option value="" className="text-lime-900">
            پیشفرض
          </option>
          <option value="top" className="text-lime-900">
            گران‌ترین
          </option>
          <option value="bottom" className="text-lime-900">
            ارزان‌ترین
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
