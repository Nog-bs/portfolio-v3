import { Image, HStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import profileImage from "../assets/images/standing-pic edit.jpg";
import PDFResume from '../assets/pdf/edro-gonzales-resume.pdf'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import { Layout } from "../components/Layout";
import { ParagraphContainer } from "../components/ParagraphContainer";
import { SocialButton } from "../components/SocialButton";
import { TopHeader } from "../components/TopHeader";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";

export const Hero: React.FC = () => {
    const PDFLink = PDFResume
    return (
        <Layout>
            <TopHeader>Hi, my name is Edro "edge-row" Gonzales and I am a <a href="https://en.wikipedia.org/wiki/Software_engineering" target="_blank" rel="noreferrer"><Text as="span" color="teal" _hover={{ textDecoration: 'underline'}}>Software Engineer</Text></a></TopHeader>
            <ParagraphContainer text='The easiest way to remember my name is thinking of the name "Pedro" but taking out the "P". Now that we got the introductions out of the way, this is just a blurb regaring my history as a software engineer.' />
            <ParagraphContainer text="I had been at the Beedie School of Business at Simon Fraser University from the periods 2018 until 2020 wherein that year I had decided to start my journey as a developer. Cultivating a self-starter approach to taking a three month bootcamp at BrainStation, my self-starter attitude and ability to learn on the fly allowed me to intern as a Junior Software Developer @ Machobear from 2021 until this year and moved into a role as a full-time Software Developer @ Ensemble." /> <ParagraphContainer text="Currently, now that I have more hands-on experience and a better understanding of the tech industry I want to be able to not only hone my fundamentals as an engineer but also develop meaningful products in an industry where possibly millions can instantly view/experience something I coded. Feel free to check out the links below to take a look at my work or get in contact with me." />
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
                    link={PDFLink}
                    download="edro-gonzales-resume.pdf"
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
