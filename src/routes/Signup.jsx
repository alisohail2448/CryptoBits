import React, { useState } from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const {signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('')
    try {
      await signUp(email, password)
    } catch (error) {
      setError(error.message)
      console.log(e.message)
    }
  }

  return (
    <div className='w-full h-[100vh]' >
      <div className="max-w-[400px] mx-auto min-h-[200px] px-4 mt-44 py-10 rounded-tab">
        <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-2xl'
                type='email'
              />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl ">
              <input type="password" 
                     onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 bg-primary border border-input rounded-2xl' />
              <AiFillLock className='absolute right-2 top-3 text-gray-400'/>
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">Sign Up</button>
        </form>
        <p className="my-4 text-center">
          Already have an account? <Link to='/signin' className='text-accent'>Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup