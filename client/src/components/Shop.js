import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';

export default function Shop() {

  const { foodShopId } = useParams();
  const {shop ,setShop} = useState(null);

  const getSingleShop = (Id) => {
    fetch(`http://localhost:5000/api/foodShop/${Id}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setShop(data)
      })
      .catch((err) => {
        console.log("get shop failed !")
      })    
  }

  useEffect(()=>{
    getSingleShop(foodShopId)
  },[])

  return (
    <div>
        <NavBar />
        <div>
            this is food shop id : {foodShopId}
            {/* shop name : {shop} */}
        </div>
        <Footer />
    </div>
  )
}
