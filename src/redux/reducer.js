//
// const initState = {
//     filter:{
//         stateFilter:'',
//         date_filter:''
//     },
//
// }
//
// const filterReducer = (state = initState,action) => {
//     console.log(state,action)
//     switch (action.type){
//         case 'filter/search' :
//             return {
//                 ...state,
//                 filter: {
//                     ...state.filter,
//                     stateFilter: action.payload.stateFilter || state.filter.stateFilter,
//                     date_filter: action.payload.date_filter || state.filter.date_filter
//                 }
//             }
//         default:
//             return state
//     }
// }
//
// export default filterReducer

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name:'filters',
    initialState:{
        stateFilter:'',
        date_filter:''
    },
    reducers:{
        search:(state , action) => {
            state.stateFilter = action.payload.stateFilter || state.stateFilter
            state.date_filter = action.payload.date_filter || state.date_filter

        }
    },
    // extraReducers:(builder => {
    //     builder
    //         .addCase(fetchTodo.fulfilled,(state , actions) => {
    //             state.
    //         })
    // })
})

// export const fetchTodo = createAsyncThunk('todos/fetchTodos',async () => {
//     const res = await fetch('/api/todos')
//     const data = await res.json()
//     return data.todos
// })
