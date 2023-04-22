import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { MagnifyingGlass } from 'react-loader-spinner'

export default function OrderWaitAcept() {
  return (
    <div>
      <NavBar />
      <div className='mx-auto bg-scale-300 h-screen'>
        
        {/* Waiting Acept  */}
        <div className='flex flex-col items-center bg-teal-400'>
          <div className='spinner-container p-2'>
            <MagnifyingGlass 
              visible={true}
              height="200"
              width="200"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor = 'orange'
              color = 'white'
            />
          </div>
          <h1 className='text-3xl font-bold mx-auto text-white p-4 text-center'>Order Status : Waiting For Accept Order</h1>
          <h4 className='text-2xl text-white mx-auto p-2 text-center'>Waiting for a moment...</h4>
        </div>

        {/* Order Information ss from AJ-backup*/}
        <div className='p-8'></div>
        <div class="flex flex-row px-10 py-4 bg-teal-200">
          <div class='flex flex-none flex-row bg-sky-600 rounded w-20 h-20 items-center justify-center'><h1 className='text-3xl font-bold'>2</h1></div>
          <div class='flex flex-1 w-64 items-center px-10'>ชื่ออาหาร</div>
          <div class='flex flex-1 w-32 items-center justify-end mx-10'>ราคา</div>
        </div>
        <div className='p-4'></div>
        <div class="flex flex-row px-10 py-4 bg-teal-200">
          <div class='flex flex-none flex-row bg-sky-600 rounded w-20 h-20 items-center justify-center'><h1 className='text-3xl font-bold'>1</h1></div>
          <div class='flex flex-1 w-64 items-center px-10'>ชื่ออาหาร</div>
          <div class='flex flex-1 w-32 items-center justify-end mx-10'>ราคา</div>
        </div>
        <div className='p-4'></div>
        <div class="flex flex-row px-10 py-4 bg-teal-200">
          <div class='flex flex-none flex-row bg-sky-600 rounded w-20 h-20 items-center justify-center'><h1 className='text-3xl font-bold'>1</h1></div>
          <div class='flex flex-1 w-64 items-center px-10'>ชื่ออาหาร</div>
          <div class='flex flex-1 w-32 items-center justify-end mx-10'>ราคา</div>
        </div>
        <div className='flex justify-center p-8'>
          <a href='#' class='p-3 px-20 pt-2 bg-teal-400 rounded-full baseline hover:bg-teal-300'>Cancle Order</a>
        </div>
      </div>
    </div>
  )
}