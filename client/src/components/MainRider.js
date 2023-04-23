import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

export default function MainRider() {

  const isDelivering = sessionStorage.getItem("User_isDelivering")

  const redirect = (isDelivering) => {
    if(isDelivering === true){
      window.location.replace(`/order-list-info/1`)
    }
  }

  let test_order_data = [
    {
      orderId: 1,
      orderState:"waitAccept",
      custumerName:"tester 1",
      address:"ชั้น 1",
      itemList:[
        {
          id: 1,
          itemName: "Noodles",
          itemPrice: 50.0,
          quantity: 2,
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"

        },
        {
          id: 2,
          itemName: "Noodles2",
          itemPrice: 75.0,
          quantity: 1,
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    },{
      orderId: 2,
      orderState:"waitAccept",
      custumerName:"tester 2",
      address:"ชั้น 2",
      itemList:[
        {
          id: 1,
          itemName: "Pizza",
          itemPrice: 420.0,
          quantity: 1,
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
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }, {
          id: 2,
          itemName: "ข้าวผัด",
          itemPrice: 50.0,
          quantity: 2,
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }, {
          id: 3,
          itemName: "ผัดหมี่",
          itemPrice: 55.0,
          quantity: 3,
          imgPath: "https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png"
        }
      ]
    }
  ]

  const [order, setOrder] = useState([])
  
  const hanldeClickOrder_list_info = (orderID,custumerName,itemList,address) =>{
    let fromWhichCustomer = sessionStorage.getItem("current_customer")

    if(fromWhichCustomer === null || fromWhichCustomer !== custumerName){
      sessionStorage.setItem("current_customer_orderID")

      sessionStorage.setItem("current_customer",custumerName)

      sessionStorage.setItem("customer_order_list",JSON.stringify(itemList))

      sessionStorage.setItem("customer_address",address)
    }
  }


  let test_order_div = []
  order.map((item) => {
    if(item.orderState=="waitAccept"){
      test_order_div.push(
        <Link
            onClick={() => hanldeClickOrder_list_info(item.custumerName,item.itemList,item.address)}
            to={ `/order-list-info/${item.orderId}`}
            class="group"
        >
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
          </div>
          <h3 class="mt-4 text-base text-gray-700">
            {item.orderId}. Name : {item.custumerName}
          </h3>
        </Link>
      )
    }
    
  })

  useEffect(() => {
    setOrder(test_order_data)
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

  return (
    
    <div>
        
        <NavBar />
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {test_order_div}
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
