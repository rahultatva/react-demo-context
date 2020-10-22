import React, { useReducer, createContext } from "react";
import { UserContextProvider } from "./user-context";
export const RootContext = createContext();

const initialState = {
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error();
  }
};

export const RootContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RootContext.Provider value={[state, dispatch]}>
      <UserContextProvider>
        {props.children}
      </UserContextProvider>
    </RootContext.Provider>
  );
};
