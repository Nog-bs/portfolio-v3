import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Flex
            alignItems="center"
            position="sticky"
            top="0"
            zIndex={1}
            p={4}
            height="20"
        >
            <Heading as="h1" size="sm">
                Edro Gonzales | Software Developer
            </Heading>

            <Box position="absolute" right="0">
                <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
        </Flex>
    );
};
