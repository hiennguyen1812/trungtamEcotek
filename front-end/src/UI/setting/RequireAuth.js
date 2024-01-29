import { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import AuthContext from "../../Context/auth";
import { LOGIN } from "../../constant";
import Card from "../../components/Card";
import "./RequireAuth.css";

const RequireAuth = (props) => {
  const mode = props.mode || "navigate";
  const authCtx = useContext(AuthContext);
  if (!authCtx.user) {
    if (mode === "navigate") {
      return <Navigate to={LOGIN} />;
    }
    if (mode === "hidden") {
      return null;
    }
    if (mode === "fallback") {
      return (
        <div>
          <NavLink to={LOGIN} activeClassName="active-link">
            <Card className="container card_mode mt-5">
              This is private area. Login to see this
            </Card>
          </NavLink>
        </div>
      );
    }
  }
  return props.children;
};

export default RequireAuth;
