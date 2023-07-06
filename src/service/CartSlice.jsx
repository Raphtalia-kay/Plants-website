import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quantity : 0,
    totalAmount : 0,
    cart : [],
}

export const AddcartSlice = createSlice({
    name : "cartSlice",
    initialState,
    reducers : {
        ADD_TO_CART :(state,action) =>{
            state.cart = [...state.cart];
            

        } 
    }
})
export const {ADD_TO_CART} = AddcartSlice.actions;

export default AddcartSlice.reducer;