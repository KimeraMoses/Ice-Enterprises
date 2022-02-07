const reducer = (state = '', action) =>{
    switch (action.type) {
        case "test":
            return (
                state + action.payload
            ); 
        default:
            return state
    }
}

export default reducer;