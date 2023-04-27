import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "kim",
  //=======state 수정 방법
  reducers: {
    changeName(state) {
      //state = kim 기존
      return "daegon song";
    },
    //========추가시에는
    // 함수작명(){

    // }
  },
});
//state 변경 함수들을 담음
// user.actions
export let { changeName } = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});
export default configureStore({
  reducer: {
    //  작명:user.reducer
    user: user.reducer,
    cart: cart.reducer,
  },
});
