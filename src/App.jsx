import React from "react"
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Nav from "./pages/Nav"
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { useSelector } from "react-redux"
axios.defaults.baseURL = 'https://auth-jkam.onrender.com/api/auth'
axios.defaults.withCredentials = true
function App() {
    let {username,reload} = useSelector((state) => state.user)
   return (
    <div>
      <BrowserRouter>
      <Nav />
      <Toaster position="top-center" toastOptions={{ duration : 3000}} containerStyle={{ marginTop : 80}}  />
        <Routes>
          <Route path="/" element={(username && reload) ? <Home /> : <Navigate to={'/login'} /> } />
          <Route path="/register" element={(username && reload) ? <Navigate to={'/'} /> : <Register />} />
          <Route path="/login" element={(username && reload) ? <Navigate to={'/'} /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
//''