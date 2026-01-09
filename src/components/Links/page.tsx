import React from 'react'
import { Button } from '../ui/button'
import { FileUser, Github, Linkedin, Mail } from 'lucide-react'

export default function Links() {
  return (
    <div className="flex items-center gap-5">
      <Button><FileUser />Resume</Button>
      <Github />
      <Linkedin />
      <Mail />
    </div>
  )
}
