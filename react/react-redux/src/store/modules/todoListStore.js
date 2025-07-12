import { createSlice } from '@reduxjs/toolkit'

const todoList = createSlice({
  name: 'todoList',
  initialState: {
    list: [
      {id: 1, title: '学习react', completed: false},
      {id: 2, title: '学习vue', completed: true}
    ]
  },
  reducers: {
    
  }
})



export default todoList.reducer
