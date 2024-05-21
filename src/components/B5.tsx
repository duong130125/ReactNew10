import React, { useCallback, useState } from 'react'

export default function B5() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo('');
    }
  }, [newTodo]);

  return (
    <>
    <h3>Todo List</h3>
    <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
    />
    <button onClick={handleAddTodo}>Thêm</button>
    <ul>
        {todos.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
    </>
  )
}
