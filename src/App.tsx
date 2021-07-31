import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Hero } from "./pages/Hero";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";

export const App = () => (
    <ChakraProvider theme={theme}>
        {/* <Navbar /> */}
        <Hero />
        {/* <Skills />
        <Projects /> */}
    </ChakraProvider>
);
