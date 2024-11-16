
import Link from "next/link"
import { ArrowRight } from 'lucide-react';


export default async function Blog() {

  const res = await fetch(`https://portfolio-eta-seven-59.vercel.app/blogs`, {
    next: {
      revalidate: 30
    }
  })
  const blogs = await res.json()

  return (
    <div className='bg-[#232121]'>
      <div className="p-7 max-w-[1380px] mx-auto" id="blogs">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-20 gap-6">
          <div className="" data-aos="fade-out">
            <h2 className="text-xl font-semibold tracking-wider "> ARTICLES
            </h2>
            <p className="md:text-5xl text-3xl font-bold text-gray-200">Latest Articles</p>
            <div className='flex flex-wrap'>
              <Link href={`/blogs`} className="py-2 mt-4 font-semibold">View all blogs </Link>
              <ArrowRight className='mx-1 mt-6' />
            </div>
          </div>
          <div>
            {
              blogs.map((blog: any, ind: string) => (
                <><div key={ind} className=" py-4">
                  <p className="py-2">{blog.date} <span className='mx-1'> {blog.duration}</span> </p>
                  <p className="font-semibold md:text-2xl text-xl mt-2 text-gray-200"> {blog.title}</p>
                  <div className='flex flex-wrap'>
                    <Link href={`/blogs/${blog._id}`} className="py-2 mt-4 font-semibold hover:text-gray-100">Read the article </Link>
                    <ArrowRight className='mx-1 mt-6' />
                  </div>
                </div><hr className='text-gray-600' /></>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}