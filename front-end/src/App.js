import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";
import CenterCard from "./Center/CenterCard";
import CenterList from "./Center/CenterList/CenterList";
import Edit from "./Center/CenterList/Edit";
import AccountList from "./Account/AccountList";
import TeacherList from "./Teacher/TeacherList/TeacherList";
import Payment from "./Paynemt/Payment";
import NotFound from "./UI/NotFound";
import Center from "./Center/Center";
import AuthContext from "./Context/auth";
import {
  HOME_PAGE,
  LOGIN,
  NOT_FOUND_PAGE,
  PRODUCT_PAGE,
  TEACHER_PAGE,
  PAYMENT_PAGE,
  CENTER_UPDATE_PAGE,
} from "./constant";
import RequireAuth from "./UI/setting/RequireAuth";
import axios, {addJwt} from "./util/http";
function App() {
  // const authCtx = useContext(AuthContext);
  // console.log({authCtx: authCtx});
  // const data = localStorage.getItem("auth");
  // console.log(data);
  // const auth = useContext(AuthContext);
  // console.log(auth);
  const [checkingAuthUser, setCheckingAuthUser] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCheckingAuthUser(true);
      return;
    }
    axios
      .get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
      },
      })
      .then((response) => {
        setAuthUser(response.data);
        addJwt(token);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCheckingAuthUser(true);
      });
  }, []);
  
  if (!checkingAuthUser) {
    return (
      <div style={{ textAlign: "center" }}>Checking sign-in user status</div>
    );
  }
  
  return (
    <div className="App">
      <AuthContext.Provider value={{ user: authUser, setUser: setAuthUser }}>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          {/* <Route element={<PrivateRoute token={token}/>}>
        </Route> */}
          <Route
            path={HOME_PAGE}
            element={
              <RequireAuth mode="fallback">
                <CenterList />
              </RequireAuth>
            }
          />
          <Route
            path={PRODUCT_PAGE}
            element={
              <RequireAuth>
                <AccountList />
              </RequireAuth>
            }
          />
          <Route
            path={TEACHER_PAGE}
            element={
              <RequireAuth>
                <TeacherList />
              </RequireAuth>
            }
          />
          <Route
            path={PAYMENT_PAGE}
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          />
          <Route
            path={CENTER_UPDATE_PAGE}
            element={
              <RequireAuth>
                <Center />
              </RequireAuth>
            }
          />
          <Route path={NOT_FOUND_PAGE} element={<NotFound />} />

          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
