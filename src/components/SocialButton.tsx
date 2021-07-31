import { Button } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

interface SocialButtonProps {
    theme: string;
    link: string;
    text: string;
    Icon: IconType;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
    theme,
    link,
    text,
    Icon,
}) => {
    return (
        <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
            href={link}
        >
            <Button
                fontSize={{ base: "0.65rem", md: "0.85rem", xl: "0.85rem" }}
                width={{ base: "72px", md: "100px", xl: "125px" }}
                colorScheme={theme}
                leftIcon={<Icon />}
            >
                {text}
            </Button>
        </a>
    );
};
