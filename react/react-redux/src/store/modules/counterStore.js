import { createSlice } from "@reduxjs/toolkit";
// 仓库中的一个子模块
const counter = createSlice({
  name: 'counter',  // 子模块的名称
  initialState: { // 子模块的初始状态
    count: 10,
    list: ['html', 'css', 'js']
  },  
  reducers: { // 修改数据的同步方法
    add(state) {
      state.count++;
    },
    addList(state, action) {
      state.list.push(action.payload)
    }
  }
})

const { add, addList } = counter.actions; // 导出修改数据的同步方法
export { add, addList }

const counterReducer = counter.reducer; // 导出子模块的reducer
export default counterReducer;