import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { RevolvingDot } from 'react-loader-spinner'

export default function OrderWaitRider() {
  return (
    <div>
        <NavBar />
        <div className='mx-auto bg-scale-300 h-screen'>
          {/* Waiting Acept */}
          <div className='flex flex-col items-center bg-teal-400'>
            <div className='spinner-container p-2'>
              <RevolvingDot
                height="200"
                width="200"
                radius="100"
                color="orange"
                secondaryColor='white'
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
            <h1 className='text-3xl font-bold mx-auto text-white p-4 text-center'>Order Status : Waiting A Rider</h1>
            <h4 className='text-2xl text-white mx-auto p-2 text-center'>Waiting for a moment...</h4>
          </div>
          {/* Rider Information */}
          <div className='p-8'></div>
          <div class="flex flex-row py-4 bg-teal-200 p-8">
            <img class='object-scale-down h-40 w-40 rounded-full' src='https://i2-prod.manchestereveningnews.co.uk/incoming/article26496180.ece/ALTERNATES/s1200c/0_GettyImages-1473778315.jpg' alt=''></img>
            <div class='flex flex-col justify-start'>
              <h2 className='text-2xl text-black p-2 px-10'>ชื่อผู้ส่ง : Erling Braut Haaland</h2>
              <h2 className='text-2xl text-black p-2 px-10'>เบอร์ผู้ส่ง : xxx-xxxx-xxxx</h2>
            </div>
          </div>
          <div className='flex justify-center p-8'>
            <a href='#' class='p-3 px-20 pt-2 bg-teal-400 rounded-full baseline hover:bg-teal-300'>Back</a>
          </div>
        </div>
    </div>
  )
}
