import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
    fullpage: any
}

const Hero = (props: Props) => {
    const { fullpage } = props
    const [text, count] = useTypewriter({
        words: ["creating visually appealing applications.", "solving design challenges.", "bringing ideas to life with code."],
        loop: true,
        delaySpeed: 1000
    })

    return (
        // bg-gradient-to-br from-[#2D2E32]
        <div className="bg-bg bg-cover"> 

        <div className="bg-black/20">
        <div className="h-screen container mx-auto">
            <div className="grid lg:grid-cols-2 h-full content-center">
                <motion.div className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                    <div className="z-20 space-y-12">
                        <div className='space-y-4'>
                            <p className="inline px-3 py-1 bg-[#64F4AC] rounded-sm text-black font-semibold">Front-End Developer</p>
                            <h1 className="text-7xl font-bold leading-[5.2rem]"><span className="font-normal text-2xl tracking-tighter text-gray-400">Hi, I am <br/></span>Denis Kosogov</h1>
                            <h1 className="text-xs md:text-2xl font-normal">
                                <span className="text-gray-400 tracking-tighter">I love {text}</span>
                                <Cursor cursorColor="#64F4AC" />
                            </h1>
                        </div>
                        <div className="space-x-8 flex justify-center md:justify-start">
                            <button onClick={() => fullpage.moveTo(3)} className="flex gap-2 items-center p-3 md:p-4 text-xl button-style">
                                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 9l-1-7h5.694c1.265 1.583 1.327 2 3.306 2h13l-1 5h-4.193l-3.9-3-1.464 1.903 1.428 1.097h-1.971l-3.9-3-2.307 3h-3.693zm-2 2l2 11h20l2-11h-24z"/></svg>
                                <span><a>Portfolio</a></span>
                            </button>
                            <button onClick={() => fullpage.moveTo(4)} className="flex gap-2 items-center border-b-2 border-[#63f3ac]/60  p-3 md:p-4 text-xl button-style bg-transparent shadow-none">
                                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>								
                                <span><a>Contact Me</a></span>
                            </button>
                        </div>

                        <div className="hidden md:block mouse_scroll absolute  ml-2">
                            <div className="mouse">
                                <div className="wheel"></div>
                            </div>
                            <div>
                                <span className="m_scroll_arrows unu"></span>
                                <span className="m_scroll_arrows doi"></span>
                                <span className="m_scroll_arrows trei"></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* <motion.div
                initial={{x: 0, y:70, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ x:170, y:0, opacity: 1 }} className="z-20 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]">
                    <Image className="z-20 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]" src={require('../public/heroimg.jpg')}/>
                </motion.div> */}
            </div>
            {/* <div className="w-full absolute top-[70%] bg-[#059669]/5 left-0 h-[400px] -skew-y-6"/> */}
        </div>
        </div>
            
        </div>
        
    )
}

export default Hero