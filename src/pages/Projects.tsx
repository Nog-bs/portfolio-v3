import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { TopHeader } from "../components/TopHeader";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
    return (
        <Layout layoutSize="fit-content">
            <TopHeader>Projects</TopHeader>
            <SimpleGrid column={2} spacing={4}>
                <Box borderRadius="8" height="300px">
                    <Heading as="h3" fontSize="0.85rem">
                        Project Name
                    </Heading>
                    <Text>Project Description</Text>
                </Box>
            </SimpleGrid>
        </Layout>
    );
};
