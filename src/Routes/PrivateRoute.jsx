import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const value = useContext(AuthContext);
  let { isAuth } = value.authState;

  useEffect(() => {
    if (!isAuth) return navigate("/login");
  }, []);
  return children;
};

export default PrivateRoute;
