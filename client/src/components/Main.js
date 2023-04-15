import React, { useEffect, useState } from 'react'

export default function Main() {

  const [user, setUser] = useState("")
  const [foodShop, setFoodShop] = useState("")

  let test_foodShop_count = 6
  let test_foodShop_div = []
  for (let i = 0; i < test_foodShop_count; i++) {
    test_foodShop_div.push(
      <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
        <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">ชื่อร้าน (Name)</h2>
          <p>ที่อยู่ร้าน (address)</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See more</button>
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
    getFoodShop()
  }, [])



  return (
    <div className="p-4 max-w-[1640px] mx-auto">
      <div>
        get User data fom UserController <span className='text-green-500'> {JSON.stringify(user)} </span>
      </div>
      <div className='all-foodShop-section'>
        <div className='foodshop-container flex flex-wrap'>
            {test_foodShop_div}

        </div>
      </div>

      <div className='top-rated-menu-section'>
        top - rate menu slider
      </div>
    </div>
  )
}
