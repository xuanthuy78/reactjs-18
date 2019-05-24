import * as types from "./../constans/ActionTypes";

export const status = () => {
    return  {
        type: types.TOGGLE_STATUS
    }
}

export  const sort = (sort) => {
    return {
        type: types.SORT,
        sort //sort : sor /sort tham so truyen vao {by: kanh,value: 1} 
    }
}