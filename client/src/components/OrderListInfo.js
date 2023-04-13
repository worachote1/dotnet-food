import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import OrderFinalRating from './OrderFinalRating'
import OrderWaitAcept from './OrderWaitAcept'
import OrderWaitRider from './OrderWaitRider'

export default function OrderListInfo() {

  const [status,setStatus] = useState("waiting_accept")
  let default_component = <div>
        <NavBar />
        <div>
            OrderListInfo
        </div>
        <Footer />
    </div>
  const [statusComponent,setStatusComponent] = useState(null)

  useEffect(()=>{
    if(status === "waiting_accept"){
        setStatusComponent(<OrderWaitAcept />)
}
    else if(status === "waiting_rider"){
        setStatusComponent(<OrderWaitRider />)
}
    else if(status === "final_rating"){
        setStatusComponent(<OrderFinalRating />)
}
    else{
    setStatusComponent(default_component)
}

},[])

  return (
    <div>
      {statusComponent}
    </div>
  )
}