"use client"
import { File, Shield, Upload } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
const Sidebar = () => {
    const menuList = [
        {
            name: 'Upload',
            path: '/upload',
            icon: Upload
        },
        {
            name: 'My Files',
            path: '/files',
            icon: File
        },
        {
            name: 'Upgrade',
            path: '/upgrade',
            icon: Shield
        }
    ]
    const [activeLink, setActiveLink] = useState(0)
   // console.log(activeLink)
  return (
    <div className=' shadow-sm  border-r h-full'>
        <div className='p-5 border-b-2'>
            <Image src='/logo.svg' width={80} height={80} alt='img'/>
            
        </div>
        <div className=' flex flex-col  float-left w-full'>
        {
            menuList.map((item,index)=>(
               <Link href={`${item.path}`} key={index} className={` flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${activeLink === index ? 'bg-blue-100 text-blue-800' : ''}`}
               onClick={()=>setActiveLink(index)}>
               <item.icon/>
                <h2>{item.name}</h2>
               </Link>
            ))
        }
        </div>
    </div>
  )
}

export default Sidebar