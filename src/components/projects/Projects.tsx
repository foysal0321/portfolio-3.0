/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';


export default async function Projects() {

  const res = await fetch(`https://portfolio-eta-seven-59.vercel.app/projects`, {
    next: {
      revalidate: 30
    }
  })
  const projects = await res.json()

  return (
    <div className='bg-[#232121]'>
      <div className="md:py-24 py-16 max-w-[1380px] mx-auto p-7" id="projects">
        <div className=" flex flex-wrap justify-between py-12">
          <div className="">
            <h1 className="md:text-5xl text-3xl font-extrabold text-gray-100">Projects</h1>
            <p className=" py-5 text-xl">
              Swipe or drag below to see a small selection on projects i've worked on.
            </p>
          </div>
          <div className='flex flex-wrap'>
                <Link href={`/projects`} className="py-2 mt-4 font-semibold">View all projects </Link>
                <ArrowRight className='mx-1 mt-6' />
                </div>
        </div>
        <div className="py-6 grid lg:grid-cols-2 grid-cols-1 gap-10 mx-auto">

          {
            projects.map((project: any, ind: string) => (
              <div key={ind} className="flex flex-wrap justify-between  rounded-2xl border-2 border-zinc-700 " data-aos="fade-out">
                <div className="max-w-[290px] p-3">
                  <h2 className="card-title py-6 text-gray-100">{project.name}</h2>
                  <p className=''>{project.description}</p>
                  <div className='mt-12 flex hover:text-gray-500'>
                    <p className="">
                      <Link href={`/projects/${project._id}`} className="font-semibold text-gray-100 text-gray-100hover:text-gray-500">View Project </Link>
                    </p>
                    <span><ArrowRight className='mx-1' /></span>
                  </div>
                </div>
                <Image className="h-[280px] rounded-2xl"
                  src={project.image}
                  alt="Shoes" height={200} width={300} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
