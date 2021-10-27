import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  Select,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../assets/images/logo.png";
import CartIcon from "../assets/icons/cart.png";
import { StoreContext } from "../contexts/StoreContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [cartData] = useContext(StoreContext);
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <Box bgColor="#F5F5F4">
      <Container maxW="1100px">
        <HStack
          alignItems="center"
          w="100%"
          boxShadow="0 2px 3px -3px grey"
          h="64px"
        >
          <Box display={["block", "block", "block", "none"]} my="2rem">
            <GiHamburgerMenu
              cursor="pointer"
              fontSize="1.5rem"
              onClick={toggleNavbar}
            />
          </Box>

          <Box
            className={toggleNav ? "navbar active" : "navbar"}
            w={["250px", "250px", "250px", "100%"]}
            display={["block", "block", "block", "flex"]}
          >
            <Box my="2rem" display={["block", "block", "block", "none"]}>
              <AiOutlineClose
                cursor="pointer"
                fontSize="1.5rem"
                onClick={toggleNavbar}
              />
            </Box>
            <HStack
              display={["block", "block", "block", "flex"]}
              alignItems="center"
              justifyContent="space-between"
              w="60%"
            >
              <Box>
                <Image h="45px" w="100%" src={Logo} alt="Logo" />
              </Box>

              <Flex
                display={["block", "block", "block", "flex"]}
                justifyContent="space-between"
                w="60%"
              >
                <Link to="#">
                  <Text
                    my={["1rem", "1rem", "1rem", "0"]}
                    fontFamily="Bau Regula"
                    fontWeight="400"
                    fontSize="0.875rem"
                  >
                    Shop
                  </Text>
                </Link>

                <Link to="#">
                  <Text
                    my={["1rem", "1rem", "1rem", "0"]}
                    fontFamily="Bau Regula"
                    fontWeight="400"
                    fontSize="0.875rem"
                  >
                    About
                  </Text>
                </Link>

                <Link to="#">
                  <Text
                    my={["1rem", "1rem", "1rem", "0"]}
                    fontFamily="Bau Regula"
                    fontWeight="400"
                    fontSize="0.875rem"
                  >
                    Support
                  </Text>
                </Link>

                <Link to="#">
                  <Text
                    my={["1rem", "1rem", "1rem", "0"]}
                    fontFamily="Bau Regula"
                    fontWeight="400"
                    fontSize="0.875rem"
                  >
                    Blog
                  </Text>
                </Link>
              </Flex>
            </HStack>

            <Spacer />

            <HStack
              display={["block", "block", "block", "flex"]}
              alignItems="center"
              justifyContent="space-between"
            >
              <Link to="#">
                <Text
                  m={[".5rem", ".5rem", ".5rem", "0"]}
                  fontFamily="Bau Regula"
                  fontWeight="400"
                  fontSize="0.875rem"
                >
                  Account
                </Text>
              </Link>

              <Box position="relative" cursor="pointer">
                <Image
                  src={CartIcon}
                  h="20px"
                  w="24px"
                  my={["1rem", "1rem", "1rem", "0"]}
                  mr="3rem"
                  ml={[".5rem", ".5rem", ".5rem", "1rem"]}
                  alt="Cart Icon"
                />
                <Text
                  bg="rgb(75, 85, 72)"
                  color="#fff"
                  position="absolute"
                  top={["-5px", "-5px", "-5px", "0"]}
                  left={["25px", "25px", "25px", "35px"]}
                  borderRadius="50%"
                  fontSize=".6rem"
                  p=".1rem .3rem"
                  minHeight="0"
                  minWidth="0"
                >
                  {cartData.length}
                </Text>
              </Box>

              <Box w={["200px", "200px", "200px", "100%"]}>
                <Select
                  placeholder=""
                  borderColor="#ACAFAD"
                  borderRadius="none"
                  cursor="pointer"
                  _focus={{ borderColor: "#ACAFAD" }}
                  _hover={{ borderColor: "#ACAFAD" }}
                >
                  <option value="option1">EN</option>
                </Select>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};
