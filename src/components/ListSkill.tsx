import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ListSkillProps {
    text: string;
}

export const ListSkill: React.FC<ListSkillProps> = ({ text }) => {
    return (
        <Flex
            alignItems="center"
            borderRadius="8px"
            bg="teal.400"
            padding="4"
            color="white"
            flexDirection="column"
        >
            <Text as="h4" size="md">
                {text}
            </Text>
        </Flex>
    );
};
