import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

type Props = {}

const Contact = (props: Props) => {

    const { register, handleSubmit } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:denis.kosogov@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div className="bg-gradient-to-br from-[#2D2E32]">
        <div className="h-screen container mx-auto">
                <motion.h3 className="uppercase tracking-[12px] text-white text-4xl absolute mt-[5%] mx-auto font-extrabold" initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>Contact Me</motion.h3>
                <motion.div className="grid lg:grid-cols-2 h-full content-center pb-32 lg:pb-0"
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    <motion.div className="space-y-6 md:space-y-10 mx-auto lg:mx-0" initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}>
                        <h4 className="text-xl md:text-3xl font-semibold"><span className="text-[#64F4AC] font-bold">Don&apos;t be shy. </span><span className="decoration-[#f7ab0a]/50">Drop me a line.</span></h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-5">
                                <MapPinIcon className="text-[#64F4AC] h-6 w-6 md:h-10 md:w-10 animate-pulse"/>
                                <p className="text-sm md:text-xl">Toronto, Canada</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <EnvelopeIcon className="text-[#64F4AC] h-6 w-6 md:h-10 md:w-10 animate-pulse"/>
                                <p className="text-sm md:text-xl">denis.kosogov@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-2 group">
                                <SocialIcon url="https://linkedin.com/in/denis-kosogov/" target="_blank" rel="noreferrer" fgColor="white" bgColor="#333438"/>
                                <a href="https://linkedin.com/in/denis-kosogov/" target="_blank" className='font-normal text-sm text-gray-400 group-hover:text-[#64F4AC]'>Linkedin</a>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <SocialIcon url="https://github.com/denyadev" target="_blank" rel="noreferrer" fgColor="white" bgColor="#333438"/>
                                <a href="https://github.com/denyadev" target="_blank" className='font-normal text-sm text-gray-400 group-hover:text-[#64F4AC]'>Github</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.form action="https://formsubmit.co/denis.kosogov@gmail.com" method="POST" className="flex flex-col space-y-2 w-fit mx-auto mt-6 md:mt-16 lg:mt-0"initial={{ x: 200, opacity: 0}}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
                            <input name="name" required placeholder="Name" className="contactInput w-full" type="text" />
                            <input name="email" required placeholder="Email" className="contactInput w-full" type="email" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://deniskosogov.com" />
                        </div>

                        <input name="_subject" required  placeholder="Subject" className="contactInput" type="text" />

                        <textarea name="message" required placeholder="Message" rows="3" className="contactInput" />
                        <button type="submit" className="button-style py-4 rounded-md text-white font-bold text-lg">Submit</button>
                    </motion.form>
                </motion.div>
                <div className="w-full absolute top-[80%] bg-[#059669]/5 left-0 h-[450px] skew-y-3">
                    <div className="space-y-2 text-white font-normal text-center flex flex-col -skew-y-3 items-center justify-center h-2/6 md:h-1/2">
                        <p className="text-xs md:text-base"><span className="font-sans text-md">&copy;</span> 2023 <span className="font-black">Denis Kosogov</span>. All rights reserved.</p>
                        <p className="text-xs md:text-base">Built with ❤️ in Toronto, ON</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact