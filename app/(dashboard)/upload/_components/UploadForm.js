"use client"
import React from 'react'
import { useState } from 'react'
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

const UploadForm = ({uploadFile,progress}) => {
  const [file,setFile]= useState();
  
  const onFileSelect = (file)=>{
    setFile(file)
    if(file && file.size > 2*1024*1024){
      alert('File size should be less than 2MB')
      setFile(null)
     
      return
    }
    setFile(file)
   // console.log(file)
  }
  return (
    <div className='text-center'>
      <div className="flex items-center justify-center w-full">
  <label
    htmlFor="dropzone-file"
    className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50  hover:bg-green-100  "
  >
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg
        className="w-12 h-12 mb-4 text-blue-500 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-2 md:text-2xl text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span> or <strong className=' text-purple-400'>drag</strong> and <strong className=' text-purple-400'>drop</strong>
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 2MB)
      </p>
    </div>
    <input id="dropzone-file" type="file" className="hidden" onChange={(e)=>onFileSelect(e.target.files[0])} />
  </label>
</div>
{
  file?  <FilePreview file={file} removeFile={()=>setFile(null)} /> : null
}


{
  progress>0 ? <ProgressBar progress={progress}/>:<button onClick={()=>uploadFile(file)} disabled={!file} className=" p-2 bg-purple-500 text-white w-[30%] rounded-full mt-5
  disabled:bg-slate-400
">Upload</button>
}

    </div>
  )
}

export default UploadForm