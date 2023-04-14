import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function MainRider() {


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
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

              <a href="/order-list-info/:1" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Name : {JSON.stringify(testData)}</h3>
              </a>

              <a href="/order-list-info/:2" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Name : {JSON.stringify(testData)}</h3>
              </a>

              <a href="/order-list-info/:3" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Name : {JSON.stringify(testData)}</h3>
              </a>

              <a href="/order-list-info/:4" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Name : {JSON.stringify(testData)}</h3>
              </a>

              <a href="/order-list-info/:5" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Name : {JSON.stringify(testData)}</h3>
              </a>

              <a href="/order-list-info/:6" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Name : {JSON.stringify(testData)}</h3>
              </a>

              <a href="/order-list-info/:7" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Name : {JSON.stringify(testData)}</h3>
              </a>

              <a href="/order-list-info/:8" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.jpg" alt="Food shop img" class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Name : {JSON.stringify(testData)}</h3>
              </a>

            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
