import type { FullpageApi } from "@fullpage/react-fullpage";
import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {
    fullpage: FullpageApi;
};

const Header = (props: Props) => {
    const { fullpage } = props;
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (fullpage) {
            if (fullpage.getActiveSection().index !== 0) {
                setNavbar(false);
            } else {
                setNavbar(true);
            }
        }
    }, [fullpage]);

    const handleClick = () => setOpen(!open);

    return (
        <header className={navbar ? "header-active" : "header"}>
            <div className="container flex justify-between items-center mx-auto py-4 text-[#fefefe] text-lg font-bold">
                <p
                    onClick={() => fullpage.moveTo(1)}
                    className="text-3xl md:inline-flex tracking-tighter text-white cursor-pointer">
                    denya
                    <span className="font-normal text-[#64F4AC]">.dev</span>
                </p>
                <motion.div
                    className="hidden xl:flex  flex-row items-center text-gray-300 cursor-pointer"
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}>
                    <div className="space-x-16">
                        {/* <p onClick={() => fullpage.moveTo(2)} className="hidden md:inline-flex text-sm text-white font-normal hover:text-[#64F4AC]">about:</p> */}
                        <p
                            onClick={() => fullpage.moveTo(3)}
                            className="hidden md:inline-flex text-sm text-white font-normal hover:text-[#64F4AC]">
                            portfolio:
                        </p>
                        <p
                            onClick={() => fullpage.moveTo(4)}
                            className="hidden md:inline-flex text-sm text-white font-normal hover:text-[#64F4AC]">
                            contact me:
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-row items-center gap-8"
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}>
                    {/* Socials */}
                    <div className="hidden xl:flex items-center group">
                        <SocialIcon
                            url="https://linkedin.com/in/denis-kosogov/"
                            target="_blank"
                            fgColor="white"
                            bgColor="transparent"
                        />
                        <a
                            href="https://linkedin.com/in/denis-kosogov/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-normal text-xs text-gray-400 group-hover:text-[#64F4AC]">
                            Linkedin
                        </a>
                    </div>
                    <div className="hidden xl:flex  items-center group">
                        <SocialIcon
                            url="https://github.com/denyadev"
                            target="_blank"
                            fgColor="white"
                            bgColor="transparent"
                        />
                        <a
                            href="https://github.com/denyadev"
                            target="_blank"
                            rel="noreferrer"
                            className="font-normal text-xs text-gray-400 group-hover:text-[#64F4AC]">
                            Github
                        </a>
                    </div>
                    <div className="hidden xl:flex bg-[#333438] rounded-full p-0 hover:bg-[#4c4d52]">
                        <SocialIcon
                            className="cursor-pointer"
                            network="email"
                            fgColor="#64F4AC"
                            bgColor="transparent"
                            onClick={() => fullpage.moveTo(4)}
                        />
                    </div>
                    <div className="xl:hidden" onClick={handleClick}>
                        <svg
                            width="34"
                            height="24"
                            viewBox="0 0 26 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
            {open && (
                <div className="lg:hidden flex flex-col">
                    {/* <p
                        onClick={() => fullpage.moveTo(2)}
                        className="inline-flex text-sm text-white font-normal hover:text-[#64F4AC] p-8 bg-black/70 w-full justify-end">
                        about:
                    </p> */}
                    <p
                        onClick={() => fullpage.moveTo(3)}
                        className="inline-flex text-sm text-white font-normal hover:text-[#64F4AC] p-8 bg-black/70 w-full justify-end">
                        portfolio:
                    </p>
                    <p
                        onClick={() => fullpage.moveTo(4)}
                        className="inline-flex text-sm text-white font-normal hover:text-[#64F4AC] p-8 bg-black/70 w-full justify-end">
                        contact me:
                    </p>
                </div>
            )}
        </header>
    );
};

export default Header;
