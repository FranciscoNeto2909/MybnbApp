import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "./api"

export const getAcomodations = createAsyncThunk("getAcomodations", async () => {
    try {
        const res = await api.get('acomodations')
            .then(data => data.data)
            .catch(err => err)
        return res
    } catch (error) {
        return error
    }
})

export const postAcomodation = createAsyncThunk("postAcomodation", async acomodation => {

    try {
        const res = await api.post("acomodations", acomodation)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        return res
    } catch (error) {
        return console.log(error)
    }
})

export const updateAcomodation = createAsyncThunk("updateAcomodation", async acomodation => {

    try {
        const res = await api.put(`acomodations/${acomodation.id}`, acomodation)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        return res
    } catch (error) {
        return console.log(error)
    }
})

export const postAcomodationImage = createAsyncThunk("postAcomodationImage", async acomodationData => {

    try {
        const { images, acomodationName } = acomodationData
        const formData = new FormData()

        for (let index = 0; index < images.length; index++) {
            const file = images[index];
            formData.append('images', file)
        }

        const res = await api.post(`acomodations/images/${acomodationName}`, formData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        return res
    } catch (error) {
        return console.log(error)
    }
})

export const deleteAcomodation = createAsyncThunk("deleteAcomodation", async id => {
    try {
        await api.delete(`acomodations/${id}`)
        .then(data => data.data)
    } catch (error) {
        return console.log(error)
    }
})

const acomodationSlice = createSlice({
    name: "acomodation",
    initialState: {
        acomodation: []
    },
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(getAcomodations.fulfilled, (state, action) => {
                return { ...state, acomodation: action.payload }
            })
    }

})

export default acomodationSlice.reducer