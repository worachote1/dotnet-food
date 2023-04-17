import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';


export default function Shop() {

  const { foodShopName } = useParams();
  const [allItem, setAllItem] = useState();
  const [itemFromFoodShop, setItemFromFoodShop] = useState();
  let test_item_div = []
  for (let i = 1; i <= 5; i++) {
    test_item_div.push(
      <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
        <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <div className='name-menu-controller flex justify-between items-center'>
            <h2 className="card-title">(ชื่อเมนู) </h2>
            <h2 className="card-title">ราคา + Bath</h2>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Add menu</button>
          </div>
        </div>
      </div>
    )
  }


  const getAllFoodShopItem = () => {
    //fetch all Menu from database
  }

  const getItemsFromSingleShop = (foodShopName) => {
    //then get only item that  fromWhichFoodShop === foodShopName

  }

  useEffect(() => {

  }, [])

  useEffect(() => {
    getItemsFromSingleShop()
  }, [allItem])

  return (
    <div>
      <NavBar />
      this is food shop id : {foodShopName}
      <div className='foodShop-section flex flex-wrap justify-center'>
        {test_item_div}

      </div>
      <Footer />
    </div>
  )
}
