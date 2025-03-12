// Login.jsx
'use client'
import React, { useState } from 'react';
import { toast, ToastContainer }  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { setToken } from '@/features/navbar/navbarSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
    const dispatch = useDispatch()

    const router = useRouter();
     const [loginUser, setLoginUser] = useState({ 
        email: "",
        password : ""
      })
      const changeLogin = (e) =>{
        setLoginUser({...loginUser, [e.target.name]:e.target.value})
      }

      const onLogin = async() =>{    
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/student/signin`, {
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body : JSON.stringify(loginUser)
    
        });

         const data = await res.json();
            // console.log(data.token);
            console.log(data)
            if(data.status){
              localStorage.setItem("token", data.token);
              dispatch(setToken(data.token))
              setTimeout(()=>{
        
                router.push('/');
              },1000)
              toast.success(`${data.msg}`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }else{
              toast.error(`${data.msg}`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
    }
  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center overflow-hidden">
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <div className="ring-hover relative w-[500px] h-[500px] flex items-center justify-center">
          {/* Animated Rings */}
          <i 
            className="absolute inset-0 border-2 border-[#00ff0a] custom-ring" 
            style={{ '--clr': '#00ff0a' }}
          ></i>
          <i 
            className="absolute inset-0 border-2 border-[#ff0057] custom-ring-2" 
            style={{ '--clr': '#ff0057' }}
          ></i>
          <i 
            className="absolute inset-0 border-2 border-[#fffd44] custom-ring-3" 
            style={{ '--clr': '#fffd44' }}
          ></i>

          {/* Login Form */}
          <div className="login absolute w-[300px] flex flex-col items-center gap-5">
            <h2 className="text-white text-2xl font-bold">Login</h2>
            
            <div className="w-full relative">
              <input
                type="text"
                name='email'
                placeholder="Email"
                value={loginUser.email}
                onChange={(e)=>changeLogin(e)}
                className="w-full px-5 py-3 bg-transparent border-2 border-white rounded-full text-white text-lg placeholder:text-white/75 focus:outline-none"
              />
            </div>

            <div className="w-full relative">
              <input
                type="password"
                name='password'
                placeholder="Password"
                onChange={(e)=>changeLogin(e)}
                value={loginUser.password}
                className="w-full px-5 py-3 bg-transparent border-2 border-white rounded-full text-white text-lg placeholder:text-white/75 focus:outline-none"
              />
            </div>

            <div className="w-full relative">
              <input
                type="submit"

                onClick={onLogin}
                value="Sign in"
                className="w-full px-5 py-3 bg-gradient-to-r from-[#ff357a] to-[#fff172] text-white text-lg rounded-full cursor-pointer border-none"
              />
            </div>

            <div className="w-full flex justify-between px-5">
              <a href="#" className="text-white no-underline">Forget Password</a>
              <a href="#" className="text-white no-underline">Signup</a>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .custom-ring {
          border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
          animation: animate 6s linear infinite;
        }

        .custom-ring-2 {
          border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
          animation: animate 4s linear infinite;
        }

        .custom-ring-3 {
          border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
          animation: animate2 10s linear infinite;
        }

        @keyframes animate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes animate2 {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        .ring-hover:hover i {
          border-width: 6px;
          filter: drop-shadow(0 0 20px var(--clr));
        }
      `}</style>
    </>
  );
};

export default Login;