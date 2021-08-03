import { Badge } from "@chakra-ui/react";
import React from "react";

interface HashtagProps {
    text: string;
}

export const Hashtag: React.FC<HashtagProps> = ({ text }) => {
    return (
        <Badge width="fit-content" px={2} py={1} bg="teal.200" fontWeight="600">
            #{text}
        </Badge>
    );
};
