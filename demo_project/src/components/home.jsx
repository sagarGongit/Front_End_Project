import { Box, Text, VStack } from "@chakra-ui/react";
import "./home.css";

const Home = () => {
  return (
    <Box className="homepage">
      <Box className="divide">
        <Box>
          <VStack>
            <Text fontSize={"30px"}>Welcome to Our Shopping platform🛒🛍️</Text>
            <Text fontSize={"20px"}>
              This is the one of the largest ecommerce website accross india.
            </Text>
            <Text fontSize={"sm"}>
              Please feel free to shopping your sefety is our duty 🔏!
            </Text>
            <Text fontSize={"30px"}>Explore more 👉🏻</Text>
          </VStack>
        </Box>
        <Box>
          <img
            style={{ width: "650px", height: "500px", marginTop: "40px" }}
            src="https://i.ibb.co/t0LcTdb/sample-removebg-preview.png"
            alt="banner"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
