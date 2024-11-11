import React from 'react'
import Image from 'next/image'
import javascript from '../../assets/logo/javascript.png'
import typescript from '../../assets/logo/typescript.png'
import react from '../../assets/logo/react.png'
import redux from '../../assets/logo/redux.png'
import nextjs from '../../assets/logo/nextjs.png'
import nodejs from '../../assets/logo/nodejs-removebg-preview.png'
import mongodb from '../../assets/logo/mongodb.png'
import postsql from '../../assets/logo/postsql.png'
import figma from '../../assets/logo/figma.png'
import canva from '../../assets/logo/canva.png'
import vscode from '../../assets/logo/vscode.png'
import github from '../../assets/logo/github.png'
import netlify from '../../assets/logo/netlify.png'
import vercel from '../../assets/logo/vercel.svg'
import firebase from '../../assets/logo/firebase.png'

export default function Skills() {
    return (
        <div className='bg-[#232121] ' id='skills' >
        <div className='p-7 max-w-[1380px] mx-auto md:py-24 py-16 text-black" id="about' data-aos="fade-out">
            <h2 className='md:text-5xl text-3xl font-extrabold py-8 text-gray-100'>Skills</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8 mx-auto">
                <div className='max-w-[400px] h-[250px] rounded-2xl border-2 border-zinc-700'>
                    <div className='text-gray-200 text-center p-4 py-10'>
                        <h2 className='text-2xl font-semibold '>Language</h2>
                        <div className='flex justify-around py-8'>
                            <div>
                                <Image src={javascript} width={60} height={40} alt='js' />
                                <p className='text-md font-semibold text-gray-500 py-3'>JavaScript</p>
                            </div>
                            <div>
                                <Image src={typescript} width={60} height={40} alt='js' className='w-[60px] h-[60px]' />
                                <p className='text-md font-semibold text-gray-500 py-3'>TypeScript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[400px] h-[250px] rounded-2xl border-2 border-zinc-700'>
                    <div className='text-gray-200 text-center p-4 py-10'>
                        <h2 className='text-2xl font-semibold '>Freamwork</h2>
                        <div className='flex justify-around py-8'>
                            <div>
                                <Image src={react} width={60} height={40} alt='js' />
                                <p className='text-md font-semibold text-gray-500 py-3 '>React</p>
                            </div>
                            <div>
                                <Image src={redux} width={50} height={40} alt='js' className='h-[52px]' />
                                <p className='text-md font-semibold text-gray-500 py-3 mt-2'>Redux</p>
                            </div>
                            <div>
                                <Image src={nextjs} width={60} height={40} alt='js' className='w-[60px] h-[60px] ' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Next Js</p>
                            </div>
                            <div>
                                <Image src={nodejs} width={60} height={40} alt='js' className='w-[60px] h-[60px]' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Node Js</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[400px] h-[250px] rounded-2xl border-2 border-zinc-700'>
                    <div className='text-gray-100 text-center p-4 py-10'>
                        <h2 className='text-2xl font-semibold '>Database</h2>
                        <div className='flex justify-around py-8'>
                            <div>
                                <Image src={mongodb} width={60} height={40} alt='js' className='w-[80px] h-[60px]' />
                                <p className='text-md font-semibold text-gray-500 py-3'>MongoDB</p>
                            </div>
                            <div>
                                <Image src={postsql} width={60} height={40} alt='js' className='w-[60px] h-[60px]' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Postgresql</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[400px] h-[250px] rounded-2xl border-2 border-zinc-700'>
                    <div className='text-gray-200 text-center p-4 py-10'>
                        <h2 className='text-2xl font-semibold '>Tools</h2>
                        <div className='flex justify-around py-8'>
                            <div>
                                <Image src={figma} width={60} height={40} alt='js' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Figma</p>
                            </div>
                            <div>
                                <Image src={canva} width={60} height={40} alt='js' className='w-[60px] h-[60px]' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Canva</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[400px] h-[250px] rounded-2xl border-2 border-zinc-700'>
                    <div className='text-gray-200 text-center p-4 py-10'>
                        <h2 className='text-2xl font-semibold '>IDE</h2>
                        <div className='flex justify-around py-8'>
                            <div>
                                <Image src={vscode} width={60} height={40} alt='js' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Vs Code</p>
                            </div>
                            <div>
                                <Image src={github} width={60} height={40} alt='js' className='w-[60px] h-[60px]' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Github</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[400px] h-[250px] rounded-2xl border-2 border-zinc-700'>
                    <div className='text-gray-200 text-center p-4 py-10'>
                        <h2 className='text-2xl font-semibold '>Deployment</h2>
                        <div className='flex justify-around py-8'>
                            <div>
                                <Image src={netlify} width={60} height={40} alt='js' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Netlify</p>
                            </div>
                            <div>
                                <Image src={vercel} width={60} height={40} alt='js' className='w-[60px] h-[60px]' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Vercel</p>
                            </div>
                            <div>
                                <Image src={firebase} width={60} height={40} alt='js' className='w-[60px] h-[60px]' />
                                <p className='text-md font-semibold text-gray-500 py-3'>Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
        </div>
    )
}
