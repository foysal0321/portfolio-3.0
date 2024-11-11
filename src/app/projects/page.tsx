import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
            <Image className="h-[430px] w-[690px] " src={project.image} height={300} width={600} alt='focus' />
            <div className="bg-[#1b1a1a] md:h-[270px] h-[320px] text-white p-5 md:translate-y-20">
              <div className="">
                <p className="py-4 text-2xl">Real Estate Business Website</p>
                <p className="font-bold text-5xl mt-6">{project.name}</p>
                <Link href={`/projects/${project._id}`}>
                  <p className="py-2 mt-10 font-semibold">View Project </p>
                </Link>
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