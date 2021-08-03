import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "../styles/OSWindow.css";
import { Hashtag } from "./Hashtag";

interface OSWindowProps {
    hashtags: string[];
    title: string;
    // local photo path
    imageLink: any;
}

export const OSWindow: React.FC<OSWindowProps> = ({
    hashtags,
    title,
    imageLink,
}) => {
    return (
        <Box>
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
                    backgroundImage={imageLink}
                    backgroundPosition="top"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    height={{ base: "200px", md: "300px", lg: "300px" }}
                    _hover={{
                        opacity: "0.5",
                    }}
                ></Box>
            </div>
            <SimpleGrid columns={4} spacing={1}>
                {hashtags.map((item) => (
                    <Hashtag text={item} />
                ))}
            </SimpleGrid>
        </Box>
    );
};
