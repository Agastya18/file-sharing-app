import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-[87vh] ">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex   ">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl "
        >
          Upload,Save and easily manage &
  
          <span className="sm:block mt-2"> Share your file in one place </span>
        </h1>
  
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed ">
          Drag and drop your files directly on our cloud and share with your friends and family securely with password protection and send it on mail.
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-blue-600 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/upload"
          >
            Upload
          </a>
  
          <Link 
            className="block w-full rounded border border-blue-600 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/file"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero