import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: uuidv4(), text: 'Add button for adding todos', done: true },
      { id: uuidv4(), text: 'Add button for removing todos', done: true },
      { id: uuidv4(), text: 'Add checkbox for marking todos as done', done: true },
      { id: uuidv4(), text: 'Add completed counter', done: false }
    ],
    completedCount: 3
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo?.done) {
        state.completedCount--;
      }
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
        todo.done ? state.completedCount++ : state.completedCount--;
      }
    }
  }
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
