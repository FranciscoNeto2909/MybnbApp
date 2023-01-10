import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navVisibility:true,
        destiny:false
    },
    reducers: {
      showNav(state) {
        return{...state, navVisibility:true }
      },
      hideNav(state) {
        return{...state, navVisibility:false }
      },
      setDestiny(state){
        return{...state, destiny:true}
      },
      clearDestiny(state){
        return{...state, destiny:false}
      }
    },
    extraReducers: {}
})
export const {showNav, hideNav,setDestiny, clearDestiny } = appSlice.actions
export default appSlice.reducer