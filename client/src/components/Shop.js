import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default function Shop() {

  const { foodShopName } = useParams();
  const [itemFromFoodShop, setItemFromFoodShop] = useState();


  // for sweet alert
  const alert_found_NotSameFoodShopInBasket = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        // prn custom for swal fire
        confirmButton: 'btn bg-green-500 ml-4',
        cancelButton: 'btn bg-red-500',
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Remove your previous items?',
      text: "You still have products from another food shop. Shall we start over with a fresh basket?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          `Your Item from ${foodShopName} has been added.`,
          'success'
        )
        // after accept to add Item from new FoodShop to Basket
        // assign new data to session
        sessionStorage.setItem("current_FoodShopInBasket", foodShopName)
      }
    })
  }

  // function for managing session : current_FoodShopInBasket , currrent_menuInBasket
  const hanldeClickAdd_ForBasket = () => {
    let fromWhichFoodShop_prn = sessionStorage.getItem("current_FoodShopInBasket")
    if (fromWhichFoodShop_prn === null || fromWhichFoodShop_prn === foodShopName) {
      sessionStorage.setItem("current_FoodShopInBasket", foodShopName)
      //not have any menu in basket create session : currrent_menuInBasket
      if (sessionStorage.getItem("currrent_menuInBasket") === null) {
        sessionStorage.setItem("currrent_menuInBasket", [])
      }
      //add property of that menu to array of JSON (currrent_menuInBasket Session)
      //find if that menu already in basket


    }

    else {
      alert_found_NotSameFoodShopInBasket();
    }

  }

  let test_foodShopItem_data = [
    {},
    {},
    {}
  ]
  let test_item_div = [
      
  ]
  for (let i = 1; i <= test_foodShopItem_data.length; i++) {
    test_item_div.push(
      <div className="card w-96 bg-base-100 shadow-xl mr-4 mt-4">
        <figure><img src="https://www.ktc.co.th/pub/media/Travel-Story/Thailand/restuarant-cafe-samui/thumbnail.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <div className='name-menu-controller flex justify-between items-center'>
            <h2 className="card-title">(ชื่อเมนู) </h2>
            <h2 className="card-title">ราคา + Bath</h2>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success"
              onClick={hanldeClickAdd_ForBasket}
            >Add menu</button>
          </div>
        </div>
      </div>
    )
  }


  const getItemsFromSingleShop = (foodShopName) => {
    //then get only item that  fromWhichFoodShop === foodShopName

  }

  useEffect(() => {
    getItemsFromSingleShop(foodShopName)
  }, [])



  return (
    <div>
      <NavBar />
      <div className='foodShop-section-controller min-h-screen'>
        this is food shop id : {foodShopName}
        <div className='foodShop-section flex flex-wrap justify-center'>
          {test_item_div}

        </div>
      </div>
      <Footer />
    </div>
  )
}
