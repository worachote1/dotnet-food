import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Main() {

  const [user, setUser] = useState(sessionStorage.getItem('current_user'))
  const [all_foodShop_div, setAllFoodShopDiv] = useState([])
  const [foodShop, setFoodShop] = useState([])
  const [topMenu, setTopMenu] = useState([])

  const handleClickAddMenu = () => {

  }

  //fetch food shop api
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
    getFoodShop()    
  }, [])

  useEffect(()=>{
    const divElements = foodShop.map((item) => (
      <div className="card w-96 h-96 bg-base-100 shadow-xl mr-4 mt-4" key={`foodShop-${item.id}`}>
        <figure><img src={item.imgPath} className='object-cover'/></figure>
        <div className="card-body">
          <h2 className="card-title"> {item.name} + ดาว</h2>
          <p> {item.address} </p>
          <div className="card-actions justify-end">
            {(user !== "" && user !== null)
              ? <Link to={`/shop/${item.name}`}>
                <button className="btn btn-primary">See more</button>
              </Link>
              : <Link to={`/login/`}>
                <button className="btn btn-primary">See more</button>
              </Link>
            }
          </div>
        </div>
      </div>
    ))
  
    setAllFoodShopDiv(divElements)
  },[foodShop])

  return (
    <div className="min-h-screen max-w-[1640px] mx-auto">

      <div>

        {user !== null
          ? <p> you are login as : <span className='text-green-500'> {user} </span> </p>
          : <span className='text-orange-500'>Not log in</span>}

      </div>

      <div className='top-rated-menu-section  p-4' style={{ background: '#F5B041' }}>
        <p className='text-center text-4xl text-red-500' style={{ fontFamily: "Anton, sans-serif" }}>TOP MENU</p>
        <div className="carousel w-full sm:flex sm:flex-wrap sm:justify-center mb-2">

          <div id="slide1" className="carousel-item relative ">
            {/* <img src="https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg" className="w-full" /> */}

            <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4 ">
              <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">เมนูอันดับ 1 (ชื่อเมนู) </h2>
                <p>ชื่อร้าน + จํานวนดาว</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Add menu</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 visible sm:invisible">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative">
            {/* <img src="https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg" className="w-full" /> */}
            <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
              <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">เมนูอันดับ 2 (ชื่อเมนู)</h2>
                <p>ชื่อร้าน + จํานวนดาว</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Add menu</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 visible sm:invisible">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative ">
            {/* <img src="https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg" className="w-full" /> */}

            <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
              <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">เมนูอันดับ 3 (ชื่อเมนู)</h2>
                <p>ชื่อร้าน + จํานวนดาว</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Add menu</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 visible sm:invisible">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>

        </div>
      </div>

      <div className='all-foodShop-section mb-5'>
        {/* <p className='text-center text-4xl text-white-500' style={{ fontFamily: "Anton, sans-serif" }}>FOOD SHOP</p> */}
        <div className='all-foodshop-container flex flex-wrap justify-center'>
          {all_foodShop_div}
        </div>
      </div>
    </div>
  )
}
