import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
import {MdOutlineStar} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/ecomSlice'
import { ToastContainer,toast } from 'react-toastify';


const Product = () => {
    const [details,setDetails] = useState([])
    const [baseQuantity,setBaseQuantity] = useState(1);
    const location = useLocation()
    
    const dispatch = useDispatch()
    useEffect(()=>{
        setDetails(location.state.item)
    },[location.state.item])

  return (
    <div>
        <ToastContainer position='top-left'/>
        <div className='max-w-screen-xl mx-auto m-2 my-10 md:flex gap-10'>
            <div className='md:w-2/5 relative'>
                <img
                    className='w-full h-[550px] object-cover'
                    src ={details.image}
                    alt = "product img"
                />
                <div className='absolute top-4 right-0'>
                    {
                        details.isNew && (<p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>Sale</p>)
                    }
                </div>
            </div>
            <div className='md:w-3/5  m-4 flex flex-col justify-center gap-12'>
                <div>
                    <h2 className='text-4xl font-semibold'>{details.title}</h2>
                    <div className='flex items-center gap-4 mt-3'>
                        <p className='line-through font-base text-gray-500'>${details.oldPrice}</p>
                        <p className='text-2xl font-medium text-gray-900'>${details.price}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-base'>
                    <div className='flex '>
                        <MdOutlineStar/>
                        <MdOutlineStar/>
                        <MdOutlineStar/>
                        <MdOutlineStar/>
                        <MdOutlineStar/>
                    </div>
                    <p className='text-xs text-gray-500'>(1 customer review)</p>
                </div>
                <p>{details.description}</p>
                <div className='flex gap-6'>
                    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 text-sm font-semihold'>
                            <button onClick={() => baseQuantity > 1 && setBaseQuantity(val => val-1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-800 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                            <span>{baseQuantity}</span>
                            <button onClick={() => setBaseQuantity(val => val + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-800 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                        </div>
                    </div>
                    <button onClick={() => {
                        dispatch(addToCart({
                            id : details.id,
                            title : details.title,
                            image : details.image,
                            price : details.price,
                            quantity : baseQuantity,
                            description:details.description
                        }));
                        toast.success(`${details.title} is added to cart succesfully`)
                    }} className='bg-black mt-2 text-white py-3 px-6 active:bg-gray-800'> Add to cart</button>
                </div>
                <p className='text-base text-gray-500'>Category : <span className='font-medium capitalize'>{details.category}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Product