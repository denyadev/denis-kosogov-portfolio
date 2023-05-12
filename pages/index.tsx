import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home: NextPage = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const anchors = ["home", "portfolio", "contact"];
    return (
        <div className="bg-[#25262A] h-full text-white z-0 font-roboto">
            <Head>
                <title>Denis's Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ReactFullpage
                navigation
                navigationTooltips={anchors}
                licenseKey={"WFK68-87SJJ-AII9I-VQ0HI-NYYVM"}
                scrollingSpeed={1000}
                afterLoad={(origin, destination) => {
                    setActiveSection(destination.item.id);
                }}
                onLeave={(origin, destination) => {
                    setActiveSection(destination.item.id);
                }}
                render={({ state, fullpageApi }) => (
                    <ReactFullpage.Wrapper>
                        <Header fullpage={fullpageApi} />
                        <section id="hero" className="section">
                            <Hero fullpage={fullpageApi} />
                        </section>
                        {/* <section id="about" className="section">
                    <About />
                </section> */}
                        <section id="portfolio" className="section">
                            <Portfolio />
                        </section>
                        <section id="contact" className="section">
                            <Contact />
                        </section>
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    );
};

export default Home;
