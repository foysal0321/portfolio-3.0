import Image from "next/image"

export default async function BlogPage() {
  const res = fetch(`https://portfolio-wine-three-46.vercel.app/blogs`,{
    next:{
      revalidate: 30
    }
  })
  const blogData = await (await res).json()

  return (
    <div className="max-w-[1300px] mx-auto py-16 p-5">
      <h2>All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          blogData.map((blog: any) => <div key={blog._id}>
            <Image src={blog.image} width={350} height={250} alt='blog' />
            <h2>{blog.title}</h2>
            <p>{blog.description}.slice(0, 30)</p>
            <button>See More</button>
          </div>)
        }
      </div>
    </div>
  )
}
