"use client"
import { Copy } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
const FileShareForm = ({file,onPasswordSave}) => {
  const [isPassword,setIsPassword] = useState(false)
  const [password,setPassword] = useState('')

  return file && (
    <div className=' flex flex-col gap-2'>
      <div>
        <label className=' text-[14px] text-gray-500'> short Url</label>
        <div className=' flex p-2 gap-5   border rounded-md'>

          <input type="text" className=' w-full disabled:text-gray-500 outline-none bg-transparent'
          value={file.shortUrl} />
          <Copy className=' text-gray-400  hover:text-red-400  '></Copy>
        </div>
      </div>
      <div className=' gap-3 flex mt-5'>
      <input type="checkbox"  onClick={()=>setIsPassword(true)} value={isPassword} />
      <label className=' text-gray-500'>Enable Password?</label>

      </div>

      {
        isPassword? (
          <div className=' flex items-center gap-3'>
            <div className=' border rounded-md w-full p-2'>
            <input type="password" placeholder='password' className=' disabled:text-gray-500 p-2 border bg-transparent outline-none w-full'
              onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            
            <button className=' bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-200  hover:bg-blue-500'
            disabled={password?.length<3}
            onClick={()=>onPasswordSave(password)}
            >Save</button>
          </div>
        ):null
      }
    </div>
  )
}

export default FileShareForm