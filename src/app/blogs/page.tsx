import Image from "next/image"
import Link from "next/link"

export default async function BlogPage() {

  const res = await fetch(`https://portfolio-eta-seven-59.vercel.app/blogs`, {
    next: {
      revalidate: 30
    }
  })
  const blogData = await res.json()
  //console.log(blogData);


  return (
    <div className="max-w-[1380px] mx-auto py-16 p-5 ">
      <h2 className="py-2 text-3xl font-bold mt-12">All Blogs</h2>
      {
        blogData.map((blog: any, ind: string) => (
          <div key={ind} className="grid grid-cols-1 md:grid-cols-2 py-6">
            <Image className="h-[350px] w-[690px]" src={blog.image} height={300} width={600} alt='focus' />
            <div className="bg-[#1b1a1a] text-white p-5">
              <div className="max-w-[500px] mx-auto translate-y-10">
                <p className="py-2">{blog.date} {blog.duration} </p>
                <p className="font-bold text-4xl mt-6">{blog.title}</p>
                <Link href={`/blogs/${blog._id}`}>
                  <p className="py-2 mt-8 font-semibold">Read the article </p>
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
