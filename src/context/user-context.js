import React, { useReducer, createContext } from "react";
export const UserContext = createContext();

const initialState = {
  usersList: [],
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        usersList: action.payload,
        loading: false
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
