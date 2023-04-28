import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { HiOutlineUser, HiOutlineLockClosed } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const validateName = () => {
    if (userName==="") {
      setNameError("username cannot be empty");
    } else {
      setNameError('');
    }
  }
  const validatePassword = () => {
    if (password==="") {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError('');
    }
  }

  const handleLogIn = (event) => {
    event.preventDefault();
    if(nameError !== '' || passwordError !== ''){
      return
    }
    // if login success redirecct to main page
    // and create current user login in session
    fetch(`http://localhost:5000/api/user/login/?username=${userName}&password=${password}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return res.json().then(data => { throw Error(`${data.loginStatus}`) });
        }
      })
      .then((data) => {
        console.log(data.loginStatus);
        sessionStorage.setItem('current_user', userName);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Warning...',
          text: `${err}`
        })
      })
  }

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <form className="space-y-4" onSubmit={handleLogIn}>
            <div>
              <label className="block mb-1 font-bold text-gray-500"><HiOutlineUser className="inline-block mr-2 mb-1" />Username </label>
              <input type="username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Enter your username"
                onChange={(e) => setUserName(e.target.value)}
                onBlur={validateName}
              />
              <div className='name-error text-red-500 font-bold'>
                {nameError}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500"><HiOutlineLockClosed className="inline-block mr-2 mb-1" />Password</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              <div className='name-error text-red-500 font-bold'>
                {passwordError}
              </div>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"

            >
              Log In
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center">
            <span className="text-gray-500 mr-2">Don't have an account?</span>
            <Link
              to={
                `/register`
              }>
              <a className="text-blue-500 hover:underline">
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}