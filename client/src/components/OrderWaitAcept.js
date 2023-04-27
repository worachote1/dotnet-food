import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { MagnifyingGlass } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Footer from './Footer'

export default function OrderWaitAcept({ orderData }) {

  const navigate = useNavigate();
  const current_user = sessionStorage.getItem("current_user")
  const menuInOrder = JSON.parse(orderData.menuInBasket);
  const [allMenuInOrderDiv, setAllMenuInOrderDiv] = useState([])
  console.log("ipo")
  console.log(menuInOrder)
  console.log(typeof (menuInOrder))
  const calSubTotal = () => {
    let subTotal = 0
    for (let i = 0; i < menuInOrder.length; i++) {
      subTotal += menuInOrder[i].itemPrice * menuInOrder[i].quantity
    }
    return subTotal
  }
  useEffect(() => {
    const divElements = menuInOrder.map((item) =>
    (
      <div key={`menu-item-${item.itemName}`}>
        <div class="flex flex-col md:flex-row px-10 py-4 bg-teal-200 items-center">
          <img src={item.imgPath} alt="Product image" class="w-72 h-44 object-cover rounded-lg" />
          <div class='flex justify-center mt-4 md:justify-start flex-1 items-center px-10 text-xl md:text-3xl md:mt-0 '
            style={{ fontFamily: "'Noto Serif Thai', serif" }}
          >
            <p>
              <span className='font-bold text-xl md:text-3xl ml-3 '>{item.itemName}</span>  
              <span  className='text-xl md:text-3xl ml-3 mr-3'>X {item.quantity}</span>
            </p>

          </div>
          <div class='flex justify-center md:justify-end flex-1 w-32 items-center mx-10 text-xl md:text-3xl'> {item.quantity * item.itemPrice} Baht</div>

        </div>
        <div className='p-4'></div>
      </div>
    )
    )
    setAllMenuInOrderDiv(divElements)
  }, [])

  return (
    <div>
      <NavBar />
      <div className='mx-auto min-h-screen max-w-[1640px] '>

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
              glassColor='orange'
              color='white'
            />
          </div>
          <h1 className='text-3xl font-bold mx-auto text-white p-4 text-center'>Order Status : Waiting for rider accept a order</h1>
          <h4 className='text-2xl text-white mx-auto p-2 text-center'>Waiting for a moment...</h4>
          <h4 className='text-2xl text-white mx-auto p-2 text-center'></h4>
        </div>

        {/* Order Information */}
        <div className='p-8'></div>
        {allMenuInOrderDiv}

        <div className='flex flex-col justify-center md:justify-end items-end px-10 bg-teal-400 p-10'>
          <span className="text-xl font-bold text-gray-600">Subtotal : </span>
          <span className="text-3xl font-bold">{calSubTotal()} Baht</span>
        </div>
        <div className='flex justify-center p-8'>
          <Link to={`/order/${current_user}`}>
            <btn class='p-3 px-20 pt-2 bg-teal-400 rounded-full baseline hover:bg-teal-300'>
              Back
            </btn>
          </Link>
        </div>
      </div>
    </div>
  )
}