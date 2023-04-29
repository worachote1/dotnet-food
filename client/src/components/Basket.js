import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import BasketItem from './BasketItem'
import Swal from 'sweetalert2'

export default function Basket() {

  //  fetch Item that user add to basket (must be the same foodShop) 
  //  fetch Object from session
  const [currentMenuInBasket, setCurrentMenuInBasket] = useState(JSON.parse(sessionStorage.getItem("current_menuInBasket")))
  const navigate = useNavigate();
  const alert_EmptyBasket = () => {
    Swal.fire({
      title: 'Your Basket Is Empty',
      text: "Let's look at some food shops.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform any necessary delete action here
        navigate("/")
      }
    })
}

  const calSubTotal = () => {
    if(currentMenuInBasket === null){
      return 0
    }
    let cnt = 0
    for (let i = 0; i < currentMenuInBasket.length; i++){
      cnt += currentMenuInBasket[i].itemPrice * currentMenuInBasket[i].quantity
    }
    return cnt
  }
  const upDateSubTotal = (NewSubTotal) => {
    setSubTotal(NewSubTotal)
  }
  const [subTotal,setSubTotal] = useState(calSubTotal())

  const handle_placeOrder = () => {
    // POST API : create new Order
    fetch(`http://localhost:5000/api/orders/`,{
      method : "POST",
      body : JSON.stringify({
        "deliveryManName" : "",
        "customerName" : sessionStorage.getItem('current_user'),
        "orderState" : "waiting_accept",
        "date" : new Date().toLocaleString(),
        "menuInBasket" : sessionStorage.getItem('current_menuInBasket'),
        "foodshopInBasket" : sessionStorage.getItem('current_FoodShopInBasket')
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // alert(data)
      sessionStorage.removeItem('current_FoodShopInBasket');
      sessionStorage.removeItem('current_menuInBasket');
      navigate('/')
    })
    .catch((err) => {
      console.log(err)
    })
    
  }

  return (
    <div >
      <NavBar />

      <div class="p-4 min-h-screen ">
        {/* <div class="flex flex-col md:flex-row md:justify-center md:items-center">
          <p className='text-center text-4xl text-red-500' style={{ fontFamily: "Anton, sans-serif" }}>Shopping Cart</p>
        </div> */}
        {(currentMenuInBasket !== null)
          ? currentMenuInBasket.map((item) => {
            return <BasketItem key={`menu-${item.id}`} menuObj = {item} callbackUpdate = {upDateSubTotal} cur_subTotal = {subTotal} /> 
          })

          : alert_EmptyBasket()
        }
        {(currentMenuInBasket !== null) ?
          <>
            <div className="flex justify-end items-center mt-4 sm:mt-8">
              <span className="text-gray-600 mr-4">Subtotal:</span>
              <span className="text-xl font-bold">{subTotal} Bath</span>
            </div>
            <div className="flex justify-end items-center mt-2">
              <button className="btn btn-success"
              onClick={handle_placeOrder}
              >place order</button>
            </div>
          </>
          : ""}
      </div>

      <Footer />
    </div >
  )
}
