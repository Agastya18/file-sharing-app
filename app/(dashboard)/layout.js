import React from 'react'
import Sidebar from './_components/Sidebar'
import TopHeader from './_components/TopHeader'

const layout = ({children}) => {
  return (
   <>
     <div className='hidden md:flex  h-full md:w-64  flex-col fixed inset-y-0 z-50'>
    <Sidebar />
     
    </div>
    <div className=' md:ml-64'>
    <TopHeader />
    {children}
    </div>
   </>
  )
}

export default layout