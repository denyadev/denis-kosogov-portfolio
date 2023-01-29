import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
    directionLeft?: boolean;
    image?: any
}

const Skill = ({ directionLeft, image }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.div 
        initial={{ x: directionLeft ? -50 : 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileInView={{ opacity: 1, x: 0}}>
            <div className="w-10 md:w-20 lg:w-24">
            <Image src={image}
            className="border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
            object-fit="contain"/>
            </div>
        </motion.div>
        {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-24 md:w-24 xl:h-28 xl:w-28 z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div> */}
    </div>
  )
}

export default Skill