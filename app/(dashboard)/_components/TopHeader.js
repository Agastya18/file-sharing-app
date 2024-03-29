import { AlignJustify } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const TopHeader = () => {
  return (
    <div className=' flex p-5 border-b items-center justify-between md:justify-end'>
        <AlignJustify className=' md:hidden'/>
        <Image src="/logo.svg" alt='img' height={50} width={50} className=' md:hidden'/>
        <UserButton/>
    </div>
  )
}

export default TopHeader