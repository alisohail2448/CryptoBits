import React, { useState, useContext } from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { theme, setTheme } = useContext(ThemeContext);
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
      if(theme === 'dark'){
        toast('User Register Successfully !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
       }
       else{
        toast('User Register Successfully !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
       }
      // navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
      if(error === "Firebase: Error (auth/email-already-in-use)."){
        if(theme === 'dark'){
          toast.error('Email is Already Exist', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
         }
         else{
          toast.error('Email is Already Exist', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         }
      }
    }
  }

  return (
    <div className='w-full h-[100vh]' >
       <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastStyle={{ backgroundColor: "var(--color-bg-secondary)", textColor:"var(--color-text-primary)", boxShadow:'none', marginTop:'20px' }} 
          />
      <div className="max-w-[400px] mx-auto min-h-[200px] px-4 mt-44 py-10 rounded-tab">
        <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
        {error ? <p className='p-3 my-2 bg-red-300'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className='relative w-full my-2 rounded-2xl '>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border bg-primary border-input rounded-2xl'
                type='email'
              />
              <AiOutlineMail className='absolute text-gray-400 right-2 top-3' />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="relative w-full my-2 rounded-2xl ">
              <input type="password" 
                     onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border bg-primary border-input rounded-2xl' />
              <AiFillLock className='absolute text-gray-400 right-2 top-3'/>
            </div>
          </div>
          <button className="w-full p-3 my-2 shadow-xl bg-button text-btnText rounded-2xl">Sign Up</button>
        </form>
        <p className="my-4 text-center">
          Already have an account? <Link to='/signin' className='text-accent'>Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup