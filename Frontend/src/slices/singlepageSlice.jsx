import { createSlice } from "@reduxjs/toolkit";

const singlepageSlice = createSlice({
    name:'singlepage',
    initialState:{
        singleData:{},    
    },
    reducers:{
        showsingleData:(state,action)=>{
            state.singleData = action.payload 
        }
    }
})
export const{showsingleData} = singlepageSlice.actions
export default singlepageSlice.reducer

