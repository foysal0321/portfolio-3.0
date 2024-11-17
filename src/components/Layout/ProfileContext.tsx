/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function ProfileContext() {
  return (
    <div className="">
      <div className="p-5">
        <div className="pt-1 ">
          <h4 className="text-[21px] mt-3 tracking-wide">
            Hello, I'm  </h4>
            <h2 className="md:text-[52px] text-4xl text-gray-200 py-4 font-semibold ">Foysal Hossain</h2>         
          <h1 className="md:text-2xl text-xl font-semibold mt-4  text-gray-300 text-wrap tracking-wide">
            Web Developer & Designer
          </h1>
          <h4 className="mt-14 text-[19px]" data-aos="fade-out">
          Building user-friendly interfaces for fast-growing startups <br /> using modern frontend technologies.                       
          </h4>
          <Link href='/#contact'>
            <button className="btn btn-outline rounded-full mt-12 text-[16px] " data-aos="fade-up">
              Book a call
            </button>
          </Link>

          <div className="mt-28 info text-[18px] tracking-wide">
            <h2 className="text-gray-400">
              Find me at
               <span className="text-white cursor-pointer ml-1">
                <a
                  href="https://www.linkedin.com/in/foysal-hossain/"
                  target="_blank"
                  className="underline mx-1"
                >
                  LinkedIn
                </a>
              </span>
             ,
              <span className="text-white ml-2">
                <a
                  href="https://github.com/foysal0321"
                  className="underline"
                  target="_blank"
                >
                  Github
                </a>
              </span>
              , and
              <span className="text-white ml-2">
                <a
                  href="https://twitter.com/Foysal_09"
                  className="underline "
                  target="_blank"
                >
                  Twitter
                </a>
              </span>
              .
            </h2>
            <h4 className="text-gray-400 mt-2">
              Download my
              <span className="text-white cursor-pointer ">
                <a
                  href="https://drive.google.com/file/d/1jDS8-wr8MZdyjlSY8LNG0puWQz09Ig5f/view"
                  target="_blank"                  
                  className="underline mx-2"
                >
                  Resume
                </a>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
