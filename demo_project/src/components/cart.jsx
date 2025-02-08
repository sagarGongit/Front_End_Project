import { Box, Button, Image, Text } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

import "./cart.css";
import { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(1);

  let cartItems = JSON.parse(localStorage.getItem("your-cart"));

  const handleCancel = async (id) => {
    try {
       cartItems.map((item,idx)=>idx == id)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box className="cart-process">
      <Box className="cart">
        {cartItems?.map((item, idx) => (
          <Box key={idx}>
            <Box>
              <span className="close_btn">
                <IoClose onClick={()=>handleCancel(idx)} />
              </span>
              <Image src={item.image} />
            </Box>
            <Box>
              <Text fontWeight={"bolder"}>{item.title}</Text>
              <Text fontWeight={"bold"}>{item.price}</Text>
              <Text>{item.description}</Text>
              <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
              <Button>Qty : {count}</Button>
              <Button
                disabled={count == 1}
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <h2>Payment Discription : </h2>
      </Box>
    </Box>
  );
};

export default Cart;
