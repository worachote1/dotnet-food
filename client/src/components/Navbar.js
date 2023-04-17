import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';

import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

// import { getUser, logout } from '../services/authorize';

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const navigate = useNavigate();

    return (

        <div className='max-w-[1640px] mx-auto
        flex justify-between p-4 
        '>
            {/* left side */}
            <div className='flex items-center'>
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
            <div>

                {/* Go delivery mode */}
                <Link to={`/basket`}>
                    <button className='hidden
                px-7 py-3 mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                        Delivery Mode
                    </button>
                </Link>

                <Link to={`/basket`}>
                    <button className='hidden
                px-7 py-3 mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                        BASKET
                    </button>
                </Link>

                {/* Login */}
                <Link to='/login'>
                    <button className='hidden
                px-7 py-3 mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                        Log in
                    </button>
                </Link>

                {/* Register */}
                <Link to='/register'>
                    <button className='hidden
                px-7 py-3 mx-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'>
                        Register
                    </button>
                </Link>

                {/* Logout */}
                <a>
                    <button className='hidden
                    "px-7 py-3 mx-2 bg-transparent text-black rounded-full font-medium text-sm leading-snug uppercase  shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
             md:inline-block'
                    // onClick={() => logout(() => {
                    //     navigate('/')
                    //     window.location.reload(false)
                    //     })}
                    >
                        Log out 88
                    </button>
                </a>

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
                        <span className='text-teal-400'>D o t N e t</span> F O O D
                    </Link>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4  text-gray-800'>
                        {/* <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4' /> Order Status</li>
                        <li className='text-xl py-4 flex items-center'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4' /> Help</li> */}
                        {/* <li className='text-xl py-4 flex items-center'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li> */}
                        
                        {/* Go delivery Mode */}
                        <li>
                            <Link to='/main-rider'>
                                <button className='
                px-7 py-3 mt-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'>
                                    Delivery Mode
                                </button>
                            </Link>

                        </li>                        
                        
                        {/* Login */}
                        <li className='mt-2'>
                            <Link to='/login'>
                                <button className='
                px-7 py-3 mt-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'>
                                    Log in
                                </button>
                            </Link>

                        </li>

                        {/* Register */}
                        <li className='mt-2'>
                            <Link to='/register'>
                                <button className='
                px-7 py-3 mt-2 bg-transparent rounded-full text-black font-medium text-sm leading-snug uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'>
                                    Register
                                </button>
                            </Link>

                        </li>
                  
                        {/* Logout */}
                        <li className='mt-2'>
                            <a>
                                <button className='
                    px-7 py-3 mt-2 bg-transparent text-black rounded-full font-medium text-sm leading-snug uppercase  shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                                // onClick={() => logout(() => {
                                //     navigate('/')
                                //     window.location.reload(false)
                                // })}
                                >
                                    Log out
                                </button>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>

        </div >

    )
}

export default NavBar