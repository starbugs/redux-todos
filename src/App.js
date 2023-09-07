import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
