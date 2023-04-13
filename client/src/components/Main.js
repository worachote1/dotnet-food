import React, { useEffect, useState } from 'react'

export default function Main() {

  const [testData,setTestData] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:5000/api/testapi`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      console.log(typeof(data))
      console.log(typeof(JSON.stringify(data)))
      console.log("get data from api success")
      setTestData(data.message)
    })
    .catch((err) => {
      console.log("GET data failed !")
    })
  },[])

  

  return (
    <div className="bg-blue-500 text-white p-4 ">
      This is main
      <div>
        get message data fom testAPiController <span className='text-red-500'> {testData}</span> 
      </div>
     
    </div>
  )
}
