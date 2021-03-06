import { Image, HStack, Box } from "@chakra-ui/react";
import React from "react";
import profileImage from "../assets/images/standing-pic edit.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import { Layout } from "../components/Layout";
import { ParagraphContainer } from "../components/ParagraphContainer";
import { SocialButton } from "../components/SocialButton";
import { TopHeader } from "../components/TopHeader";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
    return (
        <Layout>
            <TopHeader>Edro Gonzales | Software Developer</TopHeader>
            <ParagraphContainer text='Hi, my name is Edro - thats "Pedro" but without the "P". Moving on from the specifics, I am a passionate developer that performed my first console.log("Hello World") in August 2020.' />
            <ParagraphContainer text="Previously, I had come from a sales background whilst also pursuing a business education at Simon Fraser University. However, I felt my passions align more with ripping my hair out trying to learn a new framework every week so I became a developer." />
            <ParagraphContainer text="I am currently a graduate from the BrainStation Web Development program and currently spend my freetime leveling up my projects so I can be cool enough to join professional development teams." />
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
                    theme="teal"
                />
                <SocialButton
                    link="mailto:edrogonzales@gmail.com"
                    text="Email"
                    Icon={AiOutlineMail}
                    theme="orange"
                />
                <SocialButton
                    link="https://resume.io/r/5cLy7fyZN"
                    text="Resume"
                    Icon={BsPen}
                    theme="red"
                />
            </HStack>
            <Box position="absolute" top="2" right="2">
                <ColorModeSwitcher />
            </Box>
        </Layout>
    );
};
