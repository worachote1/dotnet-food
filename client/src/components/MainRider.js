import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import OrderRider from './OrderRider'

export default function MainRider() {

  const [allOrders, setAllOrders] = useState([])
  // orders with orderState === "waiting_accept"
  const [allWaitingOrders, setAllWaitingOrders] = useState([])
  // an order that orderState === "waiting_rider" && deliveryManName === current_user(on SessionStorage)
  const [deliveringOrder, setDeliveringOrder] = useState([])
  // 
  const [all_waitingOrders_div, setAllWaitingOrdersDiv] = useState([])

  const getAllOrder = () => {
    fetch(`http://localhost:5000/api/orders/`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setAllOrders(data.slice().reverse())
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const filter_allWaitingOrders = () => {
    const filteredOrders = allOrders.filter(order => order.orderState === "waiting_accept");
    setAllWaitingOrders(filteredOrders);
  }

  const filter_deliveringOrder = () => {
    const currentUser = sessionStorage.getItem('current_user');
    const filteredOrders = allOrders.filter(order =>
      order.orderState === 'waiting_rider' && order.deliveryManName === currentUser
    );
    setDeliveringOrder(filteredOrders);
  };

  useEffect(() => {
    getAllOrder()
  }, [])
  useEffect(() => {
    filter_allWaitingOrders()
    filter_deliveringOrder()
  }, [allOrders])
  useEffect(() => {
    const divElements = allWaitingOrders.map((item) => (
      <Link
        to={`/main-rider/order-list-info/${item.orderId}`}
        class="group"
      >
        <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4 ">
          {/* use orderState in data base to check in order_status_imgPath*/}
          <figure><img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" className='object-cover h-44 w-full'/></figure>
          <div className="card-body">
            <h2 className="card-title">
              Order ID : {item.orderId} 
              {(item.orderState === "waiting_accept") ? <div className="badge badge-secondary"> NEW </div> : ""}
            </h2>
            <p>Order Status : <span className='font-bold text-green-600'> {item.orderState} </span></p>
            <p>Customer : <span className='font-bold'> {item.customerName} </span></p>
            <p>Food Shop : <span className='font-bold' style={{ fontFamily: "'Noto Serif Thai', serif" }}> {item.foodshopInBasket} </span></p>
            <p>Date : <span className='font-bold'>{item.date}</span></p>
            <div className="card-actions justify-end">
              <Link
                to={
                  `/main-rider/order-list-info/${item.orderId}`
                }>
                <button className="btn btn-danger">Detail</button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    )
    )
    setAllWaitingOrdersDiv(divElements)
  }, [allWaitingOrders])


  return (

    <div>
      {(deliveringOrder.length === 0)
        ?
        <div>
          <NavBar />
          <div class="min-h-screen flex">
              <div class='flex flex-wrap justify-center mb-5'>
                {all_waitingOrders_div}
              </div>
          </div>
          <Footer />
        </div>
        : <OrderRider deliveringOrder={deliveringOrder} />
      }
    </div>
  )
}
