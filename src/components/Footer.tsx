import { Text, Center, Flex, Link } from "@chakra-ui/react";
import React from "react";
import PDF from '../assets/pdf/edro-gonzales-resume.pdf'
import { AiOutlineMail } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    const PDFResume = PDF
    return (
        <Center
            color="black"
            flexDirection="column"
            height="100px"
            backgroundColor="teal.100"
        >
            <Flex>
                <Link
                    m="1"
                    target="_blank"
                    href="https://www.linkedin.com/in/edrogonzales/"
                >
                    <FaLinkedin fontSize="1.5rem" />
                </Link>
                <Link m="1" target="_blank" href="https://github.com/Nog-bs">
                    <FaGithub fontSize="1.5rem" />
                </Link>
                <Link
                    m="1"
                    target="_blank"
                    href="mailto:edrogonzales@gmail.com"
                >
                    <AiOutlineMail fontSize="1.5rem" />
                </Link>
                <Link
                    m="1"
                    target="_blank"
                    href={PDFResume}
                    download="edro-gonzales-resume.pdf"
                >
                    <BsPen fontSize="1.5rem" />
                </Link>
            </Flex>
            <Text mt="2" fontSize="0.6rem">
                Copyright © 2021 Edro Gonzales | Made with React.js
            </Text>
        </Center>
    );
};
