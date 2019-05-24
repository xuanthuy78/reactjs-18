var initialState = {
  by: "name",
  value: 1
};
// 3.Tao reducer ben trong co 2 bien state, action
var myReducer = (state = initialState, action) => {
  //6. Phan tích
  if (action.type === "SORT") {
    //luu gia tri moi o tên khác
    var { by, value } = action.sort;
    return {
        by,
        value
    };
    // //giu lieu dau tien bị thay đổi vì có dấu gán =
    // state.sort = {
    //     by: action.sort.by,
    //     value: action.sort.value
    //
  }

  return state;
};

export default myReducer;
