import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import { MdAddBox } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bs";

import { StoreContext } from "../../contexts/StoreContext";
import { updateCart, totalProductsPrice } from "../../services/cart";

export const Cart = ({ toggle, handleOnclick }) => {
  const [cart, setCart] = useContext(StoreContext);

  return (
    <Box className={toggle ? "sidebar active" : "sidebar"}>
      <Container maxW="container.xl">
        <Box my="2rem">
          <BsArrowRightCircle
            fontSize="1.8rem"
            cursor="pointer"
            onClick={handleOnclick}
          />
        </Box>
        <Text
          as="h3"
          my="4rem"
          fontSize="1.5rem"
          fontWeight="500"
          textAlign="center"
        >
          CART ITEMS
        </Text>

        {cart.map((item) => {
          return (
            <>
              <HStack
                display={["block", "block", "flex", "flex"]}
                justifyContent="space-evenly"
                key={item.id}
                mb="2rem"
                mx={["1rem", "1rem", "4rem", "8rem"]}
              >
                <HStack
                  border="1px solid #b6b5b5"
                  borderRadius="10px"
                  w="400px"
                  p="2rem"
                >
                  <Box
                    borderTopLeftRadius="10px"
                    borderBottomLeftRadius="10px"
                    overflow="hidden"
                  >
                    <Image
                      objectFit="cover"
                      w="70px"
                      h="70px"
                      src={item.image_url}
                      alt="Product Image"
                    />
                  </Box>

                  <Box padding="0 1rem">
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize={["1rem", "1rem", "1.2rem", "1.2rem"]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        color="gray.500"
                        fontSize={[".9rem", ".9rem", "1rem", "1rem"]}
                      >
                        &#8358;{item.price}
                      </Text>
                    </Box>
                    <br />
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize={["1rem", "1rem", "1.2rem", "1.2rem"]}
                      >
                        QTY - {item.itemCount}
                      </Text>
                    </Box>

                    <HStack mt=".5rem">
                      <Box
                        onClick={() => setCart(updateCart(cart, item, 1))}
                        fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}
                        cursor="pointer"
                      >
                        <MdAddBox color="green" />
                      </Box>
                      <Box
                        onClick={() => setCart(updateCart(cart, item, -1))}
                        fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}
                        cursor="pointer"
                      >
                        <FaMinus color="goldenrod" />
                      </Box>
                      <Box
                        onClick={() => setCart(updateCart(cart, item))}
                        fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}
                        cursor="pointer"
                      >
                        {<RiDeleteBin6Fill color="red" />}
                      </Box>
                    </HStack>
                  </Box>
                </HStack>
              </HStack>
            </>
          );
        })}

        <Box
          my="2rem"
          mx={["1rem", "1rem", "4rem", "8rem"]}
          border="2px solid #f1f1f1"
          borderRadius="10px"
          p="1rem"
        >
          <HStack textAlign="center">
            <Box w="100%">
              <Text>Total Items</Text>
              <Text>{cart.length}</Text>
            </Box>
            <Box w="100%">
              <Text>Total Prices</Text>
              <Text>&#8358;{totalProductsPrice(cart)}</Text>
            </Box>
          </HStack>

          <Divider />

          <HStack textAlign="center">
            <Box w="100%">
              {!cart.length <= 0 ? (
                <Link to="#">
                  <Button
                    bg="rgb(75, 85, 72)"
                    color="#fff"
                    borderRadius="10px"
                    mt="1rem"
                    _hover={{ background: "rgb(75, 85, 72)", opacity: "0.8" }}
                    _focus={{ boxShadow: "none" }}
                  >
                    Checkout
                  </Button>
                </Link>
              ) : (
                <Link to="#">
                  <Button
                    bg="rgb(75, 85, 72)"
                    color="#fff"
                    borderRadius="10px"
                    mt="1rem"
                    _focus={{ boxShadow: "none" }}
                    disabled
                  >
                    Checkout
                  </Button>
                </Link>
              )}
            </Box>
            <Box w="100%">
              {!cart.length <= 0 ? (
                <Button
                  onClick={() => setCart([])}
                  bg="rgb(75, 85, 72)"
                  color="#fff"
                  borderRadius="10px"
                  mt="1rem"
                  _hover={{ background: "rgb(75, 85, 72)", opacity: "0.8" }}
                  _focus={{ boxShadow: "none" }}
                >
                  Clear
                </Button>
              ) : (
                <Button
                  onClick={() => setCart([])}
                  bg="rgb(75, 85, 72)"
                  color="#fff"
                  borderRadius="10px"
                  mt="1rem"
                  _focus={{ boxShadow: "none" }}
                  disabled
                >
                  Clear
                </Button>
              )}
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};
