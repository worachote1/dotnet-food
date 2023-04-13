import React from 'react'
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { userId } = useParams();

  return (
    <div>
      <h1>Profile Page</h1>
      <p>UserId: {userId}</p>
    </div>
  )
}
