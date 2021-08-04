import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import "../styles/OSWindow.css";
import { Hashtag } from "./Hashtag";

interface OSWindowProps {
    github: string;
    link: string;
    description?: string;
    hashtags: string[];
    title: string;
    // local photo path
    imageLink: any;
}

export const OSWindow: React.FC<OSWindowProps> = ({
    github,
    link,
    description,
    hashtags,
    title,
    imageLink,
}) => {
    return (
        <Box>
            <a rel="noreferrer" target="_blank" href={link}>
                <div className="window">
                    <div className="titlebar">
                        <div className="buttons">
                            <div className="close">
                                <div className="closebutton"></div>
                            </div>
                            <div className="minimize">
                                <div className="minimizebutton"></div>
                            </div>
                            <div className="zoom">
                                <div className="zoombutton"></div>
                            </div>
                        </div>
                        <Heading fontSize="1rem" as="h5">
                            {title}
                        </Heading>
                    </div>
                    <Box
                        position="relative"
                        backgroundImage={imageLink}
                        backgroundPosition="top"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        height={{ base: "200px", md: "300px", lg: "300px" }}
                        _hover={{
                            opacity: "0.5",
                        }}
                    >
                        <Link
                            position="absolute"
                            bottom="0"
                            right="0"
                            _hover={{
                                color: "teal",
                            }}
                            target="_blank"
                            href={github}
                        >
                            <DiGithubBadge fontSize="2rem" />
                        </Link>
                    </Box>
                </div>
            </a>
            <Text fontWeight="300" m="1" fontSize="0.75rem">
                {description}
            </Text>
            <Flex wrap="wrap">
                {hashtags.map((item) => (
                    <Hashtag text={item} />
                ))}
            </Flex>
        </Box>
    );
};
