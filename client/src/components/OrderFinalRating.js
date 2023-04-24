import React,{ useEffect, useState } from 'react'
import NavBar from './NavBar'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

export default function OrderFinalRating() {

  let test_riderDetial_data = [
    {
      "id": 1,
      "riderName": "รับส่ง ปลอดภัย",
      "riderTel": "08x-xxx-xxxx",
      "imgPath": 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    }
  ]

  const [selectedStar, setSelectedStar] = useState("");
  const handleOptionChange = (event) => {
    setSelectedStar(event.target.value)
  }

  const navigate = useNavigate();
  const alert_RatingSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Your Score has been saved',
      text: "Thank You!!!",
      showConfirmButton: false,
      timer: 1000
    }).then((result) => {
      navigate("/")
    })
  }
  
  const current_user = sessionStorage.getItem("current_user")

  const [riderInfo, setRiderInfo] = useState([])

  let test_riderDetail_div = []
  test_riderDetial_data.map((item) => {
    test_riderDetail_div.push(
      <div key={`${item.riderName}-${item.id}`}>
        <div class="flex flex-col justify-center items-center md:flex-row py-4 bg-teal-400 p-8">
            <img class='w-60 h-60 rounded-full' src={item.imgPath} alt=''></img>
            <div class='flex flex-col justify-start'>
              <h2 className='text-3xl text-black p-2 px-10'>ชื่อผู้ส่ง : {item.riderName}</h2>
              <h2 className='text-3xl text-black p-2 px-10'>เบอร์ผู้ส่ง : {item.riderTel}</h2>
              <h3 className='text-3xl font-bold text-green-200 p-2 px-10 text-center'>Order Completed !!!</h3>
            </div>
          </div>
      </div>
    )
  })

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
          <form>
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
                <btn class='p-3 px-20 pt-3 bg-teal-400 rounded-full baseline hover:bg-teal-300'
                onClick={() => alert_RatingSuccess()}>Submit</btn>
              </div>
            </fieldset>
          </form>
          </div>
        </div>
    </div>
  )
}
