import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    let currentState = localStorage.getItem("auth");
    return currentState
      ? JSON.parse(localStorage.getItem("auth"))
      : { isLogged: false, token: null, username: "" };
  });

  const login = (token, username) => {
    setAuth({
      isLogged: true,
      token: token,
      username: username,
    });
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({
      isLogged: false,
      token: null,
      username: "",
    });
  };

  return (
    <>
      <AuthContext.Provider value={{ auth, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
