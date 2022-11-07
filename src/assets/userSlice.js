import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "./api"

export const createUser = createAsyncThunk("createUser", async user => {
  try {
    await api.post("users/", user)
      .then(data => data.status)
  } catch (err) {
    console.log(err)
  }
})

export const login = createAsyncThunk("login", async user => {
  try {
    const res = await api.post("users/login", user)
      .then(data => data.data)
      .catch(err => err)
    return res
  } catch (err) {
    console.log(err)
  }
})

export const emailAuth = createAsyncThunk("emailAuth", async email => {

  try {
    const res = await api.post("emailAuth", email)
      .then(data => data)
      .catch(err => err)
    return res
  } catch (error) {
    console.log(error)
  }
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "",
      email: "",
      phone: "",
      birthDate: ""
    },
    isLogged: false
  },
  reducers: {
    logout(state) {
      return { ...state, isLogged: false }
    },
    userLogin(state) {
      return { ...state, isLogged: true }
    },
    setUser(state, { payload }) {
      return { ...state, user: payload }
    }
  },
  extraReducers: (build) => {
    build
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.token != undefined && action.payload.token != null) {  
          localStorage.setItem('token', action.payload.token)
          return { ...state, user: action.payload.user, isLogged: true }
        }else{
          return { ...state, isLogged: false }
        }
      })
  }
})
export const { logout, userLogin } = userSlice.actions
export default userSlice.reducer