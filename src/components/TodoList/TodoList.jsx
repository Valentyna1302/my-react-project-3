import { useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newValue, setNewValue] = useState('');

  const handleDelete = id => {
    const newData = todos.filter(item => item.id !== id);
    setTodos(newData);
  };

  const addTodo = () => {
    const newObj = {
      id: crypto.randomUUID(),
      todo: newValue,
    };
    setTodos(prev => [...prev, newObj]);
    setNewValue('');
  };

  return (
    <div>
      <div className='flex'>
        <input value={newValue} onChange={e => setNewValue(e.target.value)} className={s.input} />
        <button onClick={addTodo} className='btn border'>
          Add
        </button>
      </div>

      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};
