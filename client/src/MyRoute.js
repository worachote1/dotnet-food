import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Register from "./components/Register"
import MainRider from "./components/MainRider"
import OrderListInfo from './components/OrderListInfo'
import Shop from "./components/Shop"
import Basket from './components/Basket'
import Order from './components/Order'

export default function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                {/* <Route path="/profile/:userId" exact element={<Profile />} /> */}
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/main-rider" exact element={<MainRider />} />
                <Route path="/order/:username" exact element={<Order />} />
                <Route path="/order-list-info/:orderId" exact element={<OrderListInfo />} />
                <Route path="/basket" exact element={<Basket />} />
                <Route path="/shop/:foodShopId" exact element={<Shop />} />
            </Routes>
        </BrowserRouter>
    )
}
