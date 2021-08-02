import { Collapse, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { DiNodejsSmall } from "react-icons/di";
import { IconType } from "react-icons/lib";

interface ListSkillProps {
    Icon?: IconType;
    text: string;
    description?: string;
}

export const ListSkill: React.FC<ListSkillProps> = ({
    Icon = DiNodejsSmall,
    text,
    description,
}) => {
    const [show, setShow] = React.useState(false);

    const handleToggle = () => setShow(!show);
    return (
        <Flex
            color="black"
            textAlign="center"
            bg="teal.200"
            p="4"
            borderRadius="8"
            onClick={handleToggle}
            flexDirection="column"
            width="100%"
        >
            <Flex flexDirection="row" alignItems="center">
                <Icon fontSize="1.5rem" />
                <Heading ml="1" as="h6" fontSize="1rem" fontWeight="500">
                    {text}
                </Heading>
                <Text
                    _hover={{
                        textDecoration: "underline",
                    }}
                    ml="auto"
                    fontSize="0.65rem"
                >
                    Show {show ? "less" : "more"}
                </Text>
            </Flex>
            <Collapse startingHeight={0} in={show}>
                <Text mt="2" textAlign="left" fontSize="0.85rem">
                    {description}
                </Text>
            </Collapse>
        </Flex>
    );
};
