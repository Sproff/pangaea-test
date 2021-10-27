import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box bgColor="#F5F5F4">
      <Container maxW="1100px">
        <HStack
          display={["block", "block", "flex", "flex"]}
          alignItem="center"
          justifyContent="space-between"
          py="7rem"
        >
          <Box>
            <Heading
              as="h1"
              fontFamily="Freight Disp Book, serif"
              fontWeight="400"
              fontSize="3rem"
              lineHeight="1.25rem"
            >
              All Products
            </Heading>
            <Text
              fontFamily="Bau Regula"
              fontWeight="400"
              fontSize="1rem"
              pt="1.5rem"
            >
              A 360° look at Lumin
            </Text>
          </Box>

          <Box>
            <Select
              bgColor="#fff"
              placeholder="Filter by"
              w={["250px", "300px", "300px", "300px"]}
              h="60px"
              mt={["2rem", "2rem", "0", "0"]}
              borderColor="#ACAFAD"
              borderRadius="none"
              cursor="pointer"
              _focus={{ borderColor: "#ACAFAD" }}
              _hover={{ borderColor: "#ACAFAD" }}
            >
              <option value="option1">All Products</option>
              <option value="option2">New Products</option>
              <option value="option3">Sets</option>
              <option value="option3">Skincare</option>
              <option value="option3">Hair & Body Care</option>
              <option value="option3">Accessories</option>
            </Select>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};
