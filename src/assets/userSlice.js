import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createUser = createAsyncThunk("createUser", async user => {
    try {
        await axios.post("http://localhost:3000/users/", user)
        .then(data => data.status)
      } catch (err) {
        console.log(err)
      }
})
export const login = createAsyncThunk("login", async user => {
    try {
        await axios.post("http://localhost:3000/users/login", user)
        .then(data => data.status)
      } catch (err) {
        console.log(err) 
      }
})
const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Francisco",
        email: "",
        isLogged: true
    },
    reducers: {
      logout(state) {
        return{...state, isLogged:false }
      },
      userLogin(state) {
        return{...state, isLogged:true }
      }
    },
    extraReducers: {}
})
export const {logout, userLogin } = userSlice.actions
export default userSlice.reducer