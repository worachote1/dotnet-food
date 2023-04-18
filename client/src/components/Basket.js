import React, { useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'

export default function Basket() {



  return (
    <div >
      <NavBar />

      <div class="p-4 min-h-screen ">
        {/* <div class="flex flex-col md:flex-row md:justify-center md:items-center">
          <p className='text-center text-4xl text-red-500' style={{ fontFamily: "Anton, sans-serif" }}>Shopping Cart</p>
        </div> */}
        <div class="">
          <div class="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div class="flex-shrink-0">
              <img src="https://picsum.photos/id/237/150/150" alt="Product image" class="w-32 h-32 object-cover" />
            </div>
            <div class="mt-4 md:mt-0 md:ml-6">
              <h2 class="text-lg font-bold">Product Title</h2>
              <p class="mt-2 text-gray-600"></p>
              <div class="mt-4 flex items-center">
                <span class="mr-2 text-gray-600">Quantity:</span>
                <div class="flex items-center">
                  <button class="bg-gray-200 rounded-l-lg px-2 py-1" >-</button>
                  <span class="mx-2 text-gray-600">1</span>
                  <button class="bg-gray-200 rounded-r-lg px-2 py-1" >+</button>
                </div>
                <span class="md:ml-8 ml-auto font-bold">20.00 Bath</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div class="flex-shrink-0">
              <img src="https://picsum.photos/id/237/150/150" alt="Product image" class="w-32 h-32 object-cover" />
            </div>
            <div class="mt-4 md:mt-0 md:ml-6">
              <h2 class="text-lg font-bold">Product Title</h2>
              <p class="mt-2 text-gray-600"></p>
              <div class="mt-4 flex items-center">
                <span class="mr-2 text-gray-600">Quantity:</span>
                <div class="flex items-center">
                  <button class="bg-gray-200 rounded-l-lg px-2 py-1" >-</button>
                  <span class="mx-2 text-gray-600">1</span>
                  <button class="bg-gray-200 rounded-r-lg px-2 py-1" >+</button>
                </div>
                <span class="md:ml-8 ml-auto font-bold">15.00 Bath</span>
              </div>
            </div>
          </div>
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
