
const initState = {
    filter:{
        stateFilter:'',
        date_filter:''
    },

}

const rootReducer = (state = initState,action) => {
    console.log(state,action)
    switch (action.type){
        case 'filter/search' :
            return {
                ...state,
                filter: {
                    ...state.filter,
                    stateFilter: action.payload.stateFilter || state.filter.stateFilter,
                    date_filter: action.payload.date_filter || state.filter.date_filter
                }
            }
        default:
            return state
    }
}

export default rootReducer
