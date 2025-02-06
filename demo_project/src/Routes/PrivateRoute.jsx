import { AuthContext } from "../contextapi/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const { isLogged } = auth;
  if (!isLogged) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
