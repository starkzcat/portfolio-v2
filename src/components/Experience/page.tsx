import React from 'react'

export default function Experience() {
  const experiences = [
    {
      title: "Programmer Staff",
      company: "Linkbot",
      country: "Singapore (Remote)",
      type: "Full time",
      date: "Jan 2025 - present"
    },
    {
      title: "Software Programmer",
      company: "Linkbot",
      country: "Singapore (Remote)",
      type: "Intern",
      date: "Jul 2024 - Jan 2025"
    },
    {
      title: "Web Developer",
      company: "BAPENDA Jember",
      country: "Indonesia",
      type: "Intern",
      date: "Jun - Aug 2023"
    },
  ]
  return (
    <div className="w-full flex flex-col gap-2 mt-5">
      <h3 className="font-medium text-sm">Experience</h3>
      {experiences.map((experience, idx) => (
        <div key={idx}>
          {/* single */}
          <div className={`flex justify-between ${idx !== experiences.length - 1 && "pb-2.5 border-b"}`}>
            <div> {/* left */}
              <h5 className="font-semibold">{experience.title}</h5>
              <span className="text-sm">{experience.company} - {experience.type}</span>
              <br />
              <span className="text-sm">{experience.country}</span>
            </div>
            <div> {/* right */}
              <span className="text-sm">{experience.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
