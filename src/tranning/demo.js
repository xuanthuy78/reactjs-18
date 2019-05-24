import { createStore } from 'redux'
//2. bien khoi tao ban dau
var initialState = {
    status : false,
    sort: {
        by : 'name',
        value: 1
    }
}
// 3.Tao reducer ben trong co 2 bien state, action
var myReducer = (state = initialState, action) => {
    //6. Phan tích
    if(action.type === 'TOGGLE_STATUS'){
        state.status = !state.status
        return state;
    }

    if(action.type === 'SORT') {
        //luu gia tri moi o tên khác
        var {by, value} = action.sort;
        var { status } =  state;
        return {
            status : status,
            sort : {
                by : by, 
                value: value
            }
        }
        // //giu lieu dau tien bị thay đổi vì có dấu gán =
        // state.sort = {
        //     by: action.sort.by,
        //     value: action.sort.value
        // }
        console.log('adfdf', action)
    }

    return state;
}
// 1.Khai tao store, phai co reduce truyuen vào
const store = createStore(myReducer);
console.log("default", store.getState());
// 4. Tao action là obj, type ten action, action ko có tham sso
var action = { type: "TOGGLE_STATUS"}; 
// 5.store truyền action vào để reducer phân tích
store.dispatch(action);
console.log("TOGGLE_STATUS", store.getState());

//vd # action co tham so
var sortAction = {
    type: "SORT",
    sort: {
        by: 'khanh',
        value: -1
    }
}

store.dispatch(sortAction);
console.log("sort", store.getState());
