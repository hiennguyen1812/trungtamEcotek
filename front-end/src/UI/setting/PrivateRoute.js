// PrivateRoute.js
import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Context/auth";

const PrivateRoute = (token) => {
  console.log({ token });
  if (token.token === "" || token.token === undefined) return <Navigate path="/login" />;
  else return <Outlet />;
};

export default PrivateRoute;
