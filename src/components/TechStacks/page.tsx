import React from 'react'
import { NextJsLogo, ExpressJsLogo, HtmlLogo, CssLogo, NodeLogo, TypescriptLogo, TailwindLogo, ReactLogo, SupabaseLogo, LaravelLogo } from '@/components/Logos'

export default function TechStack() {
  const stacks = [
    {
      logo: <NextJsLogo />,
      title: "Next.js"
    },
    {
      logo: <ReactLogo />,
      title: "React.js"
    },
    {
      logo: <ExpressJsLogo />,
      title: "Express.js"
    },
    {
      logo: <NodeLogo />,
      title: "Node.js"
    },
    {
      logo: <HtmlLogo />,
      title: "HTML5"
    },
    {
      logo: <CssLogo />,
      title: "CSS3"
    },
    {
      logo: <TypescriptLogo />,
      title: "Typescript"
    },
    {
      logo: <TailwindLogo />,
      title: "TailwindCSS"
    },
    {
      logo: <SupabaseLogo />,
      title: "Supabase"
    },
    {
      logo: <LaravelLogo />,
      title: "Laravel"
    },
  ]
  return (
    <div className="w-full flex flex-col gap-2 mt-5">
      <h3>Current tech stacks</h3>
      <div className="flex grid-cols-5 flex-wrap items-center gap-5 md:mt-2 md:grid md:justify-between">
        {stacks.map((stack, index) => (
          <div key={index} className="group flex items-center justify-center gap-2 rounded-md border p-1 dark:bg-background md:flex-col md:border-0 md:p-0 md:dark:bg-transparent">
            {stack.logo}
            <p className="cursor-default text-xs text-[#424242] transition-all duration-500 dark:text-[#D4D4D8] md:group-hover:font-semibold tracking-wide">{stack.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
