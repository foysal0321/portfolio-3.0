/* eslint-disable react/no-unescaped-entities */

async function About() {

  const res = await fetch(`https://portfolio-wine-three-46.vercel.app/skills`, {
    method: 'GET'
  })
  const skillData = await res.json()

  return (
    <div className="py-8 bg-slate-50" id="About">
      <div className=" md:p-14 p-6 " >
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="py-2 text-xl mt-8 text-stone-950">
          My keen interest in programming and design helps me find creative
          solutions to technical challenges and develop visually appealing
          websites. My extensive knowledge of technical standards helps me manage
          projects efficiently.
        </p>
        <h5 className="mt-6 font-bold text-lg py-2">Technical</h5>
        <div className="text-md ">
          <p className="text-gray-700 ">
            Right now you can find me hacking away primarily with React, Next Js,
            Redux, Node, Express, MongoDB, Firebase authentication, Tailwind CSS, Framer Motion and in general
            anything
            JavaScript / TypeScript, HTML and CSS related.
          </p>
          <p className="mt-3 text-gray-700">
            Currently I'm learning such as:
            {
              skillData.map((data: any) => <span key={data._id}> {data.name},</span>)
            }
          </p>


          <p className="mt-3 text-gray-700">
            I've worked with my personal projets over the years, I specialize in
            developing web site/apps.
          </p>

          <h5 className=" font-bold text-lg py-2 mt-6">Education</h5>
          <p className="text-gray-700 ">
            I've Completed Web Development Course And Next Level Web development from <a className="underline" href="https://web.programming-hero.com/" target="blank">Programming Hero</a> |
            And completed HSC from Noakhali Govt. College
          </p>

          <br />
          <div className="text-gray-700 mt-6 ">
            <p>Want to know more? Drop me a line</p>
            <p className="mt-1">
              <span className="font-semibold">Email :</span>{" "}
              foysalx4@gmail.com
            </p>
            <p className="mt-1">
              <span className="font-semibold ">What's app :</span>{" "}
              +8801869676921
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About