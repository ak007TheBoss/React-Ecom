import { configureStore } from "@reduxjs/toolkit";
import pushdataSliceReducer from './slices/pushdataSlice'
import cartsumsliceReducer from './slices/cartsumSlice'
const store = configureStore({
    reducer:{
        carddatashow:pushdataSliceReducer,
        cartsum:cartsumsliceReducer
    }


})
export default store


