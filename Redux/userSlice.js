import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.withCredentials = true
export let UserSlice = createSlice({
    name : 'user',
    initialState : {
        id : JSON.parse(localStorage.getItem("id")) || null,
        username : JSON.parse(localStorage.getItem("username")) || null,
        reload : true
    },
    reducers : {
        LOGIN : (state,action) => {
            state.id = action.payload.id;
            state.username = action.payload.username
            localStorage.setItem("id",JSON.stringify(action.payload.id))
            localStorage.setItem("username",JSON.stringify(action.payload.username))
            state.reload = true
        },
        LOGOUT : (state,action) => {
            localStorage.clear()
            state.reload = false
        }
    }
})
export let { LOGIN, LOGOUT } = UserSlice.actions
export default UserSlice.reducer