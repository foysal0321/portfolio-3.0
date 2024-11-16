// https://ayooladev.vercel.app/contact

"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/foysallogo.png'
import Image from 'next/image'


export default function Navbar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, item: <Link href='/#about'>About</Link> },
    { id: 2, item: <Link href='/#services'>Services</Link> },
    { id: 3, item: <Link href='/#projects'>Projects</Link> },
    { id: 4, item: <Link href='/#skills'>Skills</Link> },
    { id: 5, item: <Link href='/#blogs'>Blogs</Link> },
    { id: 6, item: <Link href='/#contact'>Contact</Link> },
  ];

  return (
    <div className="bg-[#232121] text-white fixed w-full z-30 border-b-2 border-b-zinc-800">
      <div className='flex justify-between items-center h-20 max-w-[1380px] mx-auto text-zinc-950 p-4'>
        <Link href='/'>
          <Image src={logo} height={180} width={150} alt='logo' className='mt-2' />
        </Link>
        <ul className='hidden lg:flex'>
          {navItems.map((v: any) => (
            <li
              key={v.id}
              className={`p-2 text-white text-[18px] racking-wide rounded-xl mx-4 m-1 duration-300 hover:text-gray-500`}>
              {v.item}
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='block lg:hidden text-white'>
          {nav ? <X /> : <Menu />}
        </div>
        <ul
          className={
            nav
              ? 'fixed lg:hidden left-0 top-0 w-[280px] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }>
          {navItems.map((v: any) => (
            <li
              key={v.id}
              className='p-4 text-white border-b rounded-xl cursor-pointer border-gray-600'>
              {v.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
