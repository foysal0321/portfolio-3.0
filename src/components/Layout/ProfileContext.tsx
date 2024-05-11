/* eslint-disable react/no-unescaped-entities */
import ButtonLink from "@/ui/ButtonLink";
import Navbar from "../navbar/Navbar";
import {Link} from 'react-scroll'

export default function ProfileContext() {
  return (
    <div className="lg:fixed py-8">
    <div className="text-white p-10 lg:p-16">
      <Navbar />

      <div className="pt-10">
        <h1 className="md:text-4xl text-3xl font-semibold mt-20 header-title text-gray-200 text-wrap">
          Hello. I'm a frontend
        </h1>
        <h1 className="md:text-4xl text-3xl font-semibold mt-4 header-title text-gray-200 text-wrap">
          web developer
        </h1>

        <h4 className="mt-8 text-gray-300">
          My name is Foysal Hossain. I craft user interface using <br />{" "}
          modren Frontend web technologys.
        </h4>
       
        <ButtonLink context={'Contact'}>
          <button className="btn btn-outline btn-md btn-accent rounded-full mt-12  text-sm ">
            Let's Work Together
          </button>
        </ButtonLink>

        <div className="mt-24 info">
          <h2 className="text-gray-400">
            Find me at
            <span className="text-white ml-2">
              <a
                href="https://twitter.com/Foysal_09"
                className="underline"
                target="_blank"
              >
                Twitter
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

          <h4 className="text-gray-400 mt-1">
            Download my
            <span className="text-white cursor-pointer ">
              <a
                href="https://drive.google.com/file/d/1jDS8-wr8MZdyjlSY8LNG0puWQz09Ig5f/view"
                target="_blank"
                data-aos="fade-down"
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
