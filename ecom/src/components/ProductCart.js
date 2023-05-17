import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { addToCart } from '../redux/ecomSlice';

import { ToastContainer,toast } from 'react-toastify';

const ProductCart = (props) => {
  const {product} = props ;

  // console.log(addToCart)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const _id = product.title

  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  }

  const rootString = idString(_id);
  // console.log(rootString)
  const handleDetails = () => {
    navigate(`/product/${rootString}`,{
      state:{
        item:product
      }
    })
  }
  return (
    <div className='group relative'>
      <ToastContainer position='top-left' />
      <div onClick={handleDetails} className='w-100 md:w-full h-96 cursor-pointer overflow-hidden'>
        <img 
        className='w-full h-full object-cover group-hover:scale-110 duration-500'
        src={product.image} alt="product" />
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
          <div className='flex justify-between items-center'>
              <div>
                <h2 className='font-titleFont text-base font-semibold'>
                    {product.title.substring(0,15)}
                </h2>
              </div>
              <div className='flex justify-end gap-2 relative overflow-hidden w-28 text-sm'>
                  <div className='text-sm relative w-28 flex justify-end gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                      <p className='line-through text-gray-500'>${product.oldPrice}</p>
                      <p className='font-semibold'>${product.price}</p>
                  </div>
                  <p onClick={() => {
                    dispatch(addToCart({
                      id:product._id,
                      title:product.title,
                      image:product.image,
                      price:product.price,
                      quantity:1,
                      description:product.description
                    })
                    );
                    toast.success(`${product.title} is added to cart succesfully`)
                  }} className='absolute z-20 w-[100px] text-gray-500 
                  hover:text-gray-900 flex justify-end items-center gap-1 top-0 translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>
                    add to cart 
                    <span className=''>
                        <BsArrowRight/>
                    </span>
                    </p>
              </div>
          </div>

          <div>
            <p>
               {product.category}
            </p>
          </div>
          <div className='absolute top-4 right-0'>
            {product.isNew &&
             <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>Sale</p>}
          </div>
      </div>
    </div>
  )
}

export default ProductCart