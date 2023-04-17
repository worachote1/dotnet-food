import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'

export default function Order() {

  const { username } = useParams();
  const [orderAllUser, setOrderAllUser] = useState([])
  const [ordersFromUser, setOrderFromUser] = useState([])

  let order_status_imgPath = {
    "waiting_accept": "https://dummyimage.com/600x400/ffcc00/ffffff&text=Waiting+Accept",
    "waiting_rider": "https://dummyimage.com/600x400/33cc33/ffffff&text=Waiting+Rider",
    "order_success": "https://dummyimage.com/600x400/3366ff/ffffff&text=Order+Success"
  }
  let test_orderFromSingleUser_div = []
  for (let i = 1; i <= 5; i++) {
    test_orderFromSingleUser_div.push(
      <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4 ">
        {/* use orderState in data base to check in order_status_imgPath*/}
        <figure><img src={`${order_status_imgPath.waiting_accept}`} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Order ID : 44
            {/* display NEW badge if that order's status == waiting_accept  */}
            {(true) ? <div className="badge badge-secondary"> NEW </div> : ""}
          </h2>
          <p>Order Status : สถานะของ Order</p>
          <p>Customer : ชื่อลูกค้า</p>
          <p>Food Shop : ชื่อร้าน</p>
          <p>Date : date ที่ สั่ง order</p>
          <div className="card-actions justify-end">
            <Link
              to={
                `/order-list-info/${i}`
              }>
              <button className="btn btn-danger">Detail</button>
            </Link>
          </div>
        </div>
      </div>
//  time-fronted prn 
    )
  }

  const getAllOrders = () => {
    // get Order that belong to any users

  }

  const getOrderFromSingleUser = () => {
    // loop each orders
    // if check customerName == username stored on sessionStorage
    // then push to orderFromUser after that reverse array inorder to display the lasted orders 

  }

  useEffect(() => {
    getAllOrders()
  }, [])
  useEffect(() => {
    getOrderFromSingleUser()
  }, [orderAllUser])

  return (
    <div className='min-h-screen'>
      <NavBar />
      <div>
        <p> Order (display all order that relate to this user) </p>
        <p> these order belong to user : <span className='text-red-500'> {username} </span> </p>
      </div>

      <div className='order-controller flex flex-wrap justify-center'>
        {test_orderFromSingleUser_div}
      </div>

      <Footer />
    </div>
  )
}
