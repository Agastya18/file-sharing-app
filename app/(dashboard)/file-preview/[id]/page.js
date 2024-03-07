"use client";
import React, { useEffect, useState } from "react";
import { app } from "@/firebaseConfig";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";
import FileInfo from "../_components/FileInfo";
import FileShareForm from "../_components/FileShareForm";
const page = ({ params }) => {
  const db = getFirestore(app);
  const [file,setFile] = useState()
 // console.log(params.id);
  useEffect(()=>{
    getFileInfo()
  })
  const getFileInfo = async () => {
    const docRef = doc(db, "uplodedFiles", params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
//   const onPasswordSave=(password)=>{

//   }
  return <div className=" py-10 px-20">
    <Link href={'/upload'} className=" flex gap-3">
        <ArrowLeftSquare> go to upload</ArrowLeftSquare> </Link>
        <div className=" grid grid-cols-1 md:grid-cols-2 mt-5">
            {/* <FileInfo file={file}/>
            <FileShareInfo file={file}
                onPasswordSave={(password)=>onPasswordSave(password)}
            /> */}
            <FileInfo file={file}/>
            <FileShareForm file={file}/>
        </div>
   
  </div>;
};

export default page;
