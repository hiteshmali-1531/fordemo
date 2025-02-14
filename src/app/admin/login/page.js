import React from 'react';
import './style.css'


const AnimatedLogin = () => {
  return (
    <>
    <div className='h-[100vh] bg-black flex items-center'>
      <div className="ring-hover relative w-[500px] h-[500px] m-auto flex items-center justify-center ">
        <i
          className="absolute inset-0 border-2 border-[#00ff0a] custom-ring"
          style={{ "--clr": "#00ff0a" }}
        ></i>
        <i
          className="absolute inset-0 border-2 border-[#ff0057] custom-ring-2"
          style={{ "--clr": "#ff0057" }}
        ></i>
        <i
          className="absolute inset-0 border-2 border-[#fffd44] custom-ring-3"
          style={{ "--clr": "#fffd44" }}
        ></i>

        <div className="login absolute w-[300px] flex flex-col items-center gap-5">
          <h2 className="text-white text-2xl font-bold">Login</h2>
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-5 py-3 bg-transparent border-2 border-white rounded-full text-white text-lg placeholder-opacity-75 focus:outline-none"
            />
          </div>
          <div className="w-full relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 bg-transparent border-2 border-white rounded-full text-white text-lg placeholder-opacity-75 focus:outline-none"
            />
          </div>
          <div className="w-full relative">
            <input
              type="submit"
              value="Sign in"
              className="w-full px-5 py-3 bg-gradient-to-r from-[#ff357a] to-[#fff172] text-white text-lg rounded-full cursor-pointer border-none"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AnimatedLogin;
