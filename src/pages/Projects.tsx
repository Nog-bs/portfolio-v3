import React from "react";
import { Layout } from "../components/Layout";
import { TopHeader } from "../components/TopHeader";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
    return (
        <Layout>
            <TopHeader>Projects</TopHeader>
        </Layout>
    );
};
