import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: uuidv4(), text: 'Add button for adding todos' },
    { id: uuidv4(), text: 'Add button for removing todos' },
    { id: uuidv4(), text: 'Add checkbox for marking todos as done' },
    { id: uuidv4(), text: 'Add completed counter' }
  ],
  reducers: {}
});

export default todosSlice.reducer;
