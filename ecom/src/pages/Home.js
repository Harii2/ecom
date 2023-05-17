import React,{useEffect,useState} from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import {useLoaderData} from "react-router-dom"
const Home = () => {
  const data = useLoaderData()
  const [products,setProducts] = useState([])
  
  useEffect(()=>{
    setProducts(data.data)
  },[data])
  return (
    <>
      <Banner/>
      {
        
        products !== [] ? <Products products = {products}/> : <p>Home Page</p>
      }
      
    </>
  )
}

export default Home