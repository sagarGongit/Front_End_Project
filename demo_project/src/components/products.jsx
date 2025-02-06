import { useNavigate } from "react-router-dom";
import ErrorIndicator from "../Indicators/ErrorIndicator";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import "./products.css";
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const FetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products?limit=5`);
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

  useEffect(() => {
    FetchProducts();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (err) {
    return <ErrorIndicator />;
  }

  return (
    <Box className="products">
      <Box className="sort-filter">
        <Box>
          <Input size={"lg"} placeholder="Search here..." />
        </Box>
        <select>
          <option>Filter by category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kids</option>
          <option value="electronics">Electronics</option>
          <option value="jwellery">Jwellery</option>
        </select>

        <select>
          <option>Sort by Price</option>
          <option value="low">low-to-high</option>
          <option value="high">high-to-low</option>
        </select>
      </Box>
      <Box className="cards">
        {product?.map((item, idx) => (
          <Box key={idx} className="product-card">
            <Image src={item.image} alt="product-img" />
            <Text>Title : {item.title}</Text>
            <Text>Price : {item.price}</Text>
            <Button
              onClick={() => navigate(`/product/${item.id}`)}
              variant={"solid"}
              colorPalette={"orange"}
            >
              view more
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
