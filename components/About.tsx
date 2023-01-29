import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="bg-[#25262A]">
        <div className="h-screen container mx-auto">
            <h3 className="uppercase tracking-[12px] text-white text-4xl absolute mt-[5%] mx-auto font-extrabold">About</h3>
            <div className="grid lg:grid-cols-2 h-full content-center gap-12">
                <div className="space-y-8 px-0 md:px-10 md:order-last mx-8 md:mx-0 lg:mx-0 mt-16">
                    <div className="grid grid-cols-4 gap-2">
                        <Skill image={require('../public/stack/html.svg')}/>
                        <Skill image={require('../public/stack/css.svg')}/>
                        <Skill image={require('../public/stack/javascript.svg')}/>
                        <Skill image={require('../public/stack/react.svg')}/>
                        <Skill image={require('../public/stack/redux.svg')}/>
                        <Skill image={require('../public/stack/next.png')}/>
                        <Skill image={require('../public/stack/tailwind.svg')}/>
                        <Skill image={require('../public/stack/bootstrap.svg')}/>
                        <Skill directionLeft={true} image={require('../public/stack/nodejs.svg')}/>
                        <Skill directionLeft={true} image={require('../public/stack/express.png')}/>
                        <Skill directionLeft={true} image={require('../public/stack/python.svg')}/>
                        <Skill directionLeft={true} image={require('../public/stack/django.svg')}/>
                        <Skill directionLeft={true} image={require('../public/stack/postgresql.svg')}/>
                        <Skill directionLeft={true} image={require('../public/stack/mongodb.svg')}/>
                        <Skill directionLeft={true} image={require('../public/stack/typescript.svg')}/>
                        <Skill directionLeft={true} image={require('../public/stack/git-icon.svg')}/>
                    </div>
                </div>
                <motion.div className="space-y-8 px-0 md:px-10 md:order-last"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}>
                    <p className="text-[#64F4AC] text-base md:text-lg">Introduction</p>
                    <h4 className="text-2xl md:text-4xl lg:text-5xl font-normal">Here is a <span className="underline decoration-[#64F4AC]">little</span> background</h4>
                    <p className="text-gray-400 text-xs md:text-base leading-7">A recent grad with a passion for web development and a knack for crafting user-friendly interfaces. With a year of experience under my belt and a solid understanding of back-end tech, I&apos;m ready to bring my skills to a new role and continue growing as a developer. Bonus: I&apos;ve got mad problem-solving and communication skills from teaching programming. Let&apos;s build something great together!
                    </p>
                    <a href="/api/resume" download>
                        <button className="button-style p-4 flex items-center gap-2 mt-8">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm-4 10h3v-4h2v4h3l-4 4-4-4z"/></svg>
                            Download Resume
                        </button>
                    </a>
                </motion.div>
                </div>
            </div>
    </div>
    

  )
}

export default About