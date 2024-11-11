import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function page({ params }: any) {

  const res = await fetch(`https://portfolio-eta-seven-59.vercel.app/blogs/${params.blogId}`, {
    next: {
      revalidate: 30
    }
  })
  const blog = await res.json()

  return (
    <div className='max-w-[1380px] mx-auto py-16 p-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 py-6 mt-12">
        <div className="translate-y-20 ">
          <p className="py-2">{blog.date} <span className='mx-1'>{blog.duration}</span></p>
          <p className="font-extrabold text-5xl mt-6 ">{blog.title}</p>
        </div>
        <Image className="h-[350px] w-[690px]" src={blog.image} height={300} width={600} alt='focus' />
      </div>
      <p className='py-16 text-lg mt-8'>
        {blog.description}
      </p>
      <Link href='/blogs'>
        <p className="text-2xl font-semibold py-8 underline"> All Articals</p>
      </Link>
    </div>
  )
}

export default page