/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import service1 from '../../assets/logo/service1.svg'
import service2 from '../../assets/logo/service2.svg'
import service3 from '../../assets/logo/service3.svg'

export default function Services() {
    return (
        <div className='bg-[#232121] '>
        <div className="p-7 max-w-[1380px] mx-auto py-24 " id="services">
            <div>
                <p className='md:text-5xl text-3xl font-extrabold text-gray-200 py-3 mt-8 tracking-wide'>Services</p>
                <p className='py-2 text-[18px]' data-aos="fade-out">
                I provide web development services, delivering user-friendly solutions with <br /> a collaborative and detail-oriented approach.
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8 ">
                    <div>
                        <Image src={service1} height={130} width={70} alt="logo" className='py-8' />
                        <p className="text-xl font-bold text-gray-100">What I can do for you</p>
                        <p className='py-4 '>Deliver faster, better products that your users will love. Here are the services I provide:</p>
                        <ul className='list-disc mx-4 text-gray-200'>
                            <li className="font-semibold text- py-2 mt-1 tracking-wide">Design Strategy</li>
                            <li className="font-semibold text- py-2 tracking-wide">Website Design</li>
                            <li className="font-semibold text- py-2 tracking-wide">Custom Website Development</li>
                            <li className="font-semibold text- py-2 tracking-wide">Front-end Development</li>
                            <li className="font-semibold text- py-2 tracking-wide">Full-stack Development</li>
                        </ul>
                    </div>
                    <div>
                        <Image src={service2} height={130} width={70} alt="logo" className='py-8' />
                        <p className="text-xl font-bold text-gray-100 tracking-wide">Working Process</p>
                        <p className='py-4 '>Starting with research based on client briefs, I plan and structure projects to meet goals and scope, then move into the development process:</p>
                        <ul className='list-disc mx-4 text-gray-200'>
                            <li className="font-semibold text- py-2 mt-1 tracking-wide">Research</li>
                            <li className="font-semibold text- py-2 tracking-wide">Strategy</li>
                            <li className="font-semibold text- py-2 tracking-wide">Development</li>
                        </ul>
                    </div>
                    <div>
                        <Image src={service3} height={130} width={70} alt="logo" className='py-8' />
                        <p className="text-xl font-bold text-gray-100">What you can expect</p>
                        <p className='py-4 '>I design products that go beyond aesthetics—they're shippable and usable:</p>
                        <ul className='list-disc mx-4 text-gray-200'>
                            <li className="font-semibold text- py-2 mt-1 tracking-wide">Clean and Functional: Intuitive designs that prioritize functionality.</li>
                            <li className="font-semibold text- py-2 tracking-wide">Device and User Friendly: Seamless experiences across all devices.</li>
                            <li className="font-semibold text- py-2 tracking-wide">Efficient and Maintainable: Code that is easy to manage and scale.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
