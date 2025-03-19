import { createSlice } from "@reduxjs/toolkit";


const cartsumSlice = createSlice({
    name:'CartSum',
    initialState:{
    cartnum : 0
    },
    reducers:{
        sum:(state,action)=>{
            state.cartnum += action.payload
        }
    }

})
export const{sum} = cartsumSlice.actions
export default cartsumSlice.reducer
