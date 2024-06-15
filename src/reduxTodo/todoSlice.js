import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  initialState: {
    items: [{ id: 1, text: 'hi' }],
  },
  name: 'todos',
  reducers: {},
});
