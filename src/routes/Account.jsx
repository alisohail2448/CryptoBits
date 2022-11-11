import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import SavedCoin from '../Components/SavedCoin'
import SavedNft from '../Components/SavedNft'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate();
  
  const handleSignOut = async () =>{
    try{
      await logOut();
      navigate('/')
    }catch(e){
      console.log(e.message)
    }
  }
  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex items-center justify-between py-6 my-12 mt-32 rounded-card'>
        <div className='flex'>
          <div className='flex items-center justify-center mx-4'>
          <FaUserCircle className='text-5xl'/>
          </div>
        <div>
        <h1 className='text-2xl font-bold'>Account</h1>
          <div >
            <p className='text-[18px]'>Welcome, {user?.email}</p>
        </div>
          </div>
        </div>
          <div>
            <button onClick={handleSignOut} className='px-6 py-2 font-bold rounded-2xl bg-button text-btnText hover:shadow-2xl'>Sign Out</button>
          </div>
      </div>
        <div className='flex items-center justify-between py-8 my-12 rounded-div'>
          <div className='w-full min-h-[300px]'>
            <h1 className='py-4 text-2xl font-bold'>Watch List</h1>
            <SavedCoin/>
            {/* <SavedNft/> */}
          </div>
        </div>
    </div>
  )
}

export default Account