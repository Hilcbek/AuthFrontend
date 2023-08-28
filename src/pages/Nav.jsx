import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { LOGOUT } from '../../Redux/userSlice'
import axios from 'axios'
const Nav = () => {
  let {username,reload} = useSelector((state) => state.user)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let Logout = () => {
    axios.post('/auth/logout')
    dispatch(LOGOUT({}))
    navigate('/login')
  }
  return (
    <nav className='w-11/12 mx-auto flex items-center justify-between'>
        <ul>
            <Link to={'/'} className='text'>Auth</Link>
        </ul>
        {
          (reload && username) ? (
            <ul className='flex items-center justify-center'>
              <p className='textlogged'>Hello ! {username}</p>
              <button className='p-1 rounded-sm border-solid border-black border-[1px] mx-2' onClick={Logout}>Logout</button>
            </ul>
          ) : (
            <ul className='flex items-center justify-center'>
              <Link className='p-2 rounded-sm border-solid border-black border-[1px] mx-2' to={'/register'}>Register</Link>
              <Link className='p-2 rounded-sm border-solid border-black border-[1px] mx-2' to={'/login'}>Login</Link>
            </ul>
          )
        }
    </nav>
  )
}

export default Nav