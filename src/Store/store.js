import {configureStore, createReducer, createSlice} from "@reduxjs/toolkit"
import cartReducer from './cartSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store