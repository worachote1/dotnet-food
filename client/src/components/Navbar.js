import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';

import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { SlBasket } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
// import { getUser, logout } from '../services/authorize';

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const navigate = useNavigate();

    const handle_click_logOut = () => {
        //remove user in session
        sessionStorage.clear();
        // redirecct to login
        navigate("/login")
    }

    const check_IsUserLogIn = () => {
        return (sessionStorage.getItem('current_user') !== null) ? true : false
    }

    console.log(check_IsUserLogIn())
    return (

        <div className='max-w-[1640px] mx-auto
        flex justify-between p-4 
        '>
            {/* left side */}
            <div className='flex items-center '>
                <div className='cursor-pointer md:hidden'
                    onClick={() => setNav(!nav)}>
                    <AiOutlineMenu size={30} />
                </div>
                <Link to='/'>
                    <h1 className='text-2xl sm:text-3xl
                    lg:text-4xl px-2'>
                        <span className='text-teal-400'>D O T N E T</span> Delivery
                    </h1>
                </Link>

            </div>

            {/* Search Input */}
            {/* <div className='bg-gray-200 rounded-full flex items-center mx-4 px-2
            w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20.44} />
                <input className='p-2 focus:outline-none w-[100%] bg-transparent'
                    type="text" placeholder='Search...' />
            </div> */}

            {/* Button */}
            <div className='flex items-center justify-center'>

                {/* Go delivery mode */}

                {(check_IsUserLogIn())
                    ? <Link to={`/main-rider`}>
                        <button className='hidden
            px-7 py-3 mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
         md:inline-block'>
                            Delivery Mode
                        </button>
                    </Link>
                    : ""
                }

                {(check_IsUserLogIn())
                    ? <Link to={`/basket`}>
                        <button className='hidden
                px-7 py-3 mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                            <div className='flex '>
                                <SlBasket size={25} />
                                {((sessionStorage.getItem('current_FoodShopInBasket')!==null)) ? <div className="badge badge-secondary"> 12</div> : ""}
                            </div>
                        </button>
                    </Link>
                    : ""
                }

                {(check_IsUserLogIn())
                    ? <Link to={`/order/${sessionStorage.getItem('current_user')}`}>
                        <button className='hidden
            px-7 py-3 mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
         md:inline-block'>
                            your orders
                        </button>
                    </Link>
                    : ""
                }


                {/* Login -> hidden if user not log in */}
                {!(check_IsUserLogIn())
                    ? <Link to='/login'>
                        <button className='hidden
                px-7 py-3  mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                            Log in
                        </button>
                    </Link>
                    : ""
                }

                {/* Register -> hidden if user not log in*/}
                {!(check_IsUserLogIn())
                    ? <Link to='/register'>
                        <button className='hidden
                px-7 py-3  mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                            Register
                        </button>
                    </Link>
                    : ""
                }


                {/* Logout */}
                {(check_IsUserLogIn())
                    ? <button className='hidden
                px-7 py-3  mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'
                        onClick={handle_click_logOut}
                    >
                        log out
                    </button>
                    : ""
                }

            </div>


            {/* Mobile Menu */}
            {/* background overlay when click tab icon on the top left side? */}

            {(nav) ?
                <div className='bg-black/80 
                fixed w-screen h-screen
                top-0 left-0
                z-10'>
                </div>
                : ""}

            {/* if nav is set to false display the same , if it' true move nav side menu form left -100%  */}
            <div className={nav ? 'bg-white fixed top-0 left-0 w-[300px] h-screen duration-300 z-20'
                : 'bg-white fixed top-0 left-[-100%] w-[300px] h-screen duration-300 z-20'
            }>
                <AiOutlineClose size={30} className="absolute top-4 right-2 cursor-pointer" onClick={() => setNav(!nav)} />

                <h2 className='text-2xl p-4'>
                    <Link to='/'>
                        <span className='text-teal-400'>D o t N e t</span> Delivery
                    </Link>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4  text-gray-800'>
                        {/* <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4' /> Order Status</li>
                        <li className='text-xl py-4 flex items-center'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4' /> Help</li> */}
                        {/* <li className='text-xl py-4 flex items-center'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li> */}

                        {/* Go delivery Mode */}
                        {(check_IsUserLogIn())
                            ? <li>
                                <Link to='/main-rider'>
                                    <button className='
                px-7 py-3 mt-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'>
                                        Delivery Mode
                                    </button>
                                </Link>
                            </li>
                            : ""
                        }

                        {/* Basket */}
                        {(check_IsUserLogIn())
                            ? <li className='mt-2'>
                                <Link to={`/basket`}>
                                    <button className='
                px-7 py-3 mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                                        <div className='flex '>
                                            <SlBasket size={25} />
                                            {(sessionStorage.getItem('current_FoodShopInBasket')!==null) ? <div className="badge badge-secondary"> 12 </div> : ""}
                                        </div>
                                    </button>
                                </Link>
                            </li>
                            : ""
                        }


                        {/* your orders */}
                        {(check_IsUserLogIn())
                            ? <li className='mt-2'>
                                <Link to={`/order/${sessionStorage.getItem('current_user')}`}>
                                    <button className='
                px-7 py-3 mt-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'>
                                        Your orders
                                    </button>
                                </Link>
                            </li>
                            : ""
                        }

                        {/* Login -> hidden */}
                        {!(check_IsUserLogIn())
                            ? <li className='mt-2'>
                                <Link to='/login'>
                                    <button className='
                px-7 py-3 mt-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'>
                                        Log in
                                    </button>
                                </Link>
                            </li>
                            : ""
                        }

                        {/* Register -> hidden */}
                        {!(check_IsUserLogIn())
                            ? <li className='mt-2'>
                                <Link to='/register'>
                                    <button className='
                px-7 py-3 mt-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'>
                                        Register
                                    </button>
                                </Link>
                            </li>
                            : ""
                        }


                        {/* Logout */}
                        {(check_IsUserLogIn())
                            ? <li className='mt-2'>
                                <Link to='/login'>
                                    <button className='
                px-7 py-3 mt-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'
                                        onClick={handle_click_logOut}
                                    >
                                        log out
                                    </button>
                                </Link>
                            </li>
                            : ""
                        }


                    </ul>
                </nav>
            </div>

        </div >

    )
}

export default NavBar