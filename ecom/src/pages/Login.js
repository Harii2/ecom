import React from 'react'
import {FcGoogle} from "react-icons/fc"
import {BsGithub} from "react-icons/bs"
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from "firebase/auth"
import { ToastContainer,toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../redux/ecomSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const handleGoogleLogin = (e) => {
    e.preventDefault()
    
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    dispatch(addUser({user}))
    toast.success("Login succesfully")
    setTimeout(() => {
      navigate("/")
    },2000)
 
  }).catch((error) => {
    toast.error(error.message)
    console.log(error)
  });

  }

  const handleSignOut = (e) => {
    e.preventDefault()
    signOut(auth)
    .then(() => {
      toast.success("Log out Succesfully")
      dispatch(removeUser())
      setTimeout(() => {
        navigate("/")
      },2000)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <>
      <ToastContainer position='top-left'/>
      <div className='flex flex-col m-4 justify-center items-center h-full'>
      <div className='flex gap-4 items-center'>
        <div onClick={handleGoogleLogin} className='border-[1px] rounded cursor-pointer w-60 p-5 m-3 flex items-start justify-center hover:bg-gray-200 '>
          <FcGoogle size={24} className='pt-1' />
          <p className='ml-2'> Sign in with Google</p>
        </div>
        <div>
          <button onClick={handleSignOut} className='bg-black w-40 text-white p-2 rounded'> Sign out</button>
        </div>
      </div>

      <div className='flex gap-4 items-center'>
      <div className='border-[1px] rounded cursor-pointer w-60 p-5 m-3 flex items-start justify-center hover:bg-gray-200 '>
         <BsGithub size={24} className='pt-1' />
         <p className='ml-2'> Sign in with GitHub</p>
      </div>
      <div>
         <button className='bg-black w-40 text-white p-2 rounded'> Sign out</button>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Login