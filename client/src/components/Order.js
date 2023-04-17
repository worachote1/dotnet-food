import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';

export default function Order() {
 
    const { username } = useParams();
 
  return (
    <div>
        <NavBar />
        <div>
            <p> Order (display all order that relate to this user) </p>
            <p> these order belong to user : <span className='text-red-500'> {username} </span> </p>
        </div>
        <Footer />
    </div>
  )
}
