import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Main() {

  let test_foodShop_data = [
    {
      Id : 1,
      Name : "KMITL-RES",
      imgPath : "https://test.com/img.jpg",
      address : "sample address",
      totalRating : 1000,
      totalVote : 1000,
      // itemList 
      itemList : [
        {
          id : 1,
          itemName : "Noodles",
          itemPrice : 50.0,
          type : "MAIN",
          imgPath : "https://test.com/img.jpg"
        },
        {
          id : 2,
          itemName : "Noodles2",
          itemPrice : 75.0,
          type : "MAIN",
          imgPath : "https://test.com/img.jpg"
        }]  
    },{
      Id : 2,
      Name : "KMITL-RES 2",
      imgPath : "https://test.com/img.jpg",
      address : "sample address",
      totalRating : 1000,
      totalVote : 1000,
      // itemList 
      itemList : [
        {
          id : 1,
          itemName : "Pizza",
          itemPrice : 420.0,
          type : "MAIN",
          imgPath : "https://test.com/img.jpg"
        }
      ]      
    },
    {
      Id : 3,
      Name : "KMITL-RES 3",
      imgPath : "https://test.com/img.jpg",
      address : "sample address",
      totalRating : 1000,
      totalVote : 1000,
      // itemList 
      itemList : [
        {
          id : 1,
          itemName : "ข้าวมันไก่ทอด",
          itemPrice : 60.0,
          type : "MAIN",
          imgPath : "https://test.com/img.jpg"
        },{
          id : 2,
          itemName : "ข้าวผัด",
          itemPrice : 50.0,
          type : "MAIN",
          imgPath : "https://test.com/img.jpg"        
        },{
        id : 3,
        itemName : "ผัดหมี่",
        itemPrice : 55.0,
        type : "MAIN",
        imgPath : "https://test.com/img.jpg"
        }
      ]        
    }
   ]
  

  const [user, setUser] = useState("")
  const [foodShop, setFoodShop] = useState([])

  // for test foodShops data to display in each div
  let test_foodShop_div = []
  foodShop.map((item) => {
    
      test_foodShop_div.push(
        <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4" key={`test-key-${item.Id}`} >
          <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title"> {item.Name} </h2>
            <p> {item.address} </p>
            <div className="card-actions justify-end">
              <Link 
              to={
                `/shop/${item.Id}`
              }> 
                <button className="btn btn-primary">See more</button>
              </Link>            
            </div>
          </div>
        </div>)
    })
  

  // test for setFoodShop from fake data
  useEffect(()=>{
    setFoodShop(test_foodShop_data)
  },[])

  // testfetch user api
  const getUserApi = () => {
    fetch(`http://localhost:5000/api/user`)
      .then((res) => {

        return res.json()
      })
      .then((data) => {
        console.log("get user success !")
        console.log(data)
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

  // useEffect(() => {
  //   getFoodShop()
  // })


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
