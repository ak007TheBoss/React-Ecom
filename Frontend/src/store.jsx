import { configureStore } from "@reduxjs/toolkit";
import pushdataSliceReducer from './slices/pushdataSlice'
import cartsumsliceReducer from './slices/cartsumSlice'
import searchSliceReducer from './slices/searchSlice'
const store = configureStore({
    reducer:{
        carddatashow:pushdataSliceReducer,
        cartsum:cartsumsliceReducer,
        searchdata:searchSliceReducer
    }


})
export default store


