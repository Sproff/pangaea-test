import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { ImFacebook2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { ImTwitter } from "react-icons/im";

export const Footer = () => {
  return (
    <Box bgColor="#4b5548" color="#fff">
      <Container maxW="1100px">
        <Flex
          w="100%"
          justifyContent="space-between"
          py="3rem"
          display={["block", "block", "flex", "flex"]}
        >
          <Box w="69%">
            <Heading
              fontFamily="Freight Disp Book, serif"
              fontWeight="400"
              fontSize="1.8rem"
            >
              Let’s stay in touch
            </Heading>
            <Input
              color="#fcfcf9"
              variant="flushed"
              _focus={{ borderColor: "#fff", boxShadow: "none" }}
              placeholder="EMAIL ADDRESS"
              _placeholder={{color: "#fff", fontWeight: "600", fontSize: "0.8rem"}}
            />

            <Text
              fontFamily="Bau Regula"
              fontWeight="400"
              fontSize="1.1rem"
              mt="2rem"
            >
              We’ll give you a heads up on new products, deals, and events, plus
              tips on how to keep your skin looking great. You can unsubscribe
              at any time. View our <Link>Privacy Policy</Link> &{" "}
              <Link>Terms of Service.</Link>
            </Text>

            <Text
              fontFamily="Bau Regula"
              fontWeight="600"
              fontSize="1.1rem"
              my=".5rem"
            >
              Need help?
            </Text>

            <Text
              fontFamily="Bau Regula"
              fontWeight="400"
              fontSize="1.1rem"
              my="1rem"
            >
              Contact us through our{" "}
              <Text textDecoration="underline">Support Concierge</Text>
            </Text>
            <Text fontFamily="Bau Regula" fontWeight="400" fontSize="1.1rem">
              or email us at{" "}
              <Text textDecoration="underline">support@luminskin.com</Text>
            </Text>

            <Text fontFamily="Bau Regula" fontWeight="400" fontSize="1.1rem">
              or email us at support@luminskin.com
            </Text>
            <Text
              fontFamily="Bau Regula"
              fontWeight="400"
              fontSize="1.1rem"
              my="2rem"
            >
              © 2021, Lumin
            </Text>

            <Flex justifyContent="space-between">
              <Link
                to="#"
                fontFamily="Bau Regula"
                fontWeight="400"
                fontSize="1.1rem"
              >
                <Text textDecoration="underline">Privacy Policy</Text>
              </Link>
              <Link
                to="#"
                fontFamily="Bau Regula"
                fontWeight="400"
                fontSize="1.1rem"
              >
                <Text textDecoration="underline">Return Policy</Text>
              </Link>
              <Link
                to="#"
                fontFamily="Bau Regula"
                fontWeight="400"
                fontSize="1.1rem"
              >
                <Text textDecoration="underline">Terms of Service</Text>
              </Link>
            </Flex>

            <Text
              fontFamily="Bau Regula"
              fontWeight="400"
              fontSize="1.1rem"
              mt="1rem"
            >
              3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010
            </Text>
          </Box>

          <Flex
            w="100%"
            justifyContent="space-between"
            ml={["0", "1rem", "1rem", "8rem"]}
            display={["block", "block", "flex", "flex"]}
          >
            <Box w="100%" mt={["2rem", "2rem", "2rem", "0"]}>
              <VStack alignItems="left">
                <Text fontWeight="600" fontSize="1.1rem">
                  Shop
                </Text>
                <Link to="#" fontSize="1.1rem">
                  Skin
                </Link>
                <Link to="#" fontSize="1.1rem">
                  Hair
                </Link>
                <Link to="#" fontSize="1.1rem">
                  Body
                </Link>
              </VStack>
            </Box>

            <Box w="100%" mt={["2rem", "2rem", "2rem", "0"]}>
              <VStack alignItems="left">
                <Text fontWeight="600" fontSize="1.1rem">
                  About
                </Text>
                <Link to="#" fontSize="1.1rem">
                  Blog
                </Link>
                <Link to="#" fontSize="1.1rem">
                  How To
                </Link>
                <Link to="#" fontSize="1.1rem">
                  Ingredients
                </Link>
                <Link to="#" fontSize="1.1rem">
                  Reviews
                </Link>
                <Link to="#" fontSize="1.1rem">
                  Accessibility
                </Link>
                <Link to="#" fontSize="1.1rem">
                  FAQ
                </Link>
              </VStack>
            </Box>

            <Box w="100%" mt={["2rem", "2rem", "2rem", "0"]}>
              <VStack alignItems="left">
                <Text fontWeight="600" fontSize="1.1rem">
                  More
                </Text>
                <Link to="#" fontSize="1.1rem">
                  Jobs
                </Link>
                <Link to="#" fontSize="1.1rem">
                  Wholesale
                </Link>
                <Link to="#" fontSize="1.1rem">
                  Heroes Program
                </Link>
                <Link to="#" fontSize="1.1rem">
                  Request Personal Data
                </Link>
              </VStack>
            </Box>

            <Box w="100%" mt={["2rem", "2rem", "2rem", "0"]}>
              <Flex>
                <Box>
                  <SiInstagram />
                </Box>

                <Box mx="1rem">
                  <ImFacebook2 />
                </Box>

                <Box>
                  <ImTwitter />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
