import React, { useState } from "react"

const Projects = () => {
  const [showMore, setShowMore] = useState(false)

  const projects = [
    {
      name: "CampusStay",
      description:
        "Campus Stay helps students find nearby accommodation with ease, offering listings, reviews, and a map view.",
      link: "https://github.com/Rajeev12R/CampusStay",
    },
    {
      name: "Buzz",
      description:
        "Buzz brings conversations to life with real-time messaging and instant connections. Chat effortlessly, anytime, anywhere!",
      link: "https://github.com/Rajeev12R/Buzz",
    },
    {
      name: "ZippIt",
      description:
        "Instantly shorten, share, and manage URLs with ease. Simplify your links and track their performance, all in one place!",
      link: "https://short-url-0m86.onrender.com",
    },
    {
      name: "BlogBlooms",
      description:
        "BlogBlooms is a simple web app for creating and managing blog posts. Sign up, add stunning cover images, and share your stories with a community of readers.",
      link: "https://github.com/Rajeev12R/BlogBlooms",
    },
    {
      name: "Taskflow",
      description:
        "TaskFlow is your go-to app for effortless task management. Add a task, and when you're done, just tap to make it disappear! Stay focused and flow through your day with ease.",
      link: "https://github.com/Rajeev12R/Taskflow",
    },
  ]

  const initialProjects = projects.slice(0, 4)
  const moreProjects = projects.slice(4)

  return (
    <div id="projects" className="max-w-[700px] m-auto mt-10">
      <h2 className="text-left font-semibold text-zinc-700 text-4xl p-6">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        {/* Displaying first 4 projects */}
        {initialProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-100/50 to-teal-100/50 hover:shadow-lg transition duration-100 relative border border-blue-100 w-full rounded-xl overflow-hidden"
          >
            <div className="relative text-left p-4">
              <h4 className="text-xl font-bold tracking-tight text-gray-900">
                {project.name}
              </h4>
              <p className="leading-6 pt-3 text-gray-700">
                {project.description}
              </p>
            </div>
          </a>
        ))}

        {/* Conditionally rendering more projects */}
        {showMore &&
          moreProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-100/50 to-teal-100/50 hover:shadow-lg transition duration-100 relative border border-blue-100 w-full rounded-xl overflow-hidden"
            >
              <div className="relative text-left p-4">
                <h4 className="text-xl font-bold tracking-tight text-gray-900">
                  {project.name}
                </h4>
                <p className="leading-6 pt-3 text-gray-700">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
      </div>

      {/* "See More" Button */}
      <div className="text-center mt-6">
        {!showMore ? (
          <button className="bg-slate-900 absolute inset-x-0 no-underline group cursor-pointer w-fit mx-auto z-50 shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <div
              onClick={() => setShowMore(true)}
              className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-8 ring-1 ring-white/10"
            >
              See More
            </div>
          </button>
        ) : (
          <button className="bg-slate-900 absolute inset-x-0 no-underline group cursor-pointer w-fit mx-auto z-50 shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <div
              onClick={() => setShowMore(false)}
              className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-8 ring-1 ring-white/10"
            >
              See Less
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default Projects
