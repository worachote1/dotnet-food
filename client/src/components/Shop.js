import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function Shop() {

  const { foodShopName } = useParams();
  const [itemFromFoodShop, setItemFromFoodShop] = useState();


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

  let test_foodShopItem_data = [
    {
      "id": 1,
      "itemName": "ข้าวผัด",
      "itemPrice": 42,
      "type": "อาหารคาร",
      "imgPath": 'http://food.mthai.com/app/uploads/2015/03/1324956564.jpg'
    }
    ,
    {
      "id": 2,
      "itemName": "บัวลอย",
      "itemPrice": 55,
      "type": "อาหารหวาน",
      "imgPath": 'http://f.ptcdn.info/557/035/000/1442537793-IMG34862-o.jpg'
    },
    {
      "id": 3,
      "itemName": "ไข่เจียว",
      "itemPrice": 35,
      "type": "อาหารทอด",
      "imgPath": 'https://img.kapook.com/u/2016/wanwanat/0_edit/385698979x.jpg'
    }
  ]
  let test_item_div = []

  test_foodShopItem_data.map((item) => {
    test_item_div.push(
      // bg-base-100
      // <div className="card w-96 bg-red-100 shadow-xl mr-4 mt-4 h-25">
      //   <figure className='h-1/2  bg-blue-400'>
      //     <img src={item.imgPath} className='object-cover h-full w-full' alt="Shoes" />
      //   </figure>
      //   <div className="card-body">
      //     <div className='name-menu-controller flex justify-between items-center'>
      //       <h2 className="card-title">{item.itemName} </h2>
      //       <h2 className="card-title">{item.itemPrice}  Bath</h2>
      //     </div> 
      //     <div className="card-actions justify-end">
      //       <button className="btn btn-success"
      //         onClick={() => hanldeClickAdd_ForBasket(item.id,item.itemName,item.itemPrice,item.type,item.imgPath)}
      //       >Add menu</button>
      //     </div>
      //   </div>
      // </div>

      <div className="card w-96 h-96 shadow-xl mr-4 mt-4" key={`${item.itemName}-${item.id}`} >
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

    )
  })

  const getItemsFromSingleShop = (foodShopName) => {
    //then get only item that  fromWhichFoodShop === foodShopName

  }

  useEffect(() => {
    getItemsFromSingleShop(foodShopName)
  }, [])



  return (
    <div>
      <NavBar />
      <div className='foodShop-section-controller min-h-screen mb-5'>
        this is food shop id : {foodShopName}
        <div className='foodShop-section flex flex-wrap justify-center '>
          {test_item_div}

        </div>
      </div>
      <Footer />
    </div>
  )
}
