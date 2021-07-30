import React from "react";
import { Text } from "@chakra-ui/react";

interface ParagraphContainerProps {
    text: string;
}

export const ParagraphContainer: React.FC<ParagraphContainerProps> = ({
    text,
}) => {
    return (
        <Text
            fontSize={{ base: "xs", md: "md", lg: "md" }}
            textAlign="justify"
            marginBottom="4"
        >
            {text}
        </Text>
    );
};
