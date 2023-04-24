import React from 'react'
import { Outlet, Link } from "react-router-dom";
// import { AddHostModal } from './HostModal';


function TestNav() {
    const mystyle = {
        color: "white",
        backgroundColor: "#FA8072",
        padding: "10px",
        font: "soid",
        fontFamily: "Arial"
    }
    const mystyleLogin = {
        color: "red",
        padding: "10px",
        font: "soid",
        fontFamily: "Arial"
    }
    return (
        <nav style={mystyle}>
            <ul style={{"display" : "flex" ,"justifyContent" : "space-between" ,"alignItems" : "center"}}>
                <li>
                    <Link to="/" className='navbar'>
                        <h1 to="/" >Hew-Hew</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <h1 to="/" style={mystyleLogin}>Login</h1>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default TestNav