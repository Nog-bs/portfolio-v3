import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { TopHeader } from "../components/TopHeader";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
    return (
        <Layout>
            <TopHeader>Technical Toolkit</TopHeader>
            <SimpleGrid columns={2} spacing={6}>
                <Box padding="6" bg="teal" height="80px"></Box>
                <Box padding="6" bg="teal" height="80px"></Box>
                <Box padding="6" bg="teal" height="80px"></Box>
                <Box padding="6" bg="teal" height="80px"></Box>
                <Box padding="6" bg="teal" height="80px"></Box>
            </SimpleGrid>
        </Layout>
    );
};
