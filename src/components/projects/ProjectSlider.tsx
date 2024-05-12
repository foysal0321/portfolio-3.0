/* eslint-disable @next/next/no-async-client-component */
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";


async function ProjectSlider() {

  const res = await fetch(`http://localhost:5000/projects`, {
    next: {
      revalidate: 30
    }
  })
  const projectsData = await res.json()

  return (
    <div className=" ">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[330px] md:w-[750px] flex flex-wrap"
      >
        {projectsData.map((data: any) => (
          <SwiperSlide key={data._id}>
            <div className="hero py-10 ">
              <div className="hero-content flex-col lg:flex-row text-black">
                <Image src={data.image} width={330} height={420} alt="project" className="h-[420px]" />
                <div>
                  <a href={data.liveurl} target="_blank">
                    <h1 className="text-xl font-bold m-2 hover:text-slate-500">
                      {data.name}
                    </h1>
                  </a>
                  <h5 className="text-[17px] m-2 text-wrap mt-8 text-zinc-950">
                    {data.description}
                  </h5>
                  <p className="py-6 text-sm m-2 text-gray-900">
                    {data.features1}, <br /> <br /> {data.features2}
                  </p>
                  <p className="py-6 text-sm m-2 ">
                    Used Technologies: <span className="text-gray-900">{data.technology}</span>.
                  </p>
                  <div className="flex flex-wrap lg:mt-8 mt-1 md:p-1">
                    <a href={data.liveurl} target="_blank">
                      <button className="btn btn-xs btn-outline m-2">
                        Live site
                      </button>
                    </a>
                    <a href={data.clienturl} target="_blank">
                      <button className="btn btn-xs btn-outline m-2">
                        Client site code
                      </button>
                    </a>
                    <a href={data.serverurl} target="_blank">
                      <button className="btn btn-xs btn-outline m-2">
                        Server site code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;