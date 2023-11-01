// import {createStore} from "redux";
// import rootReducer from "./reducer";
//
// const store = createStore(rootReducer);
//
// export default store

import {configureStore} from "@reduxjs/toolkit";
import  {filterSlice} from "./reducer";

const store = configureStore({
    reducer:{
        filter:filterSlice.reducer,
    }
})

export default store
