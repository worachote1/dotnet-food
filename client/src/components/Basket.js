import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import BasketItem from './BasketItem'

export default function Basket() {

  //  fetch Item that user add to basket (must be the same foodShop) from session


  return (
    <div >
      <NavBar />

      <div class="p-4 min-h-screen ">
        {/* <div class="flex flex-col md:flex-row md:justify-center md:items-center">
          <p className='text-center text-4xl text-red-500' style={{ fontFamily: "Anton, sans-serif" }}>Shopping Cart</p>
        </div> */}
        <div class="">
            <BasketItem itemName={"food-1"} itemPrice={44} quantity={2} imgPath={'https://picsum.photos/id/237/150/150'}/>
            <BasketItem itemName={"food-2"} itemPrice={35} quantity={1} imgPath={'https://picsum.photos/id/237/150/150'}/>
          
        </div>
        <div class="flex justify-end items-center mt-4 sm:mt-8">
          <span class="text-gray-600 mr-4">Subtotal:</span>
          <span class="text-xl font-bold">$35.00</span>
        </div>
        <div class="flex justify-end items-center mt-2">
          <button className="btn btn-success">order now</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
