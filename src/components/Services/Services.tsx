/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import service1 from '../../assets/logo/service1.svg'
import service2 from '../../assets/logo/service2.svg'
import service3 from '../../assets/logo/service3.svg'

export default function Services() {
    return (
        <div className='bg-[#232121] text-[#D9D9D9]'>
        <div className="p-7 max-w-[1380px] mx-auto py-24 " id="services">
            <div>
                <p className='text-2xl font-semibold text-gray-100 py-3  mt-8'>SERVICES</p>
                <h4 className='text-3xl md:text-5xl py-2 font-bold ' text-3xl font-semibold data-aos="fade-out">Code that solves problems, <br /> one product at a time.</h4>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8 ">
                    <div>
                        <Image src={service1} height={130} width={70} alt="logo" className='py-8' />
                        <p className="text-xl font-bold text-gray-100">What I can do for you</p>
                        <p className='py-4 '>Deliver faster, better products that your users will love. Here are the services I provide:</p>
                        <ul className='list-disc mx-4 text-gray-200'>
                            <li className="font-semibold text- py-2 mt-1">Design Strategy</li>
                            <li className="font-semibold text- py-2">Website Design</li>
                            <li className="font-semibold text- py-2">Custom Website Development</li>
                            <li className="font-semibold text- py-2">Frontend Development</li>
                            <li className="font-semibold text- py-2">Fullstack Development</li>
                        </ul>
                    </div>
                    <div>
                        <Image src={service2} height={130} width={70} alt="logo" className='py-8' />
                        <p className="text-xl font-bold text-gray-100">Working Process</p>
                        <p className='py-4 '>Every designer needs the right tools to craft the perfect product. Thankfully, I'm proficient in multiple platforms:</p>
                        <ul className='list-disc mx-4 text-gray-200'>
                            <li className="font-semibold text- py-2 mt-1">Research</li>
                            <li className="font-semibold text- py-2">Strategy</li>
                            <li className="font-semibold text- py-2">Development</li>
                        </ul>
                    </div>
                    <div>
                        <Image src={service3} height={130} width={70} alt="logo" className='py-8' />
                        <p className="text-xl font-bold text-gray-100">What you can expect</p>
                        <p className='py-4 '>I design products that go beyond aesthetics—they're shippable and usable:</p>
                        <ul className='list-disc mx-4 text-gray-200'>
                            <li className="font-semibold text- py-2 mt-1">Clean and Functional: Intuitive designs that prioritize functionality.</li>
                            <li className="font-semibold text- py-2">Device and User Friendly: Seamless experiences across all devices.</li>
                            <li className="font-semibold text- py-2">Efficient and Maintainable: Code that is easy to manage and scale.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
