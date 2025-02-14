"use client"

import PreviewDoc from '@/components/PreviewDoc'
import React, {  useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

const page = () => {
    // const [name, setName] = useState();

    const [change, setChange] = useState(false)
 
    const user = useSelector((state)=>state.navbar.user)
    const [name, setName] = useState()
    const [dir, setDir] = useState()
    const pathName = usePathname();
    
  
    // console.log("user ",user)
    const params = useParams();
    let fileName = "";
    
    
    
    
    const getData =async () =>{
      let name = ""
     

        if(user){
          name = user.email.substr(0, user.email.lastIndexOf('@'))
          setDir(name)
          // console.log(name)
      
      //   // console.log(name)
       fileName = await PreviewDoc(params.slug, name)
      //  console.log("fileName "+fileName)
       setName(fileName)
      //  console.log("file "+name)
      console.log("pathName "+pathName.includes("preview"))
      }
  
  }
    // getData();
    useEffect(()=>{
      setTimeout(() =>{
        setChange(true)

      },[1000])
      

      // console.log(change)
      // console.log(user)
      getData();
      
    },[change,name])
    
  return (
    <div suppressHydrationWarning>
      {/* {params.slug}  */}
    
     {user &&name&&  <iframe className='w-[80vw] h-[100vh] m-auto my-10' src={`/${dir}/${params.slug}/${name}`} ></iframe>}
    </div>
  )
}

export default page
