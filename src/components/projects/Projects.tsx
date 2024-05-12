/* eslint-disable react/no-unescaped-entities */
import ProjectSlider from "./ProjectSlider";

export default function Projects() {
  return (
    <div className="py-24 " id="Projects">
      <div className="p-6 md:ml-6">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className=" text-gray-500 py-3 ">
          Swipe or drag below to see a small selection on projects i've worked on.
        </p>
      </div>
      <ProjectSlider />
    </div>
  )
}
