import React from 'react'
import ProductCart from './ProductCart'

const Products = (props) => {
    const {products} = props
    // console.log(products)
    return (
    <div className='py-10'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                Shopping everyday
            </h1>
            <span className='w-20 h-[3px] mt-3 mb-2 bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
                Shop every day.Shopping is a part of life so make it fast and do your shopping on this store.There are multiple products so buy they based on your interest
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
            {
                products.map(item => <ProductCart key={item._id} product = {item}/>)
            }
        </div>
    </div>
  )
}

export default Products