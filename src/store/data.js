import React, { useReducer, useState } from "react";
import { Context } from "./Context";

const defaultState = {
  authToken: "",
};

function reducerActions(state, action) {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        authToken: action.payload,
      };

    case "LOGUT":
      return {
        ...state,
        authToken: "",
      };

    case "LOGUT":
      break;

    default:
      return defaultState;
  }
}

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducerActions, defaultState);
  const [token, setoken] = useState(false);

  function authenticate(token) {
    dispatch({ type: "AUTH", payload: token });
  }

  function logout() {
    dispatch({ type: "LOGUT" });
  }
  const value = {
    token: state.authToken,
    isAuthenticated: !!state.authToken,
    authenticate,
    logout,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}