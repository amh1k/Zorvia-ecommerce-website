import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.cart.push(action.payload)

        },
        deleteProduct(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.price

        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity--;
            if (item.quantity <= 0) {
                cartSlice.caseReducers.deleteProduct(state, action);
                return;
            }
            item.totalPrice = item.quantity * item.price

        }
          
       

    }
})
export const {addProduct, deleteProduct, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions
export default cartSlice.reducer