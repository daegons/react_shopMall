import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  //=======state 수정 방법
  reducers: {
    changeName(state) {
      //state = kim 기존
      state.name = 'park';
    },
    increase(state, action) {
      state.age = state.age + action.payload; //payload붙여줘야 파라미터에 입력갑 적용됨
    },
    //========추가시에는
    // 함수작명(){
    // }
  },
});
//state 변경 함수들을 담음
// user.actions
export let { changeName, increase } = user.actions;

export default user;
