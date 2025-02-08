import { AuthContext } from "../contextapi/AuthContext";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";

import axios from "axios";
import "./signin.css";
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import ErrorIndicator from "../Indicators/ErrorIndicator";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      setLoading(true);
      let res = await axios.post(`https://reqres.in/api/login`, payload);
      if (res.status == 200) {
        setLoading(false);
        setErr(false);
        let token = res.data.token;
        let username = e.target.email.value;
        let auth = {
          isLogged: true,
          token,
          username,
        };
        localStorage.setItem("auth", JSON.stringify(auth));
        login(token, username);
        navigate("/products");
      }
    } catch (error) {
      console.log(error.message);
      setErr(true);
    }
  };

  if (err) {
    return <ErrorIndicator />;
  }
  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <Box className="login">
      <Box className="login-form">
        <Formik>
          <Form onSubmit={handleLogin}>
            <VStack spaceY={5}>
              <Input
                width={"sm"}
                placeholder="enter your email id..."
                id="email"
                type="email"
                required
              />
              <Input
                width={"sm"}
                placeholder="enter your password..."
                id="password"
                type="password"
                required
              />
              <Button
                backgroundColor={"midnightblue"}
                width={"sm"}
                type="submit"
              >
                Login
              </Button>
              <Text sm={5}>{err}</Text>
            </VStack>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default Signin;
