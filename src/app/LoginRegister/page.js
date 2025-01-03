"use client";

import { useState } from 'react';
import './LoginRegister.css';  // Import your CSS here
import { useRef } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import 'boxicons/css/boxicons.min.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginRegister = () => {
  const [user, setUser] = useState({
    user_name: '',
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  console.log(user)


  const signup = async () => {
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const data = await res.json();
      console.log(data);
      if (data.status) {
        toast.success(`${data.msg}`, {
          position: "top-rigth",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
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
    } catch (err) {
      console.log(err);
      
      toast.error(`${data.msg}`, {
        position: "top-left",
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


 
  const element = useRef(null);

 
  return (
    <div className='loginPage'>

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
      <div ref={element} className={`wrapper  `}>
        <span className="rotate-bg"></span>
        <span className="rotate-bg2"></span>
        {/* Login Form */}
        <div className="form-box login ">
          <h2 className="title animation" style={{ "--i": 0, "--j": 21 }}>Login</h2>
          <form >
            <div className="input-box animation" style={{ "--i": 1, "--j": 22 }}>
              <input
                type="text"
                required
                value={user.email}
                onChange={(e) => onChange(e)}
              />
              <label>Username</label>
              <i className='bx bxs-user'></i>
            </div>

            <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
              <input
                type="password"
                required
                // value={password}
                onChange={(e) => onChange(e)}
              />
              <label>Password</label>
              <i className='bx bxs-lock-alt'></i>
            </div>

            <MDBBtn color="" className='bg-[#fd7e14]  btn animation' style={{ "--i": 5, "--j": 25 }}>Login</MDBBtn>
            <div className="linkTxt animation" style={{ "--i": 5, "--j": 25 }}>
              <p>Don't have an account? <a href="#" className="register-link" onClick={() => {
                element.current.classList.add('active')
              }}>Sign Up</a></p>
            </div>
          </form>
        </div>

        {/* Info Text for Login */}
        <div className="info-text login" style={{ color: 'white' }}>
          <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>Welcome Back!</h2>
          {/* <p className="animation" style={{"--i": 1, "--j": 21}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,rem?</p> */}
        </div>

        {/* Register Form */}
        <div className="form-box register">
          <h2 className="title animation" style={{ "--i": 17, "--j": 0 }}>Sign Up</h2>
          <form >
            <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
              <input
                type="text"
                required
                value={user.user_name}
                name='user_name'
                onChange={(e) => onChange(e)}
              />
              <label>Username</label>
              <i className='bx bxs-user'></i>
            </div>

            <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
              <input
                type="email"
                name='email'
                required
                value={user.email}
                onChange={(e) => onChange(e)}
              />
              <label>Email</label>
              <i className='bx bxs-envelope'></i>
            </div>

            <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
              <input
                type="password"
                required
                name='password'
                value={user.password}
                onChange={(e) => onChange(e)}
              />
              <label>Password</label>
              <i className='bx bxs-lock-alt'></i>
            </div>

            <MDBBtn color="" className='bg-[#fd7e14] btn animation' style={{ "--i": 22, "--j": 5 }} onClick={signup}>Sign Up</MDBBtn>
            <div className="linkTxt animation" style={{ "--i": 22, "--j": 5 }}>
              <p>Already have an account? <a href="#" className="login-link" onClick={() => {
                element.current.classList.remove('active')
              }}>Login</a></p>
            </div>
          </form>
        </div>

        {/* Info Text for Register */}
        <div className="info-text register" style={{ color: 'white' }}>
          <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>Welcome Back!</h2>
          {/* <p className="animation" style={{"--i": 18, "--j": 1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,rem?</p> */}
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

