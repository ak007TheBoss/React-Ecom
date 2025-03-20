import { createSlice } from "@reduxjs/toolkit";


const cartsumSlice = createSlice({
    name:'CartSum',
    initialState:{
    cartData : [],
    cartnum : 0
    },
    reducers:{
        sum:(state,action)=>{
            state.cartnum += action.payload
        },

        cartdata:(state,action)=>{
            console.log(action.payload)
            state.cartData.push(action.payload)
        }
    }

})
export const{sum,cartdata} = cartsumSlice.actions
export default cartsumSlice.reducer
