import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Nav from "./Nav";

const initialState = {
  firstName: {
    value: "",
    isValid: false,
    error: "Enter Your First Name !",
  },
  lastName: {
    value: "",
    isValid: false,
    error: "Enter Your Last Name !",
  },
  password: {
    value: "",
    isValid: false,
    error: "Enter Your Password !",
  },
  isValid: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "ONCHANGE_INPUT":
      let isValid;
      if (action.payload.length !== 0) {
        isValid = true;
      } else {
        isValid = false;
      }
      return {
        ...state,
        [action.tag]: {
          ...state.firstName,
          value: action.payload,
          isValid,
        },
      };
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <Menu />
      <form
        className="form flex flex-col p-4 items-center bg-teal-800 h-screen"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
          navigate("/");
        }}
      >
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-white"
        >
          First Name
        </label>
        <input
          id="first-name"
          className="form-control bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
          type="text"
          value={state.firstName.value}
          onChange={(e) =>
            dispatch({
              type: "ONCHANGE_INPUT",
              tag: "firstName",
              payload: e.target.value,
            })
          }
        />
        {!state.firstName.isValid && (
          <p className="text-red-500">{state.firstName.error}</p>
        )}
        <label
          htmlFor="last-name"
          className="form-controlblock text-sm font-medium text-white"
        >
          Last Name
        </label>
        <input
          id="last-name"
          className="form-control bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
          type="text"
          value={state.lastName.value}
          onChange={(e) =>
            dispatch({
              type: "ONCHANGE_INPUT",
              tag: "lastName",
              payload: e.target.value,
            })
          }
        />
        {!state.lastName.isValid && (
          <p className="text-red-500">{state.lastName.error}</p>
        )}
        <label
          htmlFor="password"
          className="block text-sm font-medium text-white"
        >
          Password
        </label>
        <input
          id="password"
          className="form-control bg-purple-200 w-60 p-2 my-2 rounded-md outline-none"
          type="password"
          value={state.password.value}
          onChange={(e) =>
            dispatch({
              type: "ONCHANGE_INPUT",
              tag: "password",
              payload: e.target.value,
            })
          }
        />
        {!state.password.isValid && (
          <p className="text-red-500">{state.password.error}</p>
        )}
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
                state.password.isValid
              )
            }
          >
            Submit
          </button>
        </Link>
      </form>
    </>
  );
};

export default Form;
