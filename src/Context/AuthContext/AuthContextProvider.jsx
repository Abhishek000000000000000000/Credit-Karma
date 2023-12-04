import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const initialState = {
  isAuth: false,
  userName: "",
  cart: [],
  count: 0,
};

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);
  const value = { authState, setAuthState };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
