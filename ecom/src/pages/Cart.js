import React, { useEffect ,useState} from 'react'
import beach from "../assets/beach.jpg"
import CartItems from '../components/CartItems'
import { useSelector } from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios"

const Cart = () => {

    const productData = useSelector((state) => state.ecom.productData);
    const userInfo = useSelector((state) => state.ecom.userInfo)

    const [totalAmt,setTotalAmt] = useState(0) ;
    const [payNow,setPayNow] = useState(false)

    useEffect(()=>{
      let price = 0;
      productData.map((item) => {
        price += (item.quantity * item.price)
        return price
      });
      setTotalAmt(price)
    },[productData])

    const handleCheckOut = () => {
       if(userInfo){
          setPayNow(true)
       }
       else{
          setPayNow(false)
          toast.error("Please sign in to checkout")
       }
    }
    const payment = async(token) => {
        await axios.post("http://localhost:4242/pay",{
          amount : totalAmt * 100 ,
          token : token
        }).then((res) => {
          console.log(res.data)
        }).catch((error) => console.log(error))
    }
    
  return (
      <>
        <ToastContainer position='top-left'/>
        <div >
        <img className='w-full h-60 object-cover' src = {beach} alt = "img" />
        <div className='max-w-screen-xl mx-auto py-20 md:flex'>
          {productData ? <CartItems/> : <p>Your cart is Empty go for shoping</p>}
          {/* <CartItems/> */}
          <div className='md:w-1/3 bg-[#fafafa] py-6 px-4'>
              <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                  <h2 className='text-2xl font-medium'>Cart Totals</h2>
                  <p className='flex items-center gap-4 text-base'>
                    Subtotal 
                    <span className='font-titleFont font-bold text-lg'>
                      $ {" "} {totalAmt.toFixed(2)}
                    </span>
                  </p>
                  <p className='flex items-center gap-4 text-base'>
                    Shipping
                    <span className='font-titleFont font-bold text-lg'>
                      Lorem,ipsum dolor sit amet consectetur adipscing elit.Quos,verticals
                    </span>
                  </p>
              </div>
              <p className='font-titleFont font-semibold flex justify-between mt-6'>
                Total <span className='text-xl font-bold'>${" "} {totalAmt.toFixed(2)}</span>
              </p>

              <button
               onClick={handleCheckOut} className='text-base  bg-black text-white w-40  py-3 mt-6 hover:bg-gray-800 duration-500'> proceed to checkout</button>
               {
                payNow && <div className='mt-6 flex items-center w-full'>
                      <StripeCheckout 
                        stripeKey='pk_test_51N8LBESFLvLzSxC3O3iACIKTrZjmjQGopgkgvANmzIPR2MS4BtCSVx7uWmvn9AxITwX6yooua4tWppiy9QkVOipt003XqhXGh6'
                        name = "Ecom Online Shopping"
                        amount = {totalAmt*100}
                        label = "pay to Ecom"
                        description= {`Your payment amount is $${totalAmt}`}
                        token = {payment}
                        email = {userInfo.user.email}
                      />
                  </div>
               }
          </div>
        </div>
      </div>
      </>
  )
}

export default Cart