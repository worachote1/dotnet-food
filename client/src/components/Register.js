import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { HiOutlineUser, HiOutlineLockClosed, HiPhone } from 'react-icons/hi';
import { ImAddressBook } from 'react-icons/im';

export default function Register() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const validateName = () => {
    // regex patterns to  validate a name
    // that contain at least 4 characters and don't count any spaces
    if (!((/^\S{4,}$/).test(name))) {
      setNameError('Name must be at least 4 characters');
    } else {
      setNameError('');
    }
  }
  const validatePassword = () => {
    // regex patterns to validate a password
    // that contain at least 4 characters and don't count any spaces
    if (!((/^\S{4,}$/).test(password))) {
      setPasswordError("Password must be at least 4 characters");
    } else { 
      setPasswordError('');
    }
  }
  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  }
  const validateAddress = () => {
    
    if (/^\s*$/gm.test(address)) {
      setAddressError("Address must not be empty")
    }
    else{
      setAddressError("")
    }
  }
  const validatePhone = () => {
    if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError('Phone number must be 10 digits');
    } else {
      setPhoneError('');
    }
  }

  const handleSubmitRegister = () => {
      if(nameError === '' && passwordError === '' && confirmPasswordError === '' && addressError === '' && phone === ''){
        
      }
  }

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form className="">
            <div >
              <label className="block mb-1 font-bold text-gray-500">Username <HiOutlineUser className="inline-block mr-2 mb-1" /></label>
              <input type="username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Enter your username" value={name} onChange={(e) => setName(e.target.value)} onBlur={validateName} />
              <div className='name-error text-red-500 font-bold'>
                  {nameError}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Password <HiOutlineLockClosed className="inline-block mr-2 mb-1" /></label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
              <div className='name-error text-red-500 font-bold'>
                {passwordError}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Confirm Password <HiOutlineLockClosed className="inline-block mr-2 mb-1" /></label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={validateConfirmPassword} />
              <div className='name-error text-red-500 font-bold'>
                {confirmPasswordError}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Address <ImAddressBook className="inline-block mr-2 mb-1" /></label>
              <textarea type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} onBlur={validateAddress}></textarea>
              <div className='name-error text-red-500 font-bold'>
                {addressError} 
              </div>
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">Phone Number <HiPhone className="inline-block mr-2 mb-1" /></label>
              <input type="text" pattern="[0-9-]*" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={validatePhone} />
              <div className='name-error text-red-500 font-bold'>
                {phoneError}
              </div>
            </div>
            <button type="submit" className="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Register</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}