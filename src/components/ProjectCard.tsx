import {
    Heading,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Hashtag } from "./Hashtag";

interface ProjectCardProps {}

export const ProjectCard: React.FC<ProjectCardProps> = () => {
    return (
        <Center py={6}>
            <Box
                maxW={"320px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
            >
                INSERT IMAGE
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                    Project Name
                </Heading>
                <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.700", "gray.400")}
                    px={3}
                >
                    Description
                </Text>
                <Stack
                    align={"center"}
                    justify={"center"}
                    direction={"row"}
                    mt={6}
                    width="100%"
                >
                    {/* map over hashtags */}
                    <Hashtag text="REACT" />
                    <Hashtag text="REACT" />
                    <Hashtag text="REACT" />
                </Stack>
                <Stack mt={8} direction={"row"} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        _focus={{
                            bg: "gray.200",
                        }}
                    >
                        Message
                    </Button>
                    <Button
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        bg={"blue.400"}
                        color={"white"}
                        boxShadow={
                            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                            bg: "blue.500",
                        }}
                        _focus={{
                            bg: "blue.500",
                        }}
                    >
                        Follow
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
};
