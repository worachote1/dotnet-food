import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'

export default function OrderRider() {
  
  const [subtotal, setSubtotal] = useState([])
  const [deliveryFee, setDeliveryFee] = useState([])
  const [coupon, setCoupon] = useState([])
  const [total, setTotal] = useState([])

  const [invoiceItem, setInvoiceItem] = useState([])

  const [textRiderStatus, setTextRiderStatus] = useState("Accept Order")

  const orderID = sessionStorage.getItem("current_customer_orderID")
  const custumerName = sessionStorage.getItem("current_customer")
  const address = sessionStorage.getItem("customer_address")
  const [itemList, setItemList] = useState(JSON.parse(sessionStorage.getItem("customer_order_list")))
  const riderStatus = sessionStorage.getItem("rider_status")
  
  const navigate = useNavigate();
  const hanldeClickAppliedOrder = (orderID) => {
    if(riderStatus === null || riderStatus === "complete" || riderStatus === "cancel"){
      sessionStorage.setItem("rider_status","delivering")
      setTextRiderStatus("Cancel")
    }
    else{
      sessionStorage.setItem("rider_status","cancel")
      navigate("/main-rider")
    }
  }
  const checkRS = () => {
    if(riderStatus === "delivering"){
      setTextRiderStatus("cancel")
    }
  }
  

  const calSubTotal = () => {
    if(itemList === null){
      return 0
    }
    let cnt = 0
    for (let i = 0; i < itemList.length; i++){
      cnt += itemList[i].itemPrice * itemList[i].quantity
    }
    return cnt
  }

  const calTotal = () => {
    return parseFloat(calSubTotal())-parseFloat(coupon)+parseFloat(deliveryFee)
  }

  useEffect(() => {
    checkRS()

    setInvoiceItem(itemList)

    setCoupon(0)
    setSubtotal(calSubTotal())
    setDeliveryFee(25)

  }, [])

  
  const getInvoiceItem = () => {
    fetch(`http://localhost:5000/api/order`)
      .then((res) => {

        return res.json()
      })
      .then((data) => {
        console.log("get order success !")
        setInvoiceItem(data)
      })
      .catch((err) => {
        console.log("get order failed !")
      })
  }

  let coupon_div = []
  if(coupon != 0){
    coupon_div.push(
      <div class="flex justify-between">
        <dt>Coupon</dt>
         <dd>{coupon} บาท</dd>
      </div>
    )
  }

  let test_item_div = []
  invoiceItem.map((item) => {
    test_item_div.push(
      <li class="flex items-center gap-4">
        <img  
          src={item.imgPath}
          alt=""
          class="h-24 w-32 md:h-44 md:w-72 rounded object-cover"
        />

        <div>
          <h3 class="text:xl md:text-3xl text-gray-900">{item.itemName}</h3>
        </div>

        <div class="ml-3 items-center justify-start text-md md:text-2xl font-bold">
          X
        </div>

        <div class="flex flex-1 items-center justify-start gap-2">
          <form>
            <label for="Line1Qty" class="sr-only"> Quantity </label>

            <input
              type = "number"
              min = "1"
              value = {item.quantity}
              id = "disabled-input"
              class = "h-8 w-12 md:h-12 md:w-16 rounded border-gray-200 bg-gray-50 p-0 text-center text-xl md:text-3xl text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />
          </form>
        </div>

        <div class="flex flex-1 items-center justify-end gap-2 text-md md:text-3xl">
          {item.itemPrice} Baht
        </div>
      </li>
    )
  })

  const [testData,setTestData] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:5000/api/user`)
    .then((res)=>{

      return res.json()
    })
    .then((data)=>{
      console.log("get user success !")
      setTestData(data)
    })
  },[])

  return (
    <div>
        <NavBar />
        <div class="min-h-screen mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="mx-auto ">
            <header class="text-center">
              <h1 class="text-xl font-bold text-gray-900 md:text-3xl">Shop Name : item.shopName</h1>
              <h3 class="text-md font-bold text-gray-500 md:text-xl">Shop Address : item.shopAddress</h3>
            </header>

            <div class="mt-8">
              <ul class="space-y-4">
                {test_item_div}
              </ul>

              <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div class="w-screen max-w-lg space-y-4">
                  <dl class="space-y-0.5 text-md md:text-xl text-gray-700">
                    <div class="flex justify-between text-xl md:text-3xl">
                      <dt>Total</dt>
                      <dd>{calTotal()} บาท</dd>
                    </div>
                  </dl>

                  <div className='flex justify-end'>
                    <span class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-1500">
                      <img
                        src = "https://www.svgrepo.com/show/514283/user.svg"
                        alt = ""
                        class = "h-6 w-6 md:h-8 md:w-8 mr-2"
                      />
                      <p class="whitespace-nowrap text-xl md:text-3xl">Customer Name : {custumerName}</p>
                      
                    </span>
                  </div>

                  <div class="flex justify-end">
                    <span
                      class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-1500"
                    >
                      <img
                        src = "https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"
                        alt = ""
                        class = "h-6 w-6 md:h-8 md:w-8 mr-2"
                      />

                      <p class="whitespace-nowrap text-xl md:text-3xl">Customer Address : {address}</p>
                    </span>
                  </div>

                  

                  <div class="flex justify-end">
                    <a
                      onClick={() => hanldeClickAppliedOrder()}
                      class="block rounded bg-gray-700 px-5 py-3 text-xl text-gray-100 transition hover:bg-gray-600"
                    >
                      {textRiderStatus}
                    </a>
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