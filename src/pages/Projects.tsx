import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { OSWindow } from "../components/OSWindow";
import { TopHeader } from "../components/TopHeader";
import LiReddit from "../assets/images/lireddit.png";
import AmaySweets from "../assets/images/amay-sweets.png";
import HappyBonsai from "../assets/images/happy-bonsai.png";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
    return (
        <Layout layoutSize="fit-content">
            <TopHeader>Projects</TopHeader>
            <SimpleGrid column={2} spacing={4}>
                {/* <ProjectCard /> */}
                <OSWindow
                    hashtags={[
                        "TypeScript",
                        "Docker",
                        "React",
                        "GraphQL",
                        "Redis",
                    ]}
                    imageLink={LiReddit}
                    title="LiReddit"
                />
                <OSWindow
                    hashtags={["React", "StyledComponents"]}
                    imageLink={AmaySweets}
                    title="Amay Sweets"
                />
                <OSWindow
                    hashtags={[
                        "React",
                        "StyledComponents",
                        "Firebase",
                        "ReactThreeFiber",
                    ]}
                    imageLink={HappyBonsai}
                    title="Happy Bonsai"
                />
            </SimpleGrid>
        </Layout>
    );
};
