import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import acomodationSlice from "./acomodationSlice"
import appSlice from "./appSlice";

export const store = configureStore({
    reducer:{
        user:userSlice,
        acomodation:acomodationSlice,
        app:appSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})