import { Center, Flex } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Center height="100vh">
            <Flex
                width={{ base: "300px", md: "420px", lg: "500px" }}
                flexDirection="column"
            >
                {children}
            </Flex>
        </Center>
    );
};
