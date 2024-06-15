import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  initialState: {
    items: [{ id: 1, text: 'hi' }],
    currentTodo: null,
  },
  name: 'todos',
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    editTodo: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      state.items.splice(index, 1, action.payload);
      state.currentTodo = null;
    },
  },
});
export const { addTodo, deleteTodo, setCurrentTodo, editTodo } =
  todoSlice.actions;
