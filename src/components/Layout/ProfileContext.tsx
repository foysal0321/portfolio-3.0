/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function ProfileContext() {
  return (
    <div className="">
      <div className="text-white p-5">
        <div className="pt-1 ">
          <h1 className="md:text-4xl text-3xl font-semibold mt-10 header-title text-gray-100 text-wrap">
            Hello. I'm a Frontend
          </h1>
          <h1 className="md:text-6xl text-3xl font-semibold mt-4 header-title text-gray-100 text-wrap">
            Web Developer !
          </h1>
          <h4 className="mt-12 text-gray-300 text-[19px]" data-aos="fade-out">
            My name is Foysal Hossain, a Fullstack Web Developer
            <br />
            based in Bangladesh. I create user-friendly interfaces <br /> for fast-growing startups.
          </h4>
          <Link href='/#contact'>
            <button className="btn btn-outline btn-md spe btn-accent rounded-full mt-12 text-[17px] " data-aos="fade-up">
              Book a call
            </button>
          </Link>

          <div className="mt-28 info text-[18px] tracking-wide">
            <h2 className="text-gray-400">
              Find me at
              <span className="text-white ml-2">
                <a
                  href="https://twitter.com/Foysal_09"
                  className="underline "
                  target="_blank"
                >
                  Twitter
                </a>
              </span>,
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
              <span className="text-white cursor-pointer ml-1">
                <a
                  href="https://www.linkedin.com/in/foysal-hossain/"
                  target="_blank"
                  className="underline"
                >
                  LinkedIn
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
                  className="underline ml-1"
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
