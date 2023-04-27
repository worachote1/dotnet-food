import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import OrderFinalRating from './OrderFinalRating'
import OrderWaitAcept from './OrderWaitAcept'
import OrderWaitRider from './OrderWaitRider'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'

export default function OrderListInfo() {

  const { username } = useParams();
  const [ordersFromUser, setOrderFromUser] = useState([])

  const getOrderFromSingleUser = () => {
    fetch(`http://localhost:5000/api/orders/by_customer?customerName=${username}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setOrderFromUser(data.slice().reverse())
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getOrderFromSingleUser()
  }, [])

  let default_component = <div>
        <NavBar />
        <div>
            OrderListInfo
        </div>
        <Footer />
    </div>
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
    setStatusComponent(default_component)
    }

},[])

  return (
    <div>
      {statusComponent}
    </div>
  )
}