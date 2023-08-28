import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  let {username} = useSelector((state) => state.user)
  return (
    <div className='w-full h-[80vh] flex items-center justify-center text-5xl font-Roboto'>Hello👋<span className='ml-4 font-Poppins text'>{username}</span>!</div>
  )
}

export default Home