import React, { useState } from 'react';
import { Todo } from './types/todo';
import './App.css';

// PUBLIC_INTERFACE
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  // Add new todo
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: input.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>TaskEase</h1>
      
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">Add Task</button>
      </form>

      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
