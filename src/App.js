import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, setFilter } from './redux/todosSlice';

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos.items);
  const filter = useSelector(state => state.todos.filter)
  const completedCount = useSelector(state => state.todos.completedCount);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo({ id: Date.now(), text: input, done: false }));
      setInput('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.done;
    if (filter === 'incomplete') return !todo.done;
    return true;  // for 'all'
  });

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(setFilter('incomplete'))}>Incomplete</button>
      </div>

      <div>
        Completed Todos: {completedCount}
      </div>
    </div>
  );
}

export default App;
