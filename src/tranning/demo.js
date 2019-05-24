import { createStore } from 'redux';
import {status, sort} from "./actions/index";
import myReducer from "./reduces/index";
//2. bien khoi tao ban dau
// 1.Khai tao store, phai co reduce truyuen vào
const store = createStore(myReducer);
console.log("default", store.getState());
// 4. Tao action là obj, type ten action, action ko có tham sso
// var action = { type: "TOGGLE_STATUS"}; 
// 5.store truyền action vào để reducer phân tích
store.dispatch(status());
console.log("TOGGLE_STATUS", store.getState());

//vd # action co tham so
// var sortAction = {
//     type: "SORT",
//     sort: {
//         by: 'khanh',
//         value: -1
//     }
// }

store.dispatch(sort({
    by: 'khanh',
    value: -1
}));
console.log("sort", store.getState());
