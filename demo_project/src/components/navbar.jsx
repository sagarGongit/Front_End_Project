import { Box, Button } from "@chakra-ui/react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contextapi/AuthContext";

const Navbar = () => {
  const { logout, auth } = useContext(AuthContext);
  const { isLogged } = auth;
  return (
    <Box className="navbar">
      <Box className="logo">
        <img
          src="https://thumbs.dreamstime.com/b/dark-blue-orange-online-shop-logo-342088277.jpg"
          alt="logo"
        />
      </Box>
      <Box className="utility">
        <Box>
          <Link to={"/products"}>Products</Link>
        </Box>
        <Box>
          <Link to={"/cart"}>Cart</Link>
        </Box>
        {isLogged ? (
          <Button variant={"solid"} colorPalette="red" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Box>
            <Link to={"/login"}>Login</Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
