import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Hero } from "./pages/Hero";
// import { Skills } from "./pages/Skills";
// import { Projects } from "./pages/Projects";
import { Footer } from "./components/Footer";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Hero />
        {/* todo: update skills and project sections */}
        {/* <Skills />
        <Projects /> */}
        <Footer />
    </ChakraProvider>
);
