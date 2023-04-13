import React from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'
import Footer from './Footer';
export default function Profile() {
  const { userId } = useParams();

  return (
    <div>
      <NavBar />  
      <div>
        <h1>Profile Page</h1>
        <p>UserId: {userId}</p>
      </div>
      <Footer />
    </div>
  )
}
