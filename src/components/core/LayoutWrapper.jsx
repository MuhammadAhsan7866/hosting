import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Header from "./Header/Header";
import FooterNif from "./Footer/Footer";

const LayoutWrapper = ({ children }) => {
  return (
    <Box bg={'white'}>
      
      <Header/>
      {children}
      <FooterNif/>
    </Box>
  );
};

export default LayoutWrapper;