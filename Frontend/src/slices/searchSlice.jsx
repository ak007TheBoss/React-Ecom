import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:'search',
    initialState:{
        searchData:[]
    },
    reducers:{
        searchedData:(state,action)=>{
            
        }
    }
})

export const{searchedData} = searchSlice.actions
export default searchSlice.reducer