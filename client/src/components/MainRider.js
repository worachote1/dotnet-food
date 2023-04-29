import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import OrderRider from './OrderRider'
import OrderDelivering from './OrderDelivering'

export default function MainRider() {

  const riderStatus = sessionStorage.getItem("rider_status")
  const orderId = sessionStorage.getItem("current_customer_orderID")

  //ถ้ารับงานแล้วให้มันไปงานที่รับไว้เลย
  const redirect = (riderStatus,orderId) => {
    let destination = `/main-rider/order-list-info/${orderId}`
    console.log(riderStatus)
    if(riderStatus === "delivering"){
      window.location.replace(destination)
    }
  }

  let test_order_data = [
    {
      orderId: 1,
      orderState:"waiting_accept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 2,
      orderState:"waiting_accept",
      custumerName:"tester 2",
      address:"ชั้น 2",
      itemList:[
        {
          id: 1,
          itemName: "Pizza",
          itemPrice: 420.0,
          quantity: 1,
          shopName: "Pizza store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 3,
      orderState:"waitRider",
      custumerName:"tester 3",
      address:"ชั้น 3",
      itemList:[
        {
          id: 1,
          itemName: "ข้าวมันไก่ทอด",
          itemPrice: 60.0,
          quantity: 1,
          shopName: "ร้านข้าวมันไก",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }, {
          id: 2,
          itemName: "ข้าวผัด",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "ร้านอาหารตามสั่ง",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }, {
          id: 3,
          itemName: "ผัดหมี่",
          itemPrice: 55.0,
          quantity: 3,
          shopName: "ร้านอาหารตามสั่ง",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 4,
      orderState:"waiting_accept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 5,
      orderState:"waiting_accept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 6,
      orderState:"waiting_accept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 7,
      orderState:"waiting_accept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 8,
      orderState:"waiting_accept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 9,
      orderState:"waiting_accept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 10,
      orderState:"waiting_accept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          shopName: "Noodles store",
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    }
  ]

  const [order, setOrder] = useState([])
  
  const hanldeClickOrder_list_info = (orderId,custumerName,itemList,address) =>{
    let fromWhichCustomer = sessionStorage.getItem("current_customer")

    if(fromWhichCustomer === null || fromWhichCustomer !== custumerName){
      sessionStorage.setItem("current_customer_orderID",orderId)

      sessionStorage.setItem("current_customer",custumerName)

      sessionStorage.setItem("customer_order_list",JSON.stringify(itemList))

      sessionStorage.setItem("customer_address",address)
    }
  }


  let test_order_div = []
  order.map((item) => {
    //เช็คOrderที่ยังไม่มีrider รับ
    if(item.orderState === "waiting_accept"){
      test_order_div.push(
        <Link
            onClick={() => hanldeClickOrder_list_info(item.orderId,item.custumerName,item.itemList,item.address)}
            to={ `/main-rider/order-list-info/${item.orderId}`}
            class="group"
        >
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Order {item.orderId}</h2>
              <p>{item.custumerName}</p>
              <div class="card-actions justify-end">
                <button 
                  onClick={() => hanldeClickOrder_list_info(item.orderId,item.custumerName,item.itemList,item.address)} 
                  to={ `/main-rider/order-list-info/${item.orderId}`}
                  class="btn btn-primary"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </Link>
      )
    }
    
  })

  useEffect(() => {
    setOrder(test_order_data)

    redirect(riderStatus,orderId)
  }, [])

  const getOrder = () => {
    fetch(`http://localhost:5000/api/order`)
      .then((res) => {

        return res.json()
      })
      .then((data) => {
        console.log("get order success !")
        setOrder(data)
      })
      .catch((err) => {
        console.log("get order failed !")
      })
  }

  const filter_allWaitingOrders = () => {
    const currentUser = sessionStorage.getItem('current_user');
    const filteredOrders = allOrders.filter(order => order.orderState === "waiting_accept" && order.customerName !== currentUser);
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
          <figure><img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" className='object-cover h-44 w-full' /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Order ID : {item.orderId}
              {(item.orderState === "waiting_accept") ? <div className="badge badge-secondary"> NEW </div> : ""}
            </h2>
            <p>Order Status : <span className='font-bold text-warning'> {item.orderState} </span></p>
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
          <div class="min-h-screen flex flex-wrap justify-center mb-5">
            {all_waitingOrders_div}
          </div>
          <Footer />
        </div>
        : <OrderDelivering deliveringOrder={deliveringOrder[0]} />
      }
    </div>
  )
}