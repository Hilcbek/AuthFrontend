import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
const Register = () => {
    let [data,setData] = useState({
        username : '',
        password : ''
    })
    let navigate = useNavigate()
    let handleAuth = async (e) => {
        e.preventDefault()
        try {
            let {username,password} = data;
            let res = await axios.post('/register',{ username, password })
            if(res.data){
                toast.success('Registered Successfully!')
                navigate('/login')
            }
        } catch (error) {
            toast.error(error.response.data.error)
            Reset()
        }
    }
  return (
    <div className='w-full h-[50vh] overflow-hidden flex items-center justify-center'>
        <div className='shadow-md shadow-black/60 mx-auto w-3/12 p-2'>
            <h1 className='text-4xl mb-5 underline'>Register</h1>
            <form action="" className='w-11/12 mx-auto' onSubmit={handleAuth}>
                <div className='flex items-start justify-start flex-col w-full my-1'>
                    <label className='tracking-widest underline' htmlFor="username">Username</label>
                    <input className='p-2 w-full bg-transparent border-solid outline-none  border-b-[1px] border-black' value={data.username} onChange={(e) => setData({...data, username : e.target.value})} type="text" name="username" id="username" />
                </div>
                <div className='flex items-start justify-start flex-col w-full my-1'>
                    <label className='tracking-widest underline' htmlFor="password">Password</label>
                    <input className='p-2 w-full bg-transparent border-solid outline-none  border-b-[1px] border-black' value={data.password} onChange={(e) => setData({...data, password : e.target.value})} type="password" name="password" id="password" />
                </div>
                <button className='p-2 bg-black text-white my-3 rounded-sm w-8/12 mx-auto block'>Register</button>
            </form>
            <h1 className='text-xs my-3 font-medium w-full text-center'>Already have an Account? <Link to={'/login'}>Login</Link></h1>
        </div>
    </div>
  )
}

export default Register