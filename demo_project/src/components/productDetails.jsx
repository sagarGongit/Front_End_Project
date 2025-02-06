import ErrorIndicator from "../Indicators/ErrorIndicator";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import "./productDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const FetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (res.status == 200) {
        setProduct(res.data);
        setLoading(false);
        setErr(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setErr(true);
    }
  };

  const handleCart = async () => {
    let cart = JSON.parse(localStorage.getItem("your-cart")) || [];
    let payload = {
      title,
      price,
      image,
      description,
    };
    try {
      cart.push(payload);
      localStorage.setItem("your-cart", JSON.stringify(cart));
      navigate("/products");
      alert("Product added to your cart successfully!");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (err) {
    return <ErrorIndicator />;
  }

  const { title, price, image, description } = product;

  return (
    <Box className="detail-card">
      <Box className="card-detail">
        <Image src={image} alt="product-img" />
        <Text>Title : {title}</Text>
        <Text>Price : {price}</Text>
        <Button onClick={handleCart} variant={"solid"} colorPalette={"orange"}>
          AddToCart
        </Button>
        <Text fontWeight={"bold"}>Description : {description}</Text>
      </Box>
    </Box>
  );
};

export default Products;
