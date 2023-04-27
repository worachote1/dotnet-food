import React from 'react'
import { useState, useEffect } from 'react'
import OrderFinalRating from './OrderFinalRating'
import OrderWaitAcept from './OrderWaitAcept'
import OrderWaitRider from './OrderWaitRider'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'

export default function OrderListInfo() {

  //คิดว่าจะใช้วิธีถ้ากดในnavbar แล้วใส่ current status ว่า ตอนนี้statusอะไร
  const [status,setStatus] = useState("")
  const [statusComponent,setStatusComponent] = useState(null)

  const [status,setStatus] = useState("waiting_accept")

  useEffect(()=>{
    if(status === "waiting_accept"){
        setStatusComponent(<OrderWaitAcept />)
    }
    else if(status === "waiting_rider"){
        setStatusComponent(<OrderWaitRider />)
    }
    else if(status === "order_success"){
        setStatusComponent(<OrderFinalRating />)
    }
    else{
}

},[])

  return (
    <div>
      {statusComponent}
    </div>
  )
}