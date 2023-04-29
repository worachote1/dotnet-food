import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { redirect, useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'

export default function OrderRider() {

  const navigate = useNavigate();
  const orderId = useParams().orderId
  const [orderData, setOrderData] = useState([])
  const [menuInOrder, setMenuInOrder] = useState([])
  const [all_MenuOrderDiv, setAllMenuOrderDiv] = useState([])
  const [foodShopInOrder, setFoodShopInOrder] = useState([])
  const [customerInOrder, setCustomerInOrder] = useState([])
  const [deliveryMan, setDeliveryMan] = useState([])

  const calSubTotal = () => {
    let subTotal = 0
    for (let i = 0; i < menuInOrder.length; i++) {
      subTotal += menuInOrder[i].itemPrice * menuInOrder[i].quantity
    }
    return subTotal
  }

  const handle_ClickAcceptOrder = () => {
    fetch(`http://localhost:5000/api/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        deliveryManName : sessionStorage.getItem('current_user'),
        customerName: orderData.customerName, 
        orderState: "waiting_rider",
        date : orderData.date,
        menuInBasket: orderData.menuInBasket,
        foodshopInBasket: orderData.foodshopInBasket
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.error(error))

    navigate('/')
  }

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

  const getCustomerData = (customerName) => {
    fetch(`http://localhost:5000/api/user/${customerName}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setCustomerInOrder(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getFoodShopData = (foodShopName) => {
    fetch(`http://localhost:5000/api/foodshop/${foodShopName}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setFoodShopInOrder(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    getOrderData()
  }, [])

  useEffect(() => {
    if (orderData && orderData.menuInBasket) {
      const menuData = JSON.parse(orderData.menuInBasket);
      setMenuInOrder(menuData);
      getFoodShopData(orderData.foodshopInBasket)
      getCustomerData(orderData.customerName)
    }
  }, [orderData]);

  useEffect(() => {
    const divElements = menuInOrder.map((item) => (
      <li class="flex items-center gap-4">
        <img
          src={item.imgPath}
          alt=""
          class="h-24 w-32 md:h-44 md:w-72 rounded object-cover"
        />

        <div>
          <h3 class="text:xl md:text-3xl text-gray-900 ">
            <span style={{ fontFamily: "'Noto Serif Thai', serif" }}>{item.itemName}</span>
            <span className='font-bold'> X {item.quantity}</span>
          </h3>
        </div>



        <div class="flex flex-1 items-center justify-end gap-2 text:xl md:text-3xl">
          {item.itemPrice * item.quantity} Bath
        </div>

      </li>
    )
    )
    setAllMenuOrderDiv(divElements)
  }, [menuInOrder])


  return (
    <div>
      <NavBar />
      <div class="min-h-screen mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto ">
          <header class="text-center">
            <h1 class="font-bold text-gray-900 text-3xl md:text-4xl" style={{ fontFamily: "'Noto Serif Thai', serif" }}>{orderData.foodshopInBasket}</h1>
            <h3 class="font-bold text-gray-500 text-xl md:text-2xl" style={{ fontFamily: "'Noto Serif Thai', serif" }}>{foodShopInOrder.address}</h3>
          </header>

          <div class="mt-8">
            <ul class="space-y-4">
              {all_MenuOrderDiv}
            </ul>

            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4 ">
                <dl class="space-y-0.5 text-md md:text-xl text-gray-700">
                  <div class="flex justify-between text-xl md:text-3xl">
                    <dt className='font-bold'>Total</dt>
                    <dd>{calSubTotal()} Bath</dd>
                  </div>
                </dl>

                <div class="flex justify-start">
                    <img
                      src="https://www.svgrepo.com/show/514283/user.svg"
                      alt=""
                      class="h-6 w-6 md:h-8 md:w-8 mr-2"
                    />

                    {/* whitespace-nowrap */}
                    {/*  {customerInOrder.address} */}
                    <div class="text-xl md:text-3xl w-full">
                    Customer : <span className='font-bold'>{customerInOrder.userName}</span>
                    </div>
                </div>

                <div class="flex justify-start">
                    <img
                      src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"
                      alt=""
                      class="h-6 w-6 md:h-8 md:w-8 mr-2"
                    />

                    {/* whitespace-nowrap */}
                    {/*  {customerInOrder.address} */}
                    <div class="text-xl md:text-3xl w-full">
                      Address : <span className='font-bold'>{customerInOrder.address}</span>
                    </div>
                </div>

                <div class="flex justify-center md:justify-end">
                <button className="btn btn-success text-white"
                  onClick={handle_ClickAcceptOrder}
                >
              Accept Order
            </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}