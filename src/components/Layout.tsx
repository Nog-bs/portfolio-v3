import { Center, Flex } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
    layoutSize?: string;
    backgroundColor?: string;
}

export const Layout: React.FC<LayoutProps> = ({
    layoutSize = "100vh",
    backgroundColor,
    children,
}) => {
    return (
        <Center p="8" bg={backgroundColor} height={layoutSize}>
            <Flex
                width={{ base: "300px", md: "420px", lg: "500px" }}
                flexDirection="column"
            >
                {children}
            </Flex>
        </Center>
    );
};
