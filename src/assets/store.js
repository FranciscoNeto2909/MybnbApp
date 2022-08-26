import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import acomodationSlice from "./acomodationSlice"

export const store = configureStore({
    reducer:{
        user:userSlice,
        acomodation:acomodationSlice
    }
})