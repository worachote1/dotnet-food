import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';

export default function Shop() {

  const { foodShopId } = useParams();
  const {shop ,setShop} = useState(null);
  
  let test_menu_div = useState([])

  const getItemsFromSingleShop = () => {
     
  }

  useEffect(()=>{
    getItemsFromSingleShop()
  },[])

  return (
    <div>
        <NavBar />
        this is food shop id : {foodShopId}
        <div className='foodShop-section'>
          
        
        </div>
        <Footer />
    </div>
  )
}
