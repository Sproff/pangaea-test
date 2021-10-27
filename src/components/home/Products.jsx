import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries/GetProducts";
import { StoreContext } from "../../contexts/StoreContext";
import { updateCart } from "../../services/cart";
import { Cart } from "../modal/Cart";
import { Header } from "../../layouts/Header";

export const Products = () => {
  const { error, loading, data } = useQuery(GET_PRODUCTS);

  const [cart, setCart] = useContext(StoreContext);
  const [toggle, setToogle] = useState(false);

  if (loading) {
    return (
      <Text textAlign="center" mt="2rem">
        Loading...
      </Text>
    );
  }
  if (error) return `${error}`;

  const handleOnclick = () => {
    setToogle(!toggle);
  };

  const addToCart = (product) => {
    const data = updateCart(cart, product, 1);
    setCart(data);
    handleOnclick();
  };

  return (
    <Box bgColor="#E2E6E3" py="5rem">
      <Container maxW="1100px">
        <SimpleGrid columns={["1", "2", "3", "3"]} spacing={9}>
          {data.products.map((product) => {
            return (
              <Box key={product.id} p="3rem 1rem">
                <Box w="100%">
                  <Image
                    src={product.image_url}
                    maxH="70px"
                    w="100%"
                    objectFit="contain"
                    alt="Product Image"
                  />
                </Box>
                <Box textAlign="center">
                  <Text
                    fontFamily="Bau Regula, san-serif"
                    fontWeight="400"
                    fontSize="1rem"
                    my="1rem"
                  >
                    {product.title}
                  </Text>
                  <Text fontWeight="400" fontSize="1.2rem" my=".7rem">
                    NGN {product.price}
                  </Text>
                  <Button
                    onClick={() => addToCart(product)}
                    fontFamily="Bau Regula"
                    fontWeight="600"
                    bgColor="rgb(75, 85, 72)"
                    minH="3.25rem"
                    minW="190px"
                    color="rgb(252, 252, 249)"
                    borderRadius="none"
                    _hover={{ background: "rgb(43, 46, 43)" }}
                    _focus={{
                      background: "rgb(43, 46, 43)",
                      boxShadow: "none",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
        <Cart toggle={toggle} handleOnclick={handleOnclick} />
      </Container>
    </Box>
  );
};
