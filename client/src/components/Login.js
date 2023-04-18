import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { HiOutlineUser, HiOutlineLockClosed } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogIn = (event) => {
      // if login success redirecct to main page
      // and create current user login in session
      event.preventDefault();
      console.log(`user -> ${userName} , password -> ${password}`)
      
      // save username to session storage
      sessionStorage.setItem('current_user', userName);
      navigate("/")
  }



  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <form className="space-y-4" onSubmit={handleLogIn}>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Username <HiOutlineUser className="inline-block mr-2 mb-1" /></label>
              <input type="username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Enter your username"
                onChange={(e)=>setUserName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Password <HiOutlineLockClosed className="inline-block mr-2 mb-1" /></label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)} 
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              
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