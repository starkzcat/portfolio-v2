import Image from 'next/image'
import React from 'react'
import { Button } from "../ui/button"
import { ExternalLinkIcon, Github } from "lucide-react"

export default function RecentProjects() {
  const projects = [
    {
      name: "SIMABA",
      imagePath: "/projects/simaba.webp",
      description: "An information system management for college new student orientation agenda",
      githubLink: "",
      projectLink: "",
    },
    {
      name: "Bapenda",
      imagePath: "/projects/bapenda.webp",
      description: "An information system management for college new student orientation agenda",
      githubLink: "",
      projectLink: "",
    },
  ]

  return (
    <div className="w-full flex flex-col gap-2 mt-5">
      <h3 className="font-medium text-sm">Recent projects</h3>
      <div className="grid md:grid-cols-2 gap-8 md:gap-4 justify-center">
        {projects.map((project, idx) => (
          <div key={idx}>
            <div className="flex items-center rounded-sm overflow-hidden h-70 md:h-44 mb-2">
              <Image src={project.imagePath} alt="hehe" width={500} height={500} />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{project.name}</h4>
              <div className="flex gap-0.5">
                <Button variant="ghost" size="icon"><Github /></Button>
                <Button variant="ghost" size="icon"><ExternalLinkIcon /></Button>
              </div>
            </div>
            <div>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}