import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { ListSkill } from "../components/ListSkill";
import { TopHeader } from "../components/TopHeader";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
    return (
        <Layout layoutSize="small">
            <TopHeader>Technical Toolkit</TopHeader>
            <SimpleGrid columns={[2, 2, 3]} spacing="12px">
                <ListSkill text="Node.js" />
                <ListSkill text="React.js" />
                <ListSkill text="Express.js" />
                <ListSkill text="PostgreSQL" />
                <ListSkill text="GraphQL" />
                <ListSkill text="Docker" />
            </SimpleGrid>
        </Layout>
    );
};
