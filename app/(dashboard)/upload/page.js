"use client"
import React from 'react'
import UploadForm from './_components/UploadForm'
import {app} from '@/firebaseConfig'
import { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const page = () => {
  const [progress,setProgress] = useState();
  const storage = getStorage(app);

  const uploadFileData = (file)=>{
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/space.jpg'+file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgress(progress)

   progress==100 &&  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
   
  }, )
   
  }
  return (
    <div className=' p-5 px-8 md:px-28'>
    <h2 className=' text-[20px] text-center m-5'>
      Start <strong className=" text-purple-500">Uploading</strong> your files and <strong className=" text-purple-600">share</strong> it.
    </h2>
      <UploadForm uploadFile={(file)=>uploadFileData(file)} progress={progress}/>
    </div>
  )
}

export default page