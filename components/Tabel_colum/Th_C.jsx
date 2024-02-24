import React from 'react'

function Th_C() {
  return (
    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
    <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
      Judul
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
       //  stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <path
           strokeLinecap="round"
           strokeLinejoin="round"
          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        ></path>
      </svg>
    </p>
  </th>
  )
}

export default Th_C