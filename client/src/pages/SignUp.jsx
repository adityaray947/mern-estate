import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import OAuth from '../component/OAuth';

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate =useNavigate();

  const handleChange=(e)=>{
    setFormData (
      {
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{

      setLoading(true);
      const res=await fetch('/api/auth/signup',
      {
        method:'POST',
        headers  :{
          'content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data=await res.json();
      console.log(data);
      if(data.success===false){
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/signin');
    }catch(error){
      setLoading(false);
      setError(error.message);
    }
  };
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type='text' placeholder='Username ' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type='text' placeholder='email ' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type='password' placeholder='password ' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:75  '>
          {loading?'Loading...':'Sign Up'}</button>
      </form>
      <OAuth/>
      <div className='flex  gap-2 mt-5 justify-center'>
        <p>Have an account?</p>
        <Link to={"/Signin"}>
        <span className='text-blue-700 hover:cursor-pointer'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
