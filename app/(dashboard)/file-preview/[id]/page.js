"use client"
import React, { useEffect } from 'react'

const page = ({params}) => {
    console.log(params.id)
    useEffect(() =>{
        console.log(params.id)
    
    })
  return (
    <div>page</div>
  )
}

export default page