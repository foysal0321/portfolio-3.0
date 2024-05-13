"use client"
//import DOMPurify from "dompurify"
import { blogData } from "./BlogData"

export default function Blog() {

  // const res = await fetch(`https://portfolio-wine-three-46.vercel.app/blogs`, {
  //   method: 'GET'
  // })
  // const blogData = await res.json()

  return (
    <div id="Blog" className="py-10">
      <div className="md:p-14 p-6">
        <h1 className="text-4xl font-semibold">Blog</h1>

        <div className="mt-8 py-2">
          {blogData.map((blog: any) => (
            <div key={blog._id} className="collapse collapse-arrow bg-base-200 my-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                {blog.name}
                <div
                  // dangerouslySetInnerHTML={{
                  //   __html: DOMPurify.sanitize(blog.description),
                  // }}
                ></div>
              </div>
              <div className="collapse-content">
                <a href="#">See More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
