import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function OrderFinalRating() {
  return (
    <div>
        <NavBar />
        <div className='mx-auto bg-scale-300 h-screen'>
          <div class="flex flex-row py-4 bg-teal-400 p-8">
            <img class='object-scale-down h-40 w-40 rounded-full' src='https://i2-prod.manchestereveningnews.co.uk/incoming/article26496180.ece/ALTERNATES/s1200c/0_GettyImages-1473778315.jpg' alt=''></img>
            <div class='flex flex-col justify-start'>
              <h2 className='text-2xl text-black p-2 px-10'>ชื่อผู้ส่ง : Erling Braut Haaland</h2>
              <h2 className='text-2xl text-black p-2 px-10'>เบอร์ผู้ส่ง : xxx-xxxx-xxxx</h2>
              <h3 className='text-2xl font-bold text-green-200 p-2 px-10 text-center'>Order Completed !!!</h3>
            </div>
          </div>
          <div className='p-8'></div>
          <div class="flex flex-row px-4 py-2 bg-teal-200">
            <h4 className='text-2xl font-bold text-black'>Please rating food quality!</h4>
          </div>
          <div className='p-4'></div>
          <h1 className='text-4xl text-black text-center'>Enjoy Eating!!!</h1>
          <div className='p-4'></div>
          <div class='flex justify-center'>
          <form>
            <fieldset>
                <input type="radio" id="rating-4" name="rating" value="4" /><label for="rating-4"></label>
                <input type="radio" id="rating-3" name="rating" value="3" /><label for="rating-3"></label>
                <input type="radio" id="rating-2" name="rating" value="2" /><label for="rating-2"></label>
                <input type="radio" id="rating-1" name="rating" value="1" /><label for="rating-1"></label>
                <input type="radio" id="rating-0" name="rating" value="0" /><label for="rating-0"></label>
                <div className='flex justify-center p-8'>
                  <input class='p-3 px-20 pt-2 bg-teal-400 rounded-full baseline hover:bg-teal-300' type="submit" value="Submit"></input>
                </div>
            </fieldset>
          </form>
          </div>
        </div>
        <Footer />
    </div>
  )
}
