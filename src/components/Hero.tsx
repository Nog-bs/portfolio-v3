import { Box, Heading, Image, HStack } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ParagraphContainer } from "./ParagraphContainer";
import profileImage from "../assets/images/standing-pic edit.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import { SocialButton } from "./SocialButton";
import { Layout } from "./Layout";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
    return (
        <Layout>
            <Heading as="h1" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
                Edro Gonzales
            </Heading>
            <ParagraphContainer text='Hi, my name is Edro - thats "Pedro" but without the "P". Moving on from the specifics, I am a passionate developer that transitioned to tech August of 2020.' />
            <ParagraphContainer
                text="Previously, I had come from a sales background whilst also pursuing a business education at Simon Fraser University. However, I felt my passions align more with what I was
                    seeing in the tech scene and specifically development."
            />
            <ParagraphContainer
                text="
                    I am currently a graduate from the BrainStation Web
                    Development program and currently spend my free time working
                    on TypeScript projects and learning what's trendy."
            />
            <Image
                margin="auto"
                borderRadius="full"
                boxSize="125px"
                src={profileImage}
                alt="Edro Gonzales Profile Picture"
                marginBottom="4"
            />
            <HStack justifyContent="center">
                <SocialButton
                    link="https://www.linkedin.com/in/edrogonzales/"
                    text="LinkedIn"
                    Icon={FaLinkedin}
                    theme="linkedin"
                />
                <SocialButton
                    link="https://github.com/Nog-bs"
                    text="Github"
                    Icon={FaGithub}
                    theme="blue"
                />
                <SocialButton
                    link="mailto:edrogonzales@gmail.com"
                    text="Email"
                    Icon={AiOutlineMail}
                    theme="twitter"
                />
                <SocialButton
                    link="https://resume.io/r/5cLy7fyZN"
                    text="Resume"
                    Icon={BsPen}
                    theme="twitter"
                />
            </HStack>
            <Box position="absolute" top="1" right="1">
                <ColorModeSwitcher />
            </Box>
        </Layout>
    );
};
