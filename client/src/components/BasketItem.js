import React, { useState } from 'react'

export default function BasketItem({ menuObj, callbackUpdate , cur_subTotal}) {

    const [displayQuantity, setDisplayQuantity] = useState(menuObj.quantity)
    const handle_ClickVote = (id, voteVal) => {
        const cur_menuInBasket = JSON.parse(sessionStorage.getItem("current_menuInBasket"))
        cur_menuInBasket.forEach(item => {
            if (item.id === id) {
                item.quantity += voteVal
                cur_subTotal += voteVal * item.itemPrice
                // if menu downvote to 0 -> remove that objecct from session from session
                if (item.quantity <= 0) {
                    const filterData = cur_menuInBasket.filter(item => item.id !== id)
                    // if that object is the last menu in basket
                    // set session about foodshop and menu in basket to null (remove session)  
                    if (filterData.length === 0) {
                        sessionStorage.removeItem("current_FoodShopInBasket")
                        sessionStorage.removeItem("current_menuInBasket")
                    }
                    //not the last menu -> update object with new quantity
                    else {
                        sessionStorage.setItem("current_menuInBasket", JSON.stringify(filterData))
                    }
                    // alert(filterData.length)
                    window.location.reload()
                }
                else {
                    setDisplayQuantity(item.quantity)
                    // update that menu quantity after click vote to session
                    sessionStorage.setItem("current_menuInBasket", JSON.stringify(cur_menuInBasket))
                    // display new sub total
                    callbackUpdate(cur_subTotal)
                }
            }
        });
    }
    return (
        <div class="flex flex-col md:flex-row border-b border-gray-400 py-4 ">
            <div class="flex-shrink-0 rounded-lg">
                <img src={menuObj.imgPath} alt="Product image" class="w-72 h-44 object-cover rounded-lg" />
            </div>
            <div class="mt-4 md:mt-0 md:ml-6">
                <h2 class="font-bold text-2xl md:text-3xl" style={{ fontFamily: "'Noto Serif Thai', serif" }}>{menuObj.itemName}</h2>
                <div class="mt-4 flex items-center text-2xl">
                    <span class="mr-2 text-gray-600 ">Quantity:</span>
                    <div class="flex items-center">
                        <button class="bg-red-500 rounded-l-lg px-2 py-1 text-white" onClick={() => handle_ClickVote(menuObj.id, -1)}>-</button>
                        <span class="mx-2 text-gray-600 ">{displayQuantity}</span>
                        <button class="bg-green-500 rounded-r-lg px-2 py-1 text-white" onClick={() => handle_ClickVote(menuObj.id, 1)}>+</button>
                    </div>
                    <span class="md:ml-8 ml-auto font-bold">{menuObj.itemPrice * displayQuantity} Bath</span>
                </div>
            </div>
        </div>
    )
}
