import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { OSWindow } from "../components/OSWindow";
import { TopHeader } from "../components/TopHeader";
import LiReddit from "../assets/images/lireddit.png";
import AmaySweets from "../assets/images/amay-sweets.png";
import HappyBonsai from "../assets/images/happy-bonsai.png";
import Battleboard from "../assets/images/battleboard.png";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
    return (
        <Layout layoutSize="fit-content">
            <TopHeader>Projects</TopHeader>
            <SimpleGrid column={2} spacing={4}>
                {/* <ProjectCard /> */}
                <OSWindow
                    github="https://github.com/Nog-bs/lireddit"
                    link="https://edrohello.xyz/"
                    hashtags={[
                        "TypeScript",
                        "Docker",
                        "React",
                        "GraphQL",
                        "Redis",
                        "Express.js",
                        "Apollo",
                        "PostgreSQL",
                        "TypeORM",
                        "Next.js",
                        "TypeGraphQL",
                    ]}
                    imageLink={LiReddit}
                    title="LiReddit"
                    description="LiReddit is a 14 hour tutorial project by Ben Awad that includes a whole grocery list of technologies. Even though this is a tutorial project, this application took a total of four months to complete. I hope to use this project as reference for my future full stack applications."
                />
                <OSWindow
                    github="https://github.com/Nog-bs/amay-sweets"
                    link="https://amay-sweets.com/"
                    hashtags={[
                        "React",
                        "StyledComponents",
                        "ReactRouter",
                        "ReactIcon",
                        "ReactReveal",
                    ]}
                    imageLink={AmaySweets}
                    title="Amay Sweets"
                    description="A colleague and I developped a landing site for a local family business."
                />
                <OSWindow
                    github="https://github.com/Nog-bs/happy-bonsai"
                    link="https://happy-bonsai.netlify.app/"
                    hashtags={[
                        "React",
                        "StyledComponents",
                        "Firebase",
                        "ReactThreeFiber",
                        "ReactRouterDom",
                        "Three.js",
                        "Axios",
                    ]}
                    imageLink={HappyBonsai}
                    title="Happy Bonsai"
                    description="This capstone project for BrainStation was completed with only a week to learn the necessary technologies. It is an application that tracks reading habits in the form of a bonsai."
                />
                <OSWindow
                    github="https://github.com/Battleboard/battleboard"
                    link="https://battle-board-dev.herokuapp.com/login"
                    hashtags={[
                        "MongoDB",
                        "React",
                        "Redux",
                        "StyledComponents",
                        "MERN",
                    ]}
                    imageLink={Battleboard}
                    title="Battleboard"
                    description="This was an early stage start-up project. The application is a turn-based browser game wherein players had to use spells to beat the other player."
                />
            </SimpleGrid>
        </Layout>
    );
};
