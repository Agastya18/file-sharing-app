import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const FileInfo = ({file}) => {
  const [fileType, setFileType] = useState('')
  useEffect(() => {
    file&&setFileType(file?.fileType)
    console.log(fileType)
  },[file])
  return file&&(
    <div className=' text-center border flex justify-center m-4 flex-col items-center p-2 rounded-md border-blue-200'>
      {/* <Image src={} width={200} height={200} alt='file type'
        className=' h-[200px] rounded-md object-contain'
      /> */}
      <Image src={file.url} alt='file img' width={200} height={200} />
      <div>
        <h2>{file.name}</h2>
        <h2 className=' text-gray-400 text-[13px]'>
          {
            file.username
          }
        </h2>
      </div>
    </div>
  )
}

export default FileInfo