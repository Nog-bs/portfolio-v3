import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { ListSkill } from "../components/ListSkill";
import { TopHeader } from "../components/TopHeader";
import { DiRedis, DiReact, DiNodejsSmall, DiPostgresql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { SiDocker, SiTypescript } from "react-icons/si";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
    return (
        <Layout layoutSize="fit-content">
            <TopHeader>Technical Toolkit</TopHeader>
            <SimpleGrid columns={[1, 1, 2]} spacing="12px">
                <ListSkill
                    text="Node.js"
                    description="In order to build backend API services, Node.js is an essential part of my stack. It is a JavaScript runtime environment that allows me to develop highly-scalable, data-intensive and real-time apps."
                    Icon={DiNodejsSmall}
                />
                <ListSkill
                    text="React.js"
                    description='React is a JavaScript "library" for building user interfaces. I started learning this technology two months into my self-learning phase wherein I also started to fully dive deeper into it in my bootcamp. This stack is essential in my front-end skillset and this portfolio was developed with this tech.'
                    Icon={DiReact}
                />
                <ListSkill
                    text="Express.js"
                    description="Express.js builds on top of Node.js and makes it easier to design backend API services. This is an essential tool as without it, I would probably feel like a chicken with its head cut off trying to write my own back-end."
                />
                <ListSkill
                    text="PostgreSQL"
                    description="Some things I like about this tech is that it is open source. Open source means free so to a developer like me who is trying out as many different technologies, this allows me to pump out as many projects as I want to a reliable database. To interact with my databases I usually use a ORM as I do not have too much experience writing my own SQL."
                    Icon={DiPostgresql}
                />
                <ListSkill
                    text="GraphQL"
                    description='GraphQL is a query language for my API. This builds on top of Express.js and allows me to make more efficient calls for data. Instead of using a traditional RESTFUL API, GraphQL is exciting because it can ask for specific types of data and "save trips".'
                    Icon={GrGraphQl}
                />
                <ListSkill
                    text="Docker"
                    description="Docker is a technology that I just started getting into and I find that its very strong when I want to really put together these aforementioned technologies and deploy them. In relation to using Dokku as my VPS and Docker to containerize my applications, I have a lightweight way to deploy/maintain highly scalable applications."
                    Icon={SiDocker}
                />
                <ListSkill
                    text="Redis"
                    description="Redis is an open source tool that I have a limited amount of experience with, but having used it once has made me want to start using it more in my future projects. It runs as a service to  store data in memory and perform highly efficient data retrievals. Use cases for this app is to take the load off the database."
                    Icon={DiRedis}
                />
                <ListSkill
                    text="TypeScript"
                    description="TypeScript is a pre-processor for JavaScript that provides what was originally a dynamic language now static type checking. A part of TypeScript that I enjoy is the autocompletion, when used with VS Code, and I look forward to a team environment that employs this technology as I know this tech excels furthermore there."
                    Icon={SiTypescript}
                />
            </SimpleGrid>
        </Layout>
    );
};
