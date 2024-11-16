import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='py-16 flex justify-center items-center'>
        <div className='max-w-[600px] mx-auto py-24 text-gray-100'>        
            <h2 className='text-xl py-4'>404 | This page could not be found.</h2>
            <Link className="underline " href="/">Return Home</Link>
        </div>
  </div>
  )
}
