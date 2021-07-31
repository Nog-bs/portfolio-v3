import { Heading } from "@chakra-ui/react";
import React from "react";

interface TopHeaderProps {}

export const TopHeader: React.FC<TopHeaderProps> = ({ children }) => {
    return (
        <Heading as="h1" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
            {children}
        </Heading>
    );
};
