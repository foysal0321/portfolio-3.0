import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function projectDetailpage({ params }: any) {

    const res = await fetch(`https://portfolio-eta-seven-59.vercel.app/projects/${params.projectId}`, {
        next: {
            revalidate: 30
        }
    })
    const project = await res.json()
    console.log(project?.name);

    return (
        <div className='max-w-[1380px] mx-auto py-16 p-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 py-16 mt-12">
                <div className="">
                    <p className="font-extrabold text-3xl mt-6 ">{project?.name}</p>
                    <div className=' mt-16 py-6'>
                        <a href={project.liveurl} target="_blank" className="font-bold text-xl underline py-4">Visit Live URL</a>
                    </div>
                    <a href={project.clienturl} className="font-bold text-xl py-4 underline">Visit Github RepositoryL</a>
                </div>
                <div>
                    <h5 className='text-2xl font-semibold md:py-4 mt-8'>Project Overview</h5>
                    <p className='text-xl py-4'>{project.description}</p>
                </div>
            </div>
            <div className="py-12">
                <Image className="h-[430px] w-[900px] py-2" src={project.image} height={300} width={600} alt='focus' />
                <p className='py-12 text-xl '>{project.description}</p>
                <p className='py-1'># {project.features1}</p>
                <p className='py-1'># {project.features2}</p>
                <p className='py-8'><span className="text-lg font-semibold">Used Technology :</span>  {project.technology}</p>
            </div>
            <Link href='/projects'>
                <p className="text-2xl font-semibold py-8 underline"> All Projects</p>
            </Link>
        </div>
    )
}

export default projectDetailpage


