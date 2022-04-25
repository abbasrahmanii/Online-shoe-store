import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import Menu from "../components/Menu";

const initialState = {
  firstName: {
    value: "",
    isValid: false,
    error: "نام خود را وارد کنید",
  },
  lastName: {
    value: "",
    isValid: false,
    error: "نام خانوادگی خود را وارد کنید",
  },
  password: {
    value: "",
    isValid: false,
    error: "رمز عبور خود را وارد کنید",
  },
  confirmPassword: {
    value: "",
    isValid: false,
    error: "تأیید رمز عبور خود را وارد کنید",
  },
  isValid: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "ONCHANGE_INPUT":
      return {
        ...state,
        [action.tag]: action.changedValue,
      };
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const required = (e, tag) => {
    let isValid = e.target.value.length !== 0;
    console.log(state[tag]);
    console.log(e.target.value);
    dispatch({
      type: "ONCHANGE_INPUT",
      changedValue: { ...state[tag], value: e.target.value, isValid },
      tag,
    });
  };

  return (
    <div>
      <Nav />
      <Menu />
      <div
        className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-bl from-slate-900 to-indigo-900 md:divide-s-2 divide-y-2 divide-slate-600"
        style={{ minHeight: `calc(100vh - 4rem)` }}
      >
        <form
          className="form flex flex-col p-4 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <h1 className="text-2xl text-white mb-5">ثبت نام</h1>
          <div className="mb-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-white"
            >
              نام
            </label>
            <input
              id="first-name"
              className="bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
              type="text"
              required
              value={state.firstName.value}
              autoComplete="none"
              onChange={(e) => required(e, "firstName")}
            />
            {!state.firstName.isValid && (
              <p className="text-red-500 text-xs">{state.firstName.error}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-white"
            >
              نام خانوادگی
            </label>
            <input
              id="last-name"
              className=" bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
              type="text"
              required
              value={state.lastName.value}
              autoComplete="name"
              onChange={(e) => required(e, "lastName")}
            />
            {!state.lastName.isValid && (
              <p className="text-red-500 text-xs">{state.lastName.error}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              رمز عبور
            </label>
            <input
              id="password"
              className="form-control bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
              type="password"
              required
              value={state.password.value}
              autoComplete="current-password"
              onChange={(e) => required(e, "password")}
            />
            {!state.password.isValid && (
              <p className="text-red-500 text-xs">{state.password.error}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              تأیید رمز عبور
            </label>
            <input
              id="confirm-password"
              className="form-control bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
              type="confirmPassword"
              required
              value={state.confirmPassword.value}
              autoComplete="current-password"
              onChange={(e) => required(e, "confirmPassword")}
            />
            {!state.confirmPassword.isValid && (
              <p className="text-red-500 text-xs">
                {state.confirmPassword.error}
              </p>
            )}
          </div>
          <Link
            to={`/form/sign?name=${state.firstName.value}-${state.lastName.value}&pass=${state.password.value}`}
          >
            <button
              type="submit"
              className="btn bg-teal-200 p-2 rounded-md outline-none"
              disabled={
                !(
                  state.password.isValid &&
                  state.firstName.isValid &&
                  state.password.isValid &&
                  state.confirmPassword.isValid
                )
              }
            >
              ثبت نام
            </button>
          </Link>
        </form>
        <form
          className="form flex flex-col p-4 items-center "
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <h1 className="text-2xl text-white mb-5">ورود</h1>
          <div className="mb-3">
            <label
              htmlFor="first-name2"
              className="block text-sm font-medium text-white"
            >
              نام
            </label>
            <input
              id="first-name2"
              className="bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
              type="text"
              required
              autoComplete="none"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="last-name2"
              className="block text-sm font-medium text-white"
            >
              نام خانوادگی
            </label>
            <input
              id="last-name2"
              className=" bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
              type="text"
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password2"
              className="block text-sm font-medium text-white"
            >
              رمز عبور
            </label>
            <input
              id="password2"
              className="form-control bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>
          <Link
            to={`/form/sign?name=${state.firstName.value}-${state.lastName.value}&pass=${state.password.value}`}
          >
            <button
              type="submit"
              className="bg-teal-200 p-2 rounded-md outline-none"
            >
              ورود
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Form;
