import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Main() {

  const [user, setUser] = useState("")
  const [foodShop, setFoodShop] = useState("")

  let test_foodShop_count = 5
  let test_foodShop_div = []
  for (let test_id = 1; test_id <= test_foodShop_count; test_id++) {
    test_foodShop_div.push(
      <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4" key={`test-key-${test_id}`}>
        <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">ชื่อร้าน (Name) + จํานวนดาว</h2>
          <p>ที่อยู่ร้าน (address)</p>
          <div className="card-actions justify-end">
            <Link to={`/shop/:${test_id}`}> 
              <button className="btn btn-primary">See more</button>
            </Link>            
          </div>
        </div>
      </div>)
  }

  // testfetch user api
  const getUserApi = () => {
    fetch(`http://localhost:5000/api/user`)
      .then((res) => {

        return res.json()
      })
      .then((data) => {
        console.log("get user success !")
        setUser(data)
      })
      .catch((err) => {
        console.log("get user failed !")
      })
  }

  const getFoodShop = () => {
    fetch(`http://localhost:5000/api/foodShop`)
      .then((res) => {

        return res.json()
      })
      .then((data) => {
        console.log("get food shop success !")
        setFoodShop(data)
      })
      .catch((err) => {
        console.log("get food shop failed !")
      })
  }


  useEffect(() => {
    getUserApi()
  }, [])

  useEffect(() => {
    getFoodShop()
  })


  return (
    <div className="p-4 max-w-[1640px] mx-auto">
      <div>
        get User data fom UserController <span className='text-green-500'> {JSON.stringify(user)} </span>
      </div>

      <div className='top-rated-menu-section '>
        <p className='text-center text-4xl text-red-500' style={{fontFamily : "Anton, sans-serif"}}>TOP MENU</p>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative">
            {/* <img src="https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg" className="w-full" /> */}

            <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
            <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">เมนูอันดับ 1 (Name) + จํานวนดาว</h2>
                <p>ที่อยู่ร้าน (address)</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Add menu</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative">
            {/* <img src="https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg" className="w-full" /> */}
            <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
              <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">เมนูอันดับ 2 (Name) + จํานวนดาว</h2>
                <p>ที่อยู่ร้าน (address)</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Add menu</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative ">
            {/* <img src="https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg" className="w-full" /> */}

            <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
              <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">เมนูอันดับ 3 (Name) + จํานวนดาว</h2>
                <p>ที่อยู่ร้าน (address)</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Add menu</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative">
            {/* <img src="https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg" className="w-full" /> */}
            <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
              <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">เมนูอันดับ 4 (Name) + จํานวนดาว</h2>
                <p>ที่อยู่ร้าน (address)</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Add menu </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>

      <div className='all-foodShop-section mt-5 '>
        <p className='text-center text-4xl text-red-500' style={{fontFamily : "Anton, sans-serif"}}>FOOD SHOP</p>
        <div className='foodshop-container flex flex-wrap justify-center'>
          {test_foodShop_div}

        </div>
      </div>



    </div>
  )
}
