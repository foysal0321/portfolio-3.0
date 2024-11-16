import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react';

async function page() {

  const res = await fetch(`https://portfolio-eta-seven-59.vercel.app/projects`, {
    next: {
      revalidate: 30
    }
  })
  const projects = await res.json()

  return (
    <div className="max-w-[1280px] mx-auto py-16 p-5">
      <h2 className="py-2 text-3xl font-bold mt-12">All Projects</h2>
      {
        projects.map((project: any, ind: string) => (
          // eslint-disable-next-line react/jsx-key
          <div key={ind} className="grid grid-cols-1 md:grid-cols-2 py-6">
            <Image className="h-[380px] w-[690px] " src={project.image} height={300} width={600} alt='focus' />
            <div className="bg-[#1b1a1a]  p-5 ">
              <div className="">
                <p className="font-bold md:text-4xl text-2xl text-gray-100 mt-6">{project.name}</p>
                <p className="text-xl py-4 mt-2">{project.description}</p>
                <div className='flex flex-wrap mt-4'>
              <Link href={`/projects/${project._id}`} className="py-2 mt-4 font-semibold">View Project</Link>
              <ArrowRight className='mx-1 mt-6' />
               </div>    
              </div>
            </div>
          </div>
        ))
      }
      <div className="join py-12">
        <button className="join-item btn btn-lg btn-active">1</button>
        <button className="join-item btn btn-lg ">2</button>
        <button className="join-item btn btn-lg">3</button>
        <button className="join-item btn btn-lg">4</button>
      </div>
    </div>
  )
}

export default page