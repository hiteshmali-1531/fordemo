'use client'; // Add this line at the top

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { setToken,setUser } from "@/features/navbar/navbarSlice";

import "../app/css/dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import UserProfileMenu from "./UserProfileMenu";


export default function Navbar() {
 const router = useRouter();
 const dispatch = useDispatch()
 
  const token = useSelector((state)=> state.navbar.token)
  const getToken = () =>{
    const jwttoken = localStorage.getItem("token");
    // setToken(jwttoken);
    dispatch(setToken(jwttoken))
    // console.log(jwttoken);
    console.log(token)
  }

  const getUser = async ()=>{
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`,{
      method: 'POST',
      body: JSON.stringify({token})
    })

    res = await res.json();
    console.log(res.user)
    dispatch(setUser(res.user))
  }
   useEffect(()=>{
    getToken();
    getUser();
   },[ token])
   const logout = ()=>{
    localStorage.removeItem("token");
    dispatch(setToken(""));
   }
   const element = useRef(null);
  return (
    <div className="  px-5 fixed top-0 left-0 w-full z-50 navbar_bg_color">
      <nav className="flex justify-between items-center">
        {/* Left side: College logo or image */}
        <div className="flex items-center ">
          <Image
            src="/LDRP-logo-3.png" // Local image URL
            alt="LDRP Logo"
            width={220} // Adjust width as needed
            height={220} // Adjust height as needed
          />
        </div>

        {/* Right side: Navigation links */}
        <div className="flex  font-bold">
          <Link href="/" className="text-white navItem flex justify-center px-1  items-center text-lg  duration-300 hover:text-red-500 transition">
            <Image src={'/svg/home.svg'} width={20} height={20} alt="not found" className="font-bold text-white homeSvg   hover:text-red-500" />
          </Link>

          {/* Student Dropdown */}
          <div className="relative  group dropdown">
            <button className="text-white px-6 py-2   navItem text-md  duration-300 hover:bg-red-500 transition" onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              Student
            </button>
            {/* Dropdown Menu */}
            <div ref={element} className=" bg-white text-black shadow-lg   dropdown-content  mr-4  dropdown-content"  onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              <Link href="/student" className="block text-black px-4 py-2 hover:bg-gray-200">
                Profile
              </Link>
              <Link href="/student/at" className="block text-black px-4 py-2 hover:bg-gray-200">
                Attendance
              </Link>
              <Link href="/student/examresult" className="block px-4 text-black py-2 hover:bg-gray-200">
                Exams Results
              </Link>
              <Link href="/student/examform" className="block px-4 text-black py-2 hover:bg-gray-200">
                Exam Form
              </Link>
            
              <Link href="/student/timetable" className="block px-4 text-black py-2 hover:bg-gray-200">
                Shedule and Timetable
              </Link>
              <Link href="/student/login" className="block px-4 text-black py-2 hover:bg-gray-200">
                Login
              </Link>
            </div>
          </div>
{/* discord par aav  */}
          {/* Faculty Dropdown */}
          <div className="relative  group dropdown">
            <button className="text-white px-6 py-2   navItem text-md  duration-300 hover:bg-red-500 transition" onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              Faculty
            </button>
            {/* Dropdown Menu */}
            <div ref={element} className=" bg-white text-black shadow-lg   dropdown-content  mr-4  dropdown-content"  onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              <Link href="/faculty" className="block text-black px-4 py-2 hover:bg-gray-200">
                Profile
              </Link>
              <Link href="/faculty/at" className="block text-black px-4 py-2 hover:bg-gray-200">
                Attendance
              </Link>
              <Link href="/faculty/timetable" className="block text-black px-4 py-2 hover:bg-gray-200">
                Shedule And Timetable
              </Link>
              <Link href="/faculty/mentoring" className="block text-black px-4 py-2 hover:bg-gray-200">
              Faculty Mentoring
              </Link>
              <Link href="/faculty/login" className="block text-black px-4 py-2 hover:bg-gray-200">
              login
              </Link>
            </div>
          </div>

          {/* Admissions Dropdown */}
          <div className="relative  group dropdown">
            <button className="text-white px-6 py-2   navItem text-md  duration-300 hover:bg-red-500 transition" onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              Admissions
            </button>
            {/* Dropdown Menu */}
            <div  ref={element} className=" bg-white text-black shadow-lg   dropdown-content  mr-4  dropdown-content"  onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              <Link href="/admissions/application" className="block text-black px-4 py-2 hover:bg-gray-200">
                Apply For Admission
              </Link>
              <Link href="/admissions/eligibility" className="block text-black px-4 py-2 hover:bg-gray-200">
                Eligiablity Criteria
              </Link>
              <Link href="/admissions/process" className="block text-black px-4 py-2 hover:bg-gray-200">
                process of Admission
              </Link>
              <Link href="/admissions/fees" className="block text-black px-4 py-2 hover:bg-gray-200">
                Fees Structure
              </Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative  group dropdown">
            <button className="text-white px-6 py-2   navItem text-md  duration-300 hover:bg-red-500 transition" onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              Resources
            </button>
            {/* Dropdown Menu */}
            <div ref={element} className=" bg-white text-black shadow-lg   dropdown-content  mr-4  dropdown-content"  onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              <Link href="/resources" className="block text-black px-4 py-2 hover:bg-gray-200">
                Computer Engineering
              </Link>
              <Link href="/resources" className="block text-black px-4 py-2 hover:bg-gray-200">
                Information Technology
              </Link>
              <Link href="/resources/hostel" className="block text-black px-4 py-2 hover:bg-gray-200">
                Mechanical Engineering
              </Link>
              <Link href="/resources" className="block text-black px-4 py-2 hover:bg-gray-200">
                Electrical Engineering
              </Link>
              <Link href="/resources" className="block text-black px-4 py-2 hover:bg-gray-200">
                Civil Engineering
              </Link>
            </div>
          </div>

          {/* Alumni Dropdown */}
          <div className="relative  group dropdown">
            <button className="text-white px-6 py-2   navItem text-md  duration-300 hover:bg-red-500 transition" onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              Alumni
            </button>
            {/* Dropdown Menu */}
            <div ref={element} className=" bg-white text-black shadow-lg   dropdown-content  mr-4  dropdown-content"  onMouseEnter={() =>{
                console.log("click")
                element.current.style.maxHeight = element.current.maxHeight + 'px'
                element.current.style.opacity = '1'
                element.current.style.visibility = 'visible'
            }} 
            onMouseLeave={()=>{
                element.current.style.maxHeight = '0 px'
                element.current.style.opacity = '0'
                element.current.style.visibility = 'hidden'
            }}>
              <Link href="/alumni" className="block text-black px-4 py-2 hover:bg-gray-200">
                Alumni Network
              </Link>
              <Link href="/alumni/evt" className="block text-black px-4 py-2 hover:bg-gray-200">
                Alumni Events
              </Link>
              <Link href="/alumni/mentor" className="block text-black px-4 py-2 hover:bg-gray-200">
                Mentorship Program
              </Link>
            </div>
          </div>
            {/* <div className="flex items-center justify-center w-[35px] h-[35px] hover:bg-red-800 my-1 mx-6  border-2 border-white rounded-full">
          <Image src={'/svg/search.svg'} className="" alt="no" height={20} width={20} >

          </Image>
          </div> */}

          {/* Login Link */}
          {/* {token&& <div className="flex justify-center items-center text-white px-2  py-2     navItem text-md  duration-300 hover:bg-red-500 transition " style={{marginRight: '10px'}}> <Image src='/svg/user.svg' alt="no" height={20} width={20} /> </div>} */}
          
          {token&& <div className=""><UserProfileMenu logout={logout} /></div>}
          {token &&  <div className="text-white navItem text-md transition duration-300"></div>}
          
          {!token&&<Link href="/LoginRegister" className="text-white navItem text-md transition duration-300">
          
          <button className="flex mx-auto text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Login</button>
          </Link>
        }
        </div>
      </nav>
    </div>
  );
}