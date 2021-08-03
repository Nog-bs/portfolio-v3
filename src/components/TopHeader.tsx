import { Heading } from "@chakra-ui/react";
import React from "react";

interface TopHeaderProps {}

export const TopHeader: React.FC<TopHeaderProps> = ({ children }) => {
    return (
        <Heading mb="4" as="h2" fontSize={{ base: "l", md: "xl", lg: "2xl" }}>
            {children}
        </Heading>
    );
};
