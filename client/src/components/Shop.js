import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function Shop() {

  const { foodShopName } = useParams();
  const [itemFromFoodShop, setItemFromFoodShop] = useState([]);
  const [all_shopItem_div,setAllShopItemDiv] = useState([]);

  // for sweet alert
  const alert_found_NotSameFoodShopInBasket = (id, itemName, itemPrice, type, imgPath) => {
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
        let temp_obj_fromOtherFoodShop = {
          "id": id,
          "itemName": itemName,
          "itemPrice": itemPrice,
          "type": type,
          "imgPath": imgPath,
          "quantity": 1
        }
        sessionStorage.setItem("current_menuInBasket", JSON.stringify([temp_obj_fromOtherFoodShop]))
        window.location.reload()

        // console.log(typeof(JSON.parse(sessionStorage.getItem("currrent_menuInBasket"))))  --> Object  
        // console.log(typeof(sessionStorage.getItem("currrent_menuInBasket"))) --> String 
      }
    })
  }

  // function for managing session : current_FoodShopInBasket , currrent_menuInBasket
  const hanldeClickAdd_ForBasket = (id, itemName, itemPrice, type, imgPath) => {
    let fromWhichFoodShop_prn = sessionStorage.getItem("current_FoodShopInBasket")
    let temp_obj = {
      "id": id,
      "itemName": itemName,
      "itemPrice": itemPrice,
      "type": type,
      "imgPath": imgPath,
      "quantity": 1
    }

    if (fromWhichFoodShop_prn === null || fromWhichFoodShop_prn === foodShopName) {
      sessionStorage.setItem("current_FoodShopInBasket", foodShopName)
      // not have any menu in basket create session : currrent_menuInBasket
      if (sessionStorage.getItem("current_menuInBasket") === null) {
        sessionStorage.setItem("current_menuInBasket", JSON.stringify([temp_obj]))
        // window.location.reload()
      }
      // add property of that menu to array of JSON (currrent_menuInBasket Session)
      // find if that menu not in basket  
      else {
        const cur_BasketData = JSON.parse((sessionStorage.getItem("current_menuInBasket")))
        // 
        if (cur_BasketData.find(obj => obj.id === id) === undefined) {
          cur_BasketData.push(temp_obj)
          sessionStorage.setItem("current_menuInBasket", JSON.stringify(cur_BasketData))
          // window.location.reload()
        }
      }
    }
    else {
      alert_found_NotSameFoodShopInBasket(id, itemName, itemPrice, type, imgPath);
    }

  }



  // test_foodShopItem_data.map((item) => {
  //   test_item_div.push(
  //     <div className="card w-96 h-96 shadow-xl mr-4 mt-4" key={`${item.itemName}-${item.id}`} >
  //       <figure >
  //         <img src={item.imgPath} className='object-cover' />
  //       </figure>
  //       <div className="card-body">
  //         <div className='name-menu-controller flex justify-between items-center'>
  //           <h2 className="card-title">{item.itemName} </h2>
  //           <h2 className="card-title">{item.itemPrice}  Bath</h2>
  //         </div>
  //         <div className="card-actions justify-end">
  //           <button className="btn btn-success"
  //             onClick={() => hanldeClickAdd_ForBasket(item.id, item.itemName, item.itemPrice, item.type, item.imgPath)}
  //           >
  //             Add menu
  //           </button>
  //         </div>
  //       </div>
  //     </div>

  //   )
  // })

  const getItemsFromSingleShop = (foodShopName) => {
    //then get only item that  fromWhichFoodShop === foodShopName
    fetch(`http://localhost:5000/api/shopitem/byfoodshopname/${foodShopName}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setItemFromFoodShop(data)
    })
    .catch((err) => {
      console.log("get menu failed !")
    })
    
  }

  useEffect(() => {
    getItemsFromSingleShop(foodShopName)
  }, [])

  useEffect(()=>{
    const divElements = itemFromFoodShop.map((item) => (
      <div className="card w-96 h-96 shadow-xl mr-4 mt-4" key={`menu-${item.itemName}`} >
        <figure >
          <img src={item.imgPath} className='object-cover' />
        </figure>
        <div className="card-body">
          <div className='name-menu-controller flex justify-between items-center'>
            <h2 className="card-title">{item.itemName} </h2>
            <h2 className="card-title">{item.itemPrice}  Bath</h2>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success"
              onClick={() => hanldeClickAdd_ForBasket(item.id, item.itemName, item.itemPrice, item.type, item.imgPath)}
            >
              Add menu
            </button>
          </div>
        </div>
      </div>
    ))

    setAllShopItemDiv(divElements)
  },[itemFromFoodShop])

  return (
    <div>
      <NavBar />
      <div className='foodShop-section-controller min-h-screen mb-5'>
        this is food shop id : {foodShopName}
        <div className='foodShop-section flex flex-wrap justify-center '>
          {all_shopItem_div}
        
        </div>
      </div>
      <Footer />
    </div>
  )
}
