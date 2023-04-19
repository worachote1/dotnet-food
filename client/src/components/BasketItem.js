import React from 'react'

export default function BasketItem({itemName,itemPrice,quantity,imgPath}) {
    return (
        <div class="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div class="flex-shrink-0">
                <img src={imgPath} alt="Product image" class="w-32 h-32 object-cover" />
            </div>
            <div class="mt-4 md:mt-0 md:ml-6">
                <h2 class="text-lg font-bold">Product Title : {itemName}</h2>
                <p class="mt-2 text-gray-600"></p>
                <div class="mt-4 flex items-center">
                    <span class="mr-2 text-gray-600">Quantity:</span>
                    <div class="flex items-center">
                        <button class="bg-gray-200 rounded-l-lg px-2 py-1" >-</button>
                        <span class="mx-2 text-gray-600">{quantity}</span>
                        <button class="bg-gray-200 rounded-r-lg px-2 py-1" >+</button>
                    </div>
                    <span class="md:ml-8 ml-auto font-bold">{itemPrice * quantity} Bath</span>
                </div>
            </div>
        </div>
    )
}
