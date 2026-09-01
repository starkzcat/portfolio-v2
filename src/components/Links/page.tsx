import React from 'react'
import { Button } from '../ui/button'
import { FileUser, Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export default function Links() {
  return (
    <div className="flex items-center gap-5">

      <Link href={"/cv_andy.pdf"} target="_blank"><Button><FileUser />Resume</Button></Link>
      <Link href={"https://github.com/starkzcat/"}><Github /></Link>
      <Link href={"https://www.linkedin.com/in/andy-firmansyah/"}><Linkedin /></Link>
      <Link href={"mailto:andyfirmansyah2667@gmail.com"}><Mail /></Link>
    </div>
  )
}
