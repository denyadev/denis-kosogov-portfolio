import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Medcan",
        image: require("../public/p3.png"),
        stacktext: ["React", "Redux", "Bootstrap", "Django", "PostgreSQL"],
        // stack: [require('../public/stack/react.svg'), require('../public/stack/redux.svg'), require('../public/stack/bootstrap.svg'), require('../public/stack/django.svg'), require('../public/stack/postgresql.svg')],
        link: "https://medcan.herokuapp.com/",
        github: "https://github.com/denyadev/medcan",
    },
    {
        title: "PCMCPA",
        image: require("../public/p1.png"),
        stacktext: ["React", "Next.Js", "Tailwind"],
        // stack: [require('../public/stack/react.svg'), require('../public/stack/next.png'), require('../public/stack/tailwind.svg')],
        link: "https://pcmcpa.ca",
        github: "https://github.com/denyadev/pcmcpa",
    },
    {
        title: "Lana",
        image: require("../public/p2.png"),
        stacktext: ["React", "Next.Js", "Tailwind"],
        // stack: [require('../public/stack/react.svg'), require('../public/stack/next.png'), require('../public/stack/tailwind.svg')],
        link: "https://lana-portfolio.vercel.app/",
        github: "https://github.com/denyadev/lana",
    },
];

type Props = {};

const Portfolio = (props: Props) => {
    return (
        <div className="bg-[#25262A]">
            <motion.div
                className="container h-screen mx-auto grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}>
                <div className="grid grid-rows-4">
                    <div className="row-span-1 flex items-center h-full w-4/6 lg:mx-auto">
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}>
                            <h3 className="section-heading">Portfolio</h3>
                            <p className="text-gray-400">
                                Some of my recent work
                            </p>
                        </motion.div>
                    </div>
                    <div className="row-span-2">
                        <motion.div
                            initial={{ x: -200, y: -100 }}
                            whileInView={{ x: 0, y: 0 }}
                            transition={{ duration: 1 }}>
                            <ProjectCard
                                project={projects[0]}
                                color={
                                    "bg-gradient-to-bl from-[#16191E] to-emerald-500/5"
                                }
                            />
                        </motion.div>
                    </div>
                    <div className="row-span-1 flex items-center h-full w-4/6 mx-auto">
                        <motion.div
                            className="space-y-4 md:space-y-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}>
                            <a
                                href="https://github.com/denyadev?tab=repositories"
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4 text-[#64F4AC] text-xl font-semibold">
                                ALL PROJECTS
                            </a>
                            <p className="text-gray-400">
                                * Some projects are not allowed to be published,
                                if you want to see more contact me
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="grid grid-rows-4 gap-8">
                    <div className="row-span-2">
                        <motion.div
                            initial={{ x: 100, y: -50 }}
                            whileInView={{ x: 0, y: 0 }}
                            transition={{ duration: 1 }}>
                            <ProjectCard
                                project={projects[1]}
                                color={
                                    "bg-gradient-to-bl from-[#2d3037] to-black/50"
                                }
                            />
                        </motion.div>
                    </div>
                    <div className="row-span-2">
                        <motion.div
                            initial={{ x: 150 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1 }}>
                            <ProjectCard
                                project={projects[2]}
                                color={
                                    "bg-gradient-to-br from-[#181A2D] to-black/90"
                                }
                            />
                        </motion.div>
                    </div>
                </div>
                <br className="lg:hidden" />
            </motion.div>
        </div>
    );
};

export default Portfolio;
