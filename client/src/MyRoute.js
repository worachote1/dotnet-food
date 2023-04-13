import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Profile from "./components/Profile"
import Login from "./components/Login"

export default function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/profile/:userId" exact element={<Profile />} />
                <Route path="/login" exact element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
