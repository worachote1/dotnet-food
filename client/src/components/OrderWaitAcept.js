import React,{ useEffect, useState } from 'react'
import NavBar from './NavBar'
import { MagnifyingGlass } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function OrderWaitAcept() {

  let test_foodShopItem_data = [
    {
      "id": 1,
      "quantity" : 1,
      "itemName": "ข้าวผัด",
      "itemPrice": 42,
      "type": "อาหารคาร",
      "imgPath": 'http://food.mthai.com/app/uploads/2015/03/1324956564.jpg'
    }
    ,
    {
      "id": 2,
      "quantity" : 2,
      "itemName": "บัวลอย",
      "itemPrice": 55,
      "type": "อาหารหวาน",
      "imgPath": 'http://f.ptcdn.info/557/035/000/1442537793-IMG34862-o.jpg'
    },
    {
      "id": 3,
      "quantity" : 4,
      "itemName": "ไข่เจียว",
      "itemPrice": 35,
      "type": "อาหารทอด",
      "imgPath": 'https://img.kapook.com/u/2016/wanwanat/0_edit/385698979x.jpg'
    }
  ]

  const [foodItem, setFoodItem] = useState([])

  const current_user = sessionStorage.getItem("current_user")

  const navigate = useNavigate();
  const alert_CancleOrder = () => {
    Swal.fire({
      title: 'Are you sure to cancle the order?',
      text: "We will delete the order.",
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

  let subTotal = 0
  for(let i=0; i < test_foodShopItem_data.length ; i++){
    subTotal += test_foodShopItem_data[i].itemPrice * test_foodShopItem_data[i].quantity
  }

  let test_foodDetail_div = []
  test_foodShopItem_data.map((item) => {
    test_foodDetail_div.push(
      <div key={`${item.itemName}-${item.id}`}>
          <div class="flex flex-col md:flex-row px-10 py-4 bg-teal-200 items-center">
            <img src={item.imgPath} alt="Product image" class="w-72 h-44 object-cover rounded-lg" />
            <div class='flex justify-center md:justify-start flex-1 w-64 items-center px-10 text-xl md:text-3xl'> {item.itemName} <span className='text-xl font-bold md:text-3xl ml-3'>x</span><span className='text-xl font-bold md:text-3xl ml-3'>{item.quantity}</span></div>
            <div class='flex justify-center md:justify-end flex-1 w-32 items-center  mx-10 text-xl md:text-3xl'> {item.quantity * item.itemPrice} Baht</div>
          </div>
        <div className='p-4'></div>
      </div>
    )
  })
  
  return (
    <div>
      <NavBar />
      <div className='mx-auto bg-scale-300 h-screen'>
        
        {/* Waiting Acept */}
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
          <h1 className='text-3xl font-bold mx-auto text-white p-4 text-center'>Order Status : Waiting for rider accept a order</h1>
          <h4 className='text-2xl text-white mx-auto p-2 text-center'>Waiting for a moment...</h4>
          <h4 className='text-2xl text-white mx-auto p-2 text-center'></h4>
        </div>

        {/* Order Information */}
        <div className='p-8'></div>
          <div className='flex flex-col justify-center md:justify-end items-end px-10 bg-teal-400 p-10'>
          <span className="text-xl font-bold text-gray-600">Subtotal : </span>
            <span className="text-3xl font-bold">{subTotal} Baht</span>
          </div>
        <div className='flex justify-center p-8'>
        <Link to ={`/order/${current_user}`}>
          <btn class='p-3 px-20 pt-2 bg-teal-400 rounded-full baseline hover:bg-teal-300'>
            Back
          </btn>
        </Link>
        
        </div>
      </div>
    </div>
  )
}