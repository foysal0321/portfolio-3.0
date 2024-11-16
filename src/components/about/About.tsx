import React from 'react'
/* eslint-disable react/no-unescaped-entities */
import myimage from '@/assets/images/foysal-fb.jpg'
import Image from "next/image"


export default function About() {
  return (
    <div className='bg-[#232121]'>
      <div className="p-7 max-w-[1380px] mx-auto md:py-24 py-16" id="about">
        <div className="py-6">
          <h2 className="text-xl font-semibold tracking-wider">FULLSTACK DEVELOPER</h2>
          <p className="md:text-5xl text-3xl font-extrabold text-gray-200">About me</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-4 gap-6">
          <div className="">
            <Image className='' src={myimage} height={620} width={590} alt="back.png" />
          </div>
          <div data-aos="fade-in">
            <div className="">
              <p className="text-[19px] text-gray-300"><span className=''>I'</span>m Foysal Hossain, a Full-Stack Developer from Dhaka,  Bangladesh. I have a strong foundation in Web Programming and a passion for building visually appealing and user-friendly web experiences. <br /> I am dedicated to delivering innovative, efficient, and impactful solutions for my clients.</p>
            </div>
            <div>
              <h5 className="font-bold text-xl mt-12 text-gray-300">Technical</h5>
              <p className='mt-2 text-[17px]'>Right now you can find me hacking away primarily with React, Next Js, Redux, Node Js, Express, MongoDB, authentication, Tailwind CSS, Framer Motion and in general anything JavaScript / TypeScript, HTML and CSS related. </p>
            
              <p className='py-2 text-[17px]'>I've worked with my personal projets over the years, I specialize in developing web site/apps.</p>
            </div>
            <div>
              <h5 className="mt-8 font-bold text-xl py-2 text-gray-300">Education</h5>
              <p className='text-lg mt-1 text-[17px]'> I've Completed Web Development And Next Level MERN Stack Track Web Development Course from <a className="underline" href="https://shorturl.at/UYS00" target="blank">Programming Hero</a> | And completed Higher Secondary Certificate (HSC).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}