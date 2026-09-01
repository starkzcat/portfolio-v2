import React from 'react'
import { NextJsLogo, ExpressJsLogo, HtmlLogo, CssLogo, NodeLogo, TypescriptLogo, TailwindLogo, ReactLogo, SupabaseLogo, LaravelLogo, JavascriptLogo, WordPressLogo, CanvaLogo, FigmaLogo, N8nLogo } from '@/components/Logos'

export default function TechStack() {
  const stacks = [
    {
      logo: <HtmlLogo />,
      title: "HTML"
    },
    {
      logo: <CssLogo />,
      title: "CSS"
    },
    {
      logo: <JavascriptLogo />,
      title: "JavaScript"
    },
    {
      logo: <TypescriptLogo />,
      title: "TypeScript"
    },
    {
      logo: <NextJsLogo />,
      title: "Next.js"
    },
    {
      logo: <ReactLogo />,
      title: "React"
    },
    {
      logo: <WordPressLogo />,
      title: "WordPress"
    },
    {
      logo: <N8nLogo />,
      title: "n8n"
    },
    {
      logo: <CanvaLogo />,
      title: "Canva"
    },
    {
      logo: <FigmaLogo />,
      title: "Figma"
    },
    // {
    //   logo: <ExpressJsLogo />,
    //   title: "Express.js"
    // },
    // {
    //   logo: <NodeLogo />,
    //   title: "Node.js"
    // },
    // {
    //   logo: <TailwindLogo />,
    //   title: "TailwindCSS"
    // },
    // {
    //   logo: <SupabaseLogo />,
    //   title: "Supabase"
    // },
    // {
    //   logo: <LaravelLogo />,
    //   title: "Laravel"
    // },
  ]
  return (
    <div className="w-full flex flex-col gap-2 mt-5">
      <h3 className="font-medium text-sm">Current tech stacks</h3>
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
