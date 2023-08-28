import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from '../../Redux/userSlice'

const Home = () => {
  let [data,setData] = useState([])
  let dispatch = useDispatch()
  useEffect(() => {
    let AllUsers = async () => {
      try {
        let res = await axios.get('/')
        setData(res.data.data)
      } catch (error) {
         toast.error(error.response.data.error)
         dispatch(LOGOUT({}))
      }
    }
    AllUsers()
  },[])
  return (
    <div className='w-10/12 mx-auto h-[80vh] flex items-start justify-start text-5xl font-Roboto'>
      <table className='p-2 w-full mt-6'>
        <thead className=''>
          <tr>
            <th className='mb-5 underline text'>Users</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((res,idx) => (
              <tr key={idx} className='p-3 rounded-3xl'>
                <td className='text-xl p-2'>{res.username}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home