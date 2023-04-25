import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Main() {

  const [user, setUser] = useState(sessionStorage.getItem('current_user'))
  const [all_foodShop_div, setAllFoodShopDiv] = useState([])
  const [foodShop, setFoodShop] = useState([])
  const [topMenu, setTopMenu] = useState([])

  // for sweet alert
  const alert_found_NotSameFoodShopInBasket = (shopItemObj) => {
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
          `Your Item from ${shopItemObj.fromWhichFoodShop} has been added.`,
          'success'
        )
        // after accept to add Item from new FoodShop to Basket
        // assign new data to session
        sessionStorage.setItem("current_FoodShopInBasket", shopItemObj.fromWhichFoodShop)
        let temp_obj_fromOtherFoodShop = {
          "id": shopItemObj.id,
          "itemName": shopItemObj.itemName,
          "itemPrice": shopItemObj.itemPrice,
          "type": shopItemObj.type,
          "imgPath": shopItemObj.imgPath,
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
  const hanldeClickAddTopMenu_ForBasket = (shopItemObj) => {
    let fromWhichFoodShop_prn = sessionStorage.getItem("current_FoodShopInBasket")
    let temp_obj = {
      "id": shopItemObj.id,
      "itemName": shopItemObj.itemName,
      "itemPrice": shopItemObj.itemPrice,
      "type": shopItemObj.type,
      "imgPath": shopItemObj.imgPath,
      "quantity": 1
    }

    if (fromWhichFoodShop_prn === null || fromWhichFoodShop_prn === shopItemObj.fromWhichFoodShop) {
      sessionStorage.setItem("current_FoodShopInBasket", shopItemObj.fromWhichFoodShop)
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
        if (cur_BasketData.find(obj => obj.id === shopItemObj?.id) === undefined) {
          cur_BasketData.push(temp_obj)
          sessionStorage.setItem("current_menuInBasket", JSON.stringify(cur_BasketData))
          // window.location.reload()
        }
      }
    }
    else {
      alert_found_NotSameFoodShopInBasket(shopItemObj);
    }

  }

  const DisplayStarTopMenu = (topMenuItem) => {
    const obj_foodShopOfMenu = foodShop.find(obj => obj.name === topMenuItem?.fromWhichFoodShop)
    return DisplayStarFoodShop(obj_foodShopOfMenu?.totalRating, obj_foodShopOfMenu?.totalVote, false)
  }

  const DisplayStarFoodShop = (totalRating, totalVote, isFoodShop) => {
    const style_of_stars = (isFoodShop) ? "rating rating-md rating-half" : "rating rating-sm rating-half"
    const star = totalRating / totalVote
    if (star === 5) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly checked />
        </div>
      )
    }
    else if (star >= 4.5) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else if (star >= 4) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else if (star >= 3.5) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else if (star >= 3) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else if (star >= 2.5) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else if (star >= 2) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else if (star >= 1.5) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else if (star >= 1) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else if (star >= 0.5) {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
    else {
      return (
        <div className={style_of_stars}>
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly checked />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" readOnly />
          <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" readOnly />
        </div>
      )
    }
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

  useEffect(() => {
    const divElements = foodShop.map((item) => (
      <div className="card w-96 h-96 bg-green-100 shadow-xl mr-4 mt-4" key={`foodShop-${item.id}`}>
        <figure className=''><img src={item.imgPath} className='object-cover' /></figure>
        <div className="card-body">
          <div className='flex justify-between'>
            <h2 className="card-title" style={{ fontFamily: "'Noto Serif Thai', serif" }}> {item.name}</h2>
            {DisplayStarFoodShop(item.totalRating, item.totalVote, true)}
          </div>
          <p style={{ fontFamily: "'Noto Serif Thai', serif" }}> {item.address} </p>
          <div className="card-actions justify-end">
            {(user !== null)
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
  }, [foodShop])

  // fetch top 3 menu
  const getTopThreeMenu = () => {
    fetch(`http://localhost:5000/api/shopitem`)
      .then((res) => {

        return res.json()
      })
      .then((data) => {
        let sortDataByTotalItemOrder = data.sort((a, b) => b.totalItemOrder - a.totalItemOrder);
        let topThreeMenu = sortDataByTotalItemOrder.slice(0, 3)
        setTopMenu(topThreeMenu)
        console.log(topThreeMenu)
      })
      .catch((err) => {
        console.log("get menu failed !")
      })
  }

  useEffect(() => {
    getTopThreeMenu()
  }, [])

  return (
    <div className="min-h-screen max-w-[1640px] mx-auto" >

      <div>

        {user !== null
          ? <p> you are login as : <span className='text-green-500'> {user} </span> </p>
          : <span className='text-orange-500'>Not log in</span>}

      </div>

      <div className='top-rated-menu-section p-4' style={{ background: '#F5B041' }}>
        <p className='text-center text-4xl text-red-500' style={{ fontFamily: "Anton, sans-serif" }}>TOP MENU</p>
        <div className="carousel w-full sm:flex sm:flex-wrap sm:justify-center mb-2">

          <div id="slide1" className="carousel-item relative ">
            {/* <img src="https://www.honestfoodtalks.com/wp-content/uploads/2020/11/Seafood-platter.jpg" className="w-full" /> */}

            <div className="card w-96 h-96 bg-base-100 shadow-xl mr-4 mt-4 ">
              <figure><img src={topMenu[0]?.imgPath} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title" style={{ fontFamily: "'Noto Serif Thai', serif" }}>{topMenu[0]?.itemName} </h2>
                <div className='flex'>
                  <h2 style={{ fontFamily: "'Noto Serif Thai', serif" }}>{topMenu[0]?.fromWhichFoodShop}</h2>
                  {DisplayStarTopMenu(topMenu[0])}
                </div>
                <div className="card-actions justify-end">
                  {(user !== null)
                    ?
                    <button className="btn btn-success"
                      onClick={() => hanldeClickAddTopMenu_ForBasket(topMenu[0])}
                    >Add menu</button>

                    : <Link to={`/login/`}>
                      <button className="btn btn-success">Add menu</button>
                    </Link>
                  }
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
            <div className="card w-96 h-96 bg-base-100 shadow-xl mr-4 mt-4">
              <figure><img src={topMenu[1]?.imgPath} alt="Shoes" /></figure>
              <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: "'Noto Serif Thai', serif" }}>{topMenu[1]?.itemName} </h2>
              <div className='flex'>
                  <h2 style={{ fontFamily: "'Noto Serif Thai', serif" }}>{topMenu[1]?.fromWhichFoodShop}</h2>
                  {DisplayStarTopMenu(topMenu[1])}
                </div>
                <div className="card-actions justify-end">
                {(user !== null)
                    ?
                    <button className="btn btn-success"
                      onClick={() => hanldeClickAddTopMenu_ForBasket(topMenu[1])}
                    >Add menu</button>

                    : <Link to={`/login/`}>
                      <button className="btn btn-success">Add menu</button>
                    </Link>
                  }
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

            <div className="card w-96 h-96 bg-base-100 shadow-xl mr-4 mt-4">
              <figure><img src={topMenu[2]?.imgPath} alt="Shoes" /></figure>
              <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: "'Noto Serif Thai', serif" }}>{topMenu[2]?.itemName} </h2>
              <div className='flex'>
                  <h2 style={{ fontFamily: "'Noto Serif Thai', serif" }}>{topMenu[2]?.fromWhichFoodShop}</h2>
                  {DisplayStarTopMenu(topMenu[2])}
                </div>
                <div className="card-actions justify-end">
                {(user !== null)
                    ?
                    <button className="btn btn-success"
                      onClick={() => hanldeClickAddTopMenu_ForBasket(topMenu[2])}
                    >Add menu</button>

                    : <Link to={`/login/`}>
                      <button className="btn btn-success">Add menu</button>
                    </Link>
                  }
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
