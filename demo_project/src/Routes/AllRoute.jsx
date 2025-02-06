import Cart from "../components/cart";
import Home from "../components/home";
import ProductDetails from "../components/productDetails";
import Products from "../components/products";
import Signin from "../components/signin";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoute;
