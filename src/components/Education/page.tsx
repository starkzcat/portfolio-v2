import React from 'react'

export default function Education() {
  return (
    <div className="w-full flex flex-col gap-2 mt-5">
      <h3 className="font-medium text-sm">Education</h3>

      <div>
        {/* single */}
        <div className="flex flex-col md:flex-row justify-between">
          <div> {/* left */}
            <h5 className="font-semibold">Brawijaya University</h5>
            <span className="text-sm">Bachelor of Computer - Information System</span>
          </div>
          <div> {/* right */}
            <span className="text-sm">Jun 2020 - Jan 2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}
