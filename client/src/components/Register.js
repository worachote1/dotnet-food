import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { HiOutlineUser, HiOutlineLockClosed, HiPhone} from 'react-icons/hi';
import { ImAddressBook} from 'react-icons/im';

export default function Register() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-bold text-gray-500">Username <HiOutlineUser className="inline-block mr-2 mb-1" /></label>
              <input type="username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Enter your username" />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Password <HiOutlineLockClosed className="inline-block mr-2 mb-1" /></label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Enter your password" />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Address <ImAddressBook className="inline-block mr-2 mb-1" /></label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Enter your address" />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Phone Number <HiPhone className="inline-block mr-2 mb-1" /></label>
              <input type="text" pattern="[0-9]*" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Enter your phone number" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Register</button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
