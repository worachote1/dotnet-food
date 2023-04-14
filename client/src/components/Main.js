import React, { useEffect, useState } from 'react'

export default function Main() {

  const [testData,setTestData] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:5000/api/user`)
    .then((res)=>{

      return res.json()
    })
    .then((data)=>{
      console.log("get user success !")
      setTestData(data)
    })
  },[])
  

  return (
    <div className=" text-black p-4 ">
      This is main
      {/* <div>
        get message data fom testAPiController <span className='text-red-500'> {testData}</span> 
      </div> */}
      <div>
        get User data fom UserController <span className='text-green-500'> {JSON.stringify(testData)} </span> 
      </div>
     
    </div>
  )
}