import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

export const App = () => (
    <ChakraProvider theme={theme}>
        {/* <Navbar /> */}
        <Hero />
        <Skills />
    </ChakraProvider>
);
