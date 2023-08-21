import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../reducers/CartReducer";
import useReducers from "../reducers/useReducers";


const store = configureStore({
    reducer:{
        user:useReducers,
        cart:CartReducer
    }
})


export default store;