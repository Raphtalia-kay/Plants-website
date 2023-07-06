import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { AddcartSlice } from './service/CartSlice';



export const store = configureStore({
    reducer : {
            [authApi.reducerPath] : authApi.reducer,
            cartSlice : AddcartSlice
    },
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),

})