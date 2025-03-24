import { configureStore } from "@reduxjs/toolkit";
import pushdataSliceReducer from './slices/pushdataSlice'
import cartsumsliceReducer from './slices/cartsumSlice'
import searchSliceReducer from './slices/searchSlice'
import singlepageSliceReducer from './slices/singlepageSlice'
const store = configureStore({
    reducer:{
        carddatashow:pushdataSliceReducer,
        cartsum:cartsumsliceReducer,
        searchdata:searchSliceReducer,
        singleproduct:singlepageSliceReducer
    }


})
export default store


