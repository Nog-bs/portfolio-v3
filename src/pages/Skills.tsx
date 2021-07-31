import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { ListSkill } from "../components/ListSkill";
import { TopHeader } from "../components/TopHeader";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
    return (
        <Layout>
            <TopHeader>Technical Toolkit</TopHeader>
            <SimpleGrid columns={[1, 1, 2]} spacing="12px">
                <ListSkill
                    text="Node.js"
                    description="Insert description here"
                />
                <ListSkill
                    text="React.js"
                    description="Insert description here"
                />
                <ListSkill
                    text="Express.js"
                    description="Insert description here"
                />
                <ListSkill
                    text="PostgreSQL"
                    description="Insert description here"
                />
                <ListSkill
                    text="GraphQL"
                    description="Insert description here"
                />
                <ListSkill
                    text="Docker"
                    description="Insert description here"
                />
            </SimpleGrid>
        </Layout>
    );
};
