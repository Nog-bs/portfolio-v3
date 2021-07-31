import { Center, Flex } from "@chakra-ui/react";
import React from "react";

type LayoutSize = "regular" | "small";

interface LayoutProps {
    layoutSize?: LayoutSize;
    backgroundColor?: string;
}

export const Layout: React.FC<LayoutProps> = ({
    layoutSize = "regular",
    backgroundColor,
    children,
}) => {
    return (
        <Center
            bg={backgroundColor}
            height={layoutSize === "small" ? "50vh" : "100vh"}
        >
            <Flex
                width={{ base: "300px", md: "420px", lg: "500px" }}
                flexDirection="column"
            >
                {children}
            </Flex>
        </Center>
    );
};
