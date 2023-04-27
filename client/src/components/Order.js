import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'

export default function Order() {

  const { username } = useParams();
  const [ordersFromUser, setOrderFromUser] = useState([])
  const [allOrderUserDiv, setAllOrderUserDiv] = useState([])

  let order_status_imgPath = {
    "waiting_accept": "https://dummyimage.com/600x400/ffcc00/ffffff&text=Waiting+Accept",
    "waiting_rider": "https://dummyimage.com/600x400/33cc33/ffffff&text=Waiting+Rider",
    "order_success": "https://dummyimage.com/600x400/3366ff/ffffff&text=Order+Success"
  }

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

  useEffect(() => {
    const divElements = ordersFromUser.map((item) =>
    (
      <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4 ">
        {/* use orderState in data base to check in order_status_imgPath*/}
        <figure><img src={`${order_status_imgPath[`${item.orderState}`]}`} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Order ID : {item.orderId}
            {/* display NEW badge if that order's status == waiting_accept  */}
            {(item.orderState === "waiting_accept") ? <div className="badge badge-secondary"> NEW </div> : ""}
          </h2>
          <p>Order Status : <span className='font-bold'> {item.orderState} </span></p>
          <p>Customer : <span className='font-bold'> {item.customerName} </span></p>
          <p>Food Shop : <span className='font-bold' style={{ fontFamily: "'Noto Serif Thai', serif" }}> {item.foodshopInBasket} </span></p>
          <p>Date : <span className='font-bold'>{item.date}</span></p>
          <div className="card-actions justify-end">
            <Link 
              to={
                `/order-list-info/${item.orderId}`
              }>
              <button className="btn btn-danger">Detail</button>
            </Link>
          </div>
        </div>
      </div>
    )
    )
    setAllOrderUserDiv(divElements)
  }, [ordersFromUser])

  return (
    <div>
      <NavBar />
      <div className='min-h-screen'>
        <div>
          <p> Order (display all order that relate to this user) </p>
          <p> these order belong to user : <span className='text-red-500'> {username} </span> </p>
        </div>

        <div className='order-controller flex flex-wrap justify-center mb-5'>
          {allOrderUserDiv}
        </div>
      </div>

      <Footer />
    </div>
  )
}
