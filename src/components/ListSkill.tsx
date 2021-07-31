import { Collapse, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ListSkillProps {
    text: string;
    description?: string;
}

export const ListSkill: React.FC<ListSkillProps> = ({ text, description }) => {
    const [show, setShow] = React.useState(false);

    const handleToggle = () => setShow(!show);
    return (
        <Flex
            textAlign="center"
            bg="teal.200"
            p="4"
            borderRadius="8"
            onClick={handleToggle}
            flexDirection="column"
            width="100%"
        >
            <Heading as="h6" fontSize="1rem" fontWeight="500">
                {text}
            </Heading>
            <Collapse startingHeight={0} in={show}>
                <Text textAlign="justify" fontSize="0.85rem">
                    {description}
                </Text>
            </Collapse>
        </Flex>
    );
};
