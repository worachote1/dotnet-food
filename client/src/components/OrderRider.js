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

  const [textRiderStatus, setTextRiderStatus] = useState("Apply Order")

  const orderID = sessionStorage.getItem("current_customer_orderID")
  const custumerName = sessionStorage.getItem("current_customer")
  const address = sessionStorage.getItem("customer_address")
  const [itemList, setItemList] = useState(JSON.parse(sessionStorage.getItem("customer_order_list")))
  const riderStatus = sessionStorage.getItem("rider_status")
  
  const navigate = useNavigate();
  const hanldeClickAppliedOrder = (orderID) => {
    if(riderStatus === null || riderStatus === "complete"){
      sessionStorage.setItem("rider_status","delivering")
      setTextRiderStatus("Complete")
    }
    else{
      sessionStorage.setItem("rider_status","complete")
      navigate("/main-rider")
    }
  }
  const checkRS = () => {
    if(riderStatus === "delivering"){
      setTextRiderStatus("Complete")
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
          class="h-20 w-20 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">{item.itemName}</h3>

          <dl class="mt-0.5 space-y-px text-[10px]">
            <div>
              <dt class="inline">Shop Name : </dt>
              <dd class="inline">{item.shopName}</dd>
            </div>
          </dl>
        </div>

        <div class="ml-3 items-center justify-start">
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
              class = "h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />
          </form>
        </div>

        <div class="flex flex-1 items-center justify-end gap-2">
          {item.itemPrice} บาท
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
              <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">{custumerName}'s Cart</h1>
            </header>

            <div class="mt-8">
              <ul class="space-y-4">
                {test_item_div}
              </ul>

              <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div class="w-screen max-w-lg space-y-4">
                  <dl class="space-y-0.5 text-sm text-gray-700">
                    <div class="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>{subtotal} บาท</dd>
                    </div>

                    <div class="flex justify-between">
                      <dt>Delivery Fee</dt>
                      <dd>{deliveryFee} บาท</dd>
                    </div>

                    
                    {coupon_div}

                    <div class="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>{calTotal()} บาท</dd>
                    </div>
                  </dl>

                  <div class="flex justify-end">
                    <span
                      class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-1500"
                    >
                      <img
                        src = "https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"
                        alt = ""
                        class = "h-4 w-4 mr-2"
                      />

                      <p class="whitespace-nowrap text-xs">Address : {address}</p>
                    </span>
                  </div>

                  <div class="flex justify-end">
                    <a
                      onClick={() => hanldeClickAppliedOrder()}
                      class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
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
