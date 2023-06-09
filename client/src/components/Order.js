import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'

export default function Order() {

  const { username } = useParams();
  const [ordersFromUser, setOrderFromUser] = useState([])
  const [allOrderUserDiv, setAllOrderUserDiv] = useState([])
  const [selectStatus, setSelectStatus] = useState("waiting_accept")

  const order_status_imgPath = {
    "waiting_accept": "https://dummyimage.com/600x400/ffcc00/ffffff&text=Waiting+Accept",
    "waiting_rider": "https://dummyimage.com/600x400/33cc33/ffffff&text=Waiting+Rider",
    "order_success": "https://dummyimage.com/600x400/3366ff/ffffff&text=Order+Success"
  }

  const selectStatusStyle = {
    "waiting_accept": "bg-yellow-500",
    "waiting_rider": "bg-green-500",
    "order_success": "bg-blue-500"
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
  const handle_ClickSelectStatus = (status) => {
    setSelectStatus(status)
  }

  useEffect(() => {
    getOrderFromSingleUser()
  }, [])

  useEffect(() => {
    const divElements = ordersFromUser.map((item) => {
      if (item.orderState === selectStatus) {
        return (
          <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4 ">
          {/* use orderState in data base to check in order_status_imgPath*/}
          <figure><img src={`${order_status_imgPath[`${item.orderState}`]}`} /></figure>
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
      }
    }
    )
    setAllOrderUserDiv(divElements)
  }, [ordersFromUser,selectStatus])

  return (
    <div>
      <NavBar />
      <div className='min-h-screen'>
        {/* <div>
          <p> Order (display all order that relate to this user) </p>
          <p> these order belong to user : <span className='text-red-500'> {username} </span> </p>
        </div> */}

        {/* test select option */}
        <div className={`p-4`}>
          <div className={`dropdown`}>
            <label tabIndex={0} className={`btn m-1 ${selectStatusStyle[selectStatus]}`}>{selectStatus} <span className='ml-1'> {<AiFillCaretDown size={20}/>} </span></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li className='hover:bg-yellow-400'><button onClick={() => handle_ClickSelectStatus("waiting_accept")}>waiting_accept</button></li>
              <li className='hover:bg-green-400'><button onClick={() => handle_ClickSelectStatus("waiting_rider")}>waiting_rider</button></li>
              <li className='hover:bg-blue-400'><button onClick={() => handle_ClickSelectStatus("order_success")}>order_success</button></li>
            </ul>
          </div>
        </div>

        <div className='order-controller flex flex-wrap justify-center mb-5'>

          {allOrderUserDiv}
        </div>
      </div>

      <Footer />
    </div>
  )
}
