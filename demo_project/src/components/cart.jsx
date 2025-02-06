import { Box, Button, Image, Text } from "@chakra-ui/react";
import "./cart.css";

const Cart = () => {
  let cartItems = JSON.parse(localStorage.getItem("your-cart"));
  return (
    <Box className="cart">
      {cartItems?.map((item, idx) => (
        <Box key={idx}>
          <Box>
            <Image src={item.image} />
          </Box>
          <Box>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </Box>
          <Box className="quantity-box">
            <Button>+</Button>
            <Button>Quantity</Button>
            <Button>-</Button>
          </Box>
          <Text>{item.description}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Cart;
