import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function OrderListInfo() {

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
        <section>
          <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="mx-auto ">
              <header class="text-center">
                <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">{JSON.stringify(testData)} Cart</h1>
              </header>

              <div class="mt-8">
                <ul class="space-y-4">
                  <li class="flex items-center gap-4">
                    <img
                      src="https://cpfmshop.com//uploads/283/product/f8a6817059ec6277992c08c6b5196903_full.jpg"
                      alt=""
                      class="h-20 w-20 rounded object-cover"
                    />

                    <div>
                      <h3 class="text-sm text-gray-900">ข้าวมันไก่ทอด</h3>

                      <dl class="mt-0.5 space-y-px text-[10px]">
                        <div>
                          <dt class="inline">Shop Name : </dt>
                          <dd class="inline">ร้านXXX</dd>
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
                          type="number"
                          min="1"
                          value="1"
                          id="Line1Qty"
                          class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </form>
                    </div>

                    <div class="flex flex-1 items-center justify-end gap-2">
                      35 บาท
                    </div>
                  </li>

                  <li class="flex items-center gap-4">
                    <img
                      src="https://cpfmshop.com//uploads/283/product/c5b3a42180766d857f7b9b1488661506_full.jpg"
                      alt=""
                      class="h-20 w-20 rounded object-cover"
                    />

                    <div>
                      <h3 class="text-sm text-gray-900">ข้าวมันไก่ต้ม</h3>

                      <dl class="mt-0.5 space-y-px text-[10px]">
                        <div>
                          <dt class="inline">Shop Name : </dt>
                          <dd class="inline">ร้านXXX</dd>
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
                          type="number"
                          min="1"
                          value="1"
                          id="Line1Qty"
                          class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </form>
                    </div>

                    <div class="flex flex-1 items-center justify-end gap-2">
                      35 บาท
                    </div>
                  </li>

                  <li class="flex items-center gap-4">
                    <img
                      src="https://cpfmshop.com//uploads/283/product/949381e47baff4b832cb40683878b6ce_full.jpg"
                      alt=""
                      class="h-20 w-20 rounded object-cover"
                    />

                    <div>
                      <h3 class="text-sm text-gray-900">ข้าวมันไก่ผสม</h3>

                      <dl class="mt-0.5 space-y-px text-[10px]">
                        <div>
                          <dt class="inline">Shop Name : </dt>
                          <dd class="inline">ร้านXXX</dd>
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
                          type="number"
                          min="1"
                          value="1"
                          id="Line1Qty"
                          class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </form>
                    </div>

                    <div class="flex flex-1 items-center justify-end gap-2">
                      40 บาท
                    </div>
                  </li>
                </ul>

                <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div class="w-screen max-w-lg space-y-4">
                    <dl class="space-y-0.5 text-sm text-gray-700">
                      <div class="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>110 บาท</dd>
                      </div>

                      <div class="flex justify-between">
                        <dt>Delivery Fee</dt>
                        <dd>25 บาท</dd>
                      </div>

                      <div class="flex justify-between">
                        <dt>Coupon</dt>
                        <dd>-20 บาท</dd>
                      </div>

                      <div class="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>115 บาท</dd>
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

                        <p class="whitespace-nowrap text-xs">Address : {JSON.stringify(testData)}</p>
                      </span>
                    </div>

                    <div class="flex justify-end">
                      <a
                        href="#"
                        class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Applied Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  )
}
