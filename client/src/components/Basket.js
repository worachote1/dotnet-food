import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import BasketItem from './BasketItem'
import Swal from 'sweetalert2'

export default function Basket() {

  //  fetch Item that user add to basket (must be the same foodShop) 
  //  ** fetch Object from session
  const [currentMenuInBasket, setCurrentMenuInBasket] = useState(JSON.parse(sessionStorage.getItem("currrent_menuInBasket")))

  const alert_EmptyBasket = () => {
    Swal.fire({
      title: 'Not add any menu',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
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
            return <BasketItem key={item.id} itemName={item.itemName} itemPrice={item.itemPrice} quantity={item.quantity} imgPath={item.imgPath} />
          })

          : "not add any menu"
        }
        {(currentMenuInBasket !== null) ?
          <>
            <div class="flex justify-end items-center mt-4 sm:mt-8">
              <span class="text-gray-600 mr-4">Subtotal:</span>
              <span class="text-xl font-bold">$35.00</span>
            </div>
            <div class="flex justify-end items-center mt-2">
              <button className="btn btn-success">order now</button>
            </div>
          </>
          : ""}
      </div>

      <Footer />
    </div >
  )
}
