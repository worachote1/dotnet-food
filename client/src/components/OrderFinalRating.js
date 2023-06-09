import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

export default function OrderFinalRating({ orderData }) {
  const navigate = useNavigate();
  const allMenuData = JSON.parse(orderData.menuInBasket)
  const [cur_menu, setCurMenu] = useState([])
  const [deliveryManData, setDeliveryManData] = useState([])
  const [selectedStar, setSelectedStar] = useState("5");
  const [foodShopOrder, setFoodShopOrder] = useState([])

  const handleOptionChange = (event) => {
    setSelectedStar(event.target.value)
  }


  const getFoodShopOrder = () => {
    fetch(`http://localhost:5000/api/foodShop/${orderData.foodshopInBasket}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setFoodShopOrder(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getDeliveryManData = () => {
    fetch(`http://localhost:5000/api/user/${orderData.deliveryManName}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setDeliveryManData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // console.log(foodShopOrder)
  const delete_orderSuccessStatus = (orderId) => {
    fetch(`http://localhost:5000/api/orders/${orderId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(`deleted : ${JSON.stringify(data)}`);
      })
      .catch(error => console.error(error));
  }

  const update_foodShopRatingandVote = () => {
    fetch(`http://localhost:5000/api/foodshop/${foodShopOrder.name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: foodShopOrder.name,
        imgPath: foodShopOrder.imgPath,
        address: foodShopOrder.address,
        totalRating: foodShopOrder.totalRating + parseInt(selectedStar),
        totalVote: foodShopOrder.totalVote + 1
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }


  const update_SingleMenuTotalOrder = (singleMenu,quantity) => {
    console.log(singleMenu);
    fetch(`http://localhost:5000/api/shopitem/${singleMenu.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemName: singleMenu.itemName,
        itemPrice: singleMenu.itemPrice,
        type: singleMenu.type,
        imgPath: singleMenu.imgPath,
        fromWhichFoodShop: singleMenu.fromWhichFoodShop,
        totalItemOrder: singleMenu.totalItemOrder + quantity,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  
  const update_AllMenuTotalOrder = () => {
    for (let i = 0; i < allMenuData.length; i++) {
      fetch(`http://localhost:5000/api/shopitem/${allMenuData[i].id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          update_SingleMenuTotalOrder(data,allMenuData[i].quantity);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handle_submitVote = (event) => {
    event.preventDefault();
    update_foodShopRatingandVote()
    // console.log(allMenuData) 
    update_AllMenuTotalOrder()
    delete_orderSuccessStatus(orderData.orderId)
    alert_RatingSuccess()
  }

  const alert_RatingSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Your Score has been saved',
      text: "Thank You!!!",
      showConfirmButton: false,
      timer: 1000
    }).then((result) => {
      navigate(`/order/${sessionStorage.getItem('current_user')}`, { replace: true })
    })
  }

  useEffect(() => {
    getDeliveryManData()
    getFoodShopOrder()
  }, [])

  let test_riderDetail_div = []
  test_riderDetail_div.push(
    <div key={`order-waiting-rider`}>
      <div class="flex flex-col justify-center items-center md:flex-row py-4 bg-teal-400 p-8">
        <img class='w-60 h-60 rounded-full' src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt=''></img>
        <div class='flex flex-col justify-start'>
          <h2 className='text-3xl text-black p-2 px-10'> <span className='font-bold' style={{ fontFamily: "'Noto Serif Thai', serif" }}>ชื่อผู้ส่ง : </span>{deliveryManData.userName}</h2>
          <h2 className='text-3xl text-black p-2 px-10'> <span className='font-bold' style={{ fontFamily: "'Noto Serif Thai', serif" }}>เบอร์ผู้ส่ง : </span>{deliveryManData.phoneNum}</h2>
          <h3 className='text-3xl font-bold text-green-200 p-2 px-10 text-center'>Order Completed !!!</h3>
        </div>
      </div>
    </div>
  )


  return (
    <div>
      <NavBar />
      <div className='mx-auto bg-scale-300 h-screen'>
        {test_riderDetail_div}
        <div className='p-8'></div>
        <div class="flex justify-center flex-row px-4 py-2 bg-teal-200">
          <h4 className='text-2xl font-bold text-black'>Please rating food quality!</h4>
        </div>
        <div className='p-4'></div>
        <h1 className='text-4xl text-black text-center'>Enjoy Eating!!!</h1>
        <div className='p-4'></div>
        <div class='flex justify-center'>
          {/* Rating Star */}
          <form onSubmit={handle_submitVote}>
            <fieldset>
              <div className="flex justify-center rating rating-lg">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  value="1"
                  checked={selectedStar === "1"}
                  onChange={handleOptionChange}
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  value="2"
                  checked={selectedStar === "2"}
                  onChange={handleOptionChange}
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  value="3"
                  checked={selectedStar === "3"}
                  onChange={handleOptionChange}
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  value="4"
                  checked={selectedStar === "4"}
                  onChange={handleOptionChange}
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  value="5"
                  checked={selectedStar === "5"}
                  onChange={handleOptionChange}
                />
              </div>
              <p class="text-center p-6">You Selected : {selectedStar}</p>
              <div className='flex justify-center p-4'>
                <button class='p-3 px-20 pt-3 bg-teal-400 rounded-full baseline hover:bg-teal-300 cursor-pointer'
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}