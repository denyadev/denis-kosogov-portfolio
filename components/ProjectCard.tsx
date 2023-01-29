import React from 'react'
import Image from 'next/image'

type Props = {
    project: any,
    color: string
}

const ProjectCard = ({ project, color }: Props) => {

  return (
        <article className={`${color} relative flex flex-col rounded-xl h-[260px] md:h-[420px] w-80% md:w-full overflow-hidden group shadow-md`}>
            <div className='flex justify-between px-6 py-10 md:p-14 group-hover:opacity-5'>
                <h4 className="text-xl md:text-3xl bg-clip-text text-[#63f3ac]">{project.title}</h4>
                <div className='flex gap-2'>
                    {project.stacktext.map(stack => (
                        <div key={stack} className="px-1 lg:px-2 bg-[#4e4d53] rounded-md text-[0.5rem] md:text-xs flex items-center">
                            {stack}
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative left-8 bottom-4 group-hover:opacity-5">
                <Image src={project.image} object-fit="contain"/>
            </div>

            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-between">
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center w-1/2 mx-auto justify-center hover:bg-black/70 ">
                    <svg className="fill-white" width="44" height="44" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fillRule="nonzero"/></svg>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center w-1/2 mx-auto justify-center hover:bg-black/70">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </div>
        </article>
  )
}

export default ProjectCard