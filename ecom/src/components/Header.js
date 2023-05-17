import React from 'react'
import logo from "../assets/logo.jpg"
import cart from "../assets/cart.jfif"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const  productData = useSelector((state) => state.ecom.productData)
    const userInfo = useSelector((state) => state.ecom.userInfo)
    console.log(userInfo)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <div>
                <img src={logo} className='w-20' alt='logo'/>
            </div>
            <div className='flex items-center gap-8'>
            <ul className='hidden md:flex items-center gap-8'>
                <Link to ='/'> 
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                    duration-300'>Home</li>
                </Link>
               <Link to='/pages'>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                    duration-300'>Pages</li>
               </Link>
                <Link to='/shop'>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                    duration-300'>Shop</li>
                </Link>
                <Link to="/element">
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                    duration-300'>Element</li>
                </Link>
                <Link to = '/blog'>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                    duration-300'>Blog</li>
                </Link>
            </ul>
            <div className='relative'>
                <Link to = '/cart'>
                    <img className='w-6' src={cart} alt="cart-img"/>
                    <span className='absolute w-6 top-1 left-0 text-sm flex items-center
                    justify-center font-semibold'>
                    {productData.length}
                    </span>
                </Link>
            </div>
            <Link to = "/login">
               <img className='w-8 h-8 rounded-full' src={userInfo ? userInfo.user.photoURL : "https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="user" />
                
            </Link> 
            <Link>
            {
                userInfo && <p className='text-bold font-semibold'>{userInfo.user.displayName}</p>
            }
            </Link>  
            </div>
        </div>
    </div>
  )
}

export default Header