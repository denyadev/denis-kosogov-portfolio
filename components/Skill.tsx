import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
    directionLeft?: boolean;
    image?: any;
};

const Skill = ({ directionLeft, image }: Props) => {
    return (
        <div className="group relative flex">
            <motion.div
                initial={{ x: directionLeft ? -100 : 150, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={{ opacity: 1, x: 0 }}>
                <div className="w-10 md:w-20 lg:w-24">
                    <Image
                        src={image}
                        className="opacity-25 group-hover:opacity-100 border border-gray-500 object-cover filter group-hover:grayscale-0 grayscale transition duration-300 ease-in-out"
                        object-fit="contain"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Skill;
