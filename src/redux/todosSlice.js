import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: uuidv4(), text: 'Add button for adding todos', done: true },
    { id: uuidv4(), text: 'Add button for removing todos', done: true },
    { id: uuidv4(), text: 'Add checkbox for marking todos as done', done: true },
    { id: uuidv4(), text: 'Add completed counter', done: false }
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    }
  }
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
