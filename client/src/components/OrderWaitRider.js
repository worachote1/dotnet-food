import React,{ useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { RevolvingDot } from 'react-loader-spinner'

export default function OrderWaitRider({orderData}) {

  const [deliveryManData,setDeliveryManData] = useState([])
  const getDeliveryManData = () => {
    fetch(`http://localhost:5000/api/user/${orderData.deliveryManName}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setDeliveryManData(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(()=>{
    getDeliveryManData()
  },[])

  let test_riderDetail_div = []
  test_riderDetail_div.push(
      <div key={`order-waiting-rider`}>
        <div class="flex flex-col md:flex-row py-4 bg-teal-200 p-8 justify-center items-center">
            <img class='object-scale-down h-40 w-40 rounded-full' src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt=''></img>
            <div class='flex flex-col justify-center items-start'>
              <h2 className='text-2xl text-black p-2 px-10 md:text-3xl'><span className='font-bold' style={{ fontFamily: "'Noto Serif Thai', serif" }}>ชื่อผู้ส่ง : </span>{deliveryManData.userName}</h2>
              <h2 className='text-2xl text-black p-2 px-10 md:text-3xl'><span className='font-bold' style={{ fontFamily: "'Noto Serif Thai', serif" }}>เบอร์โทรศัพท์ : </span>{deliveryManData.phoneNum}</h2>
              <h2 className='text-2xl text-black p-2 px-10 md:text-3xl'><span className='font-bold' style={{ fontFamily: "'Noto Serif Thai', serif" }}>ที่อยู่ : </span>{deliveryManData.address}</h2>
            </div>
          </div>
      </div>
    )

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
          {test_riderDetail_div}
          <div className='flex justify-center p-8'>
          <Link to={`/order/${orderData.customerName}`}>
            <button className='p-3 px-20 pt-2 bg-teal-400 rounded-full baseline hover:bg-teal-300'>Back</button>
          </Link>
          </div>
        </div>
    </div>
  )
}