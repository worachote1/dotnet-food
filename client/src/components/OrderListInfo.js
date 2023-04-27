import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import OrderFinalRating from './OrderFinalRating'
import OrderWaitAcept from './OrderWaitAcept'
import OrderWaitRider from './OrderWaitRider'

export default function OrderListInfo() {
  
  const { orderId } = useParams();
  // const [status,setStatus] = useState("waiting_accept")
  const [orderData,setOrderData] = useState([])
  
  const getOrderData = () => {
    fetch(`http://localhost:5000/api/orders/${orderId}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setOrderData(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(()=>{
    getOrderData()
  },[])

  let default_component = <div>
        <NavBar />
        <div>
            OrderListInfo
        </div>
        <Footer />
    </div>
  const [statusComponent,setStatusComponent] = useState(null)

  useEffect(()=>{
    if(orderData.orderState === "waiting_accept"){
        setStatusComponent(<OrderWaitAcept orderData = {orderData}/>)
}
    else if(orderData.orderState === "waiting_rider"){
        setStatusComponent(<OrderWaitRider orderData = {orderData}/>)
}
    else if(orderData.orderState === "order_success"){
        setStatusComponent(<OrderFinalRating orderData = {orderData}/>)
}
    else{
    setStatusComponent(default_component)
}
},[orderData])

  return (
    <div>
      {statusComponent}
    </div>
  )
}