import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../layouts/Header";
import { Hero } from "../components/home/Hero";
import { Products } from "../components/home/Products";
import { Footer } from "../layouts/Footer";

export const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </Box>
  );
};
