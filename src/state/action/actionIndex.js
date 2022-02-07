export const changeText = (text) => {
    return (dispatch) =>{
        dispatch({
            type: "test",
            payload: text
        })
    }
}

