var initialState = false
// 3.Tao reducer ben trong co 2 bien state, action
var myReducer = (state = initialState, action) => {
    //6. Phan tích
    if(action.type === 'TOGGLE_STATUS'){
        state = !state
        return state;
    }
    return state;
}

export default myReducer;