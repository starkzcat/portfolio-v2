import React from 'react'

export default function Top() {
  return (
    <div className="flex flex-col sm:items-start sm:text-left">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Andy Firmansyah
      </h1>
      <p className="max-w-md text-xl font-medium leading-8 text-zinc-600 dark:text-zinc-300">
        Full-Stack Developer
      </p>
      <p className="max-w-md text-md text-zinc-600 dark:text-zinc-300">
        East Java, Indonesia
      </p>
    </div>
  )
}
