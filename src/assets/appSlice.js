import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navVisibility:true
    },
    reducers: {
      showNav(state) {
        return{...state, navVisibility:true }
      },
      hideNav(state) {
        return{...state, navVisibility:false }
      }
    },
    extraReducers: {}
})
export const {showNav, hideNav } = appSlice.actions
export default appSlice.reducer