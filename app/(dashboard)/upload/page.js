"use client"
import React from 'react'
import UploadForm from './_components/UploadForm'
import {app} from '@/firebaseConfig'
import { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, setDoc,doc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs'
import CompleteCheck from './_components/CompleteCheck'
import { useEffect } from 'react'
import { getneraterandomString } from '@/app/_utils/GenerateString'
import { useRouter } from 'next/navigation'
const page = () => {
  const [fileId,setFileId] = useState()
  const [uploadComplete,setUploadComplete] = useState(false)
  const router = useRouter()
  const {user}=useUser();
  const [progress,setProgress] = useState();
  const storage = getStorage(app);
  const db = getFirestore(app);

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
      saveInfo(file,downloadURL)
    });
   
  }, )
   
  }

  const saveInfo = async(file,downloadURL)=>{
   const docID=getneraterandomString().toString()
   await setDoc(doc(db,"uplodedFiles",docID),{
      name:file.name,
      size:file.size,
      type:file.type,
      url:downloadURL,
      email:user.primaryEmailAddress.emailAddress,
      username:user.fullName,
      password:"",
      id:docID,
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL+docID

   })
   
   setFileId(docID)
   
  }

  useEffect(() =>{
    // <CompleteCheck />
     progress==100 && setTimeout(() =>{
       setUploadComplete(true)
     },2000)
 
    },[progress==100])

    useEffect(() =>{
      // <CompleteCheck />
      uploadComplete && setTimeout(() =>{
       
        setUploadComplete(false)

       router.push('/file-preview/'+fileId)
      },2000)
  
      },[uploadComplete==true])



  return (
    <div className=' p-5 px-8 md:px-28'>
  {
    uploadComplete==false && <div>
  <h2 className=' text-[20px] text-center m-5'>
      Start <strong className=" text-purple-500">Uploading</strong> your files and <strong className=" text-purple-600">share</strong> it.
    </h2>
    <UploadForm uploadFile={(file)=>uploadFileData(file)} progress={progress}/>
  </div>
  }
  {
    uploadComplete==true && <CompleteCheck />
  }
     
    </div>
  )
}

export default page