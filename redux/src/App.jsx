import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import './App.css'
import { addTodo, selectTodos, toggleTodo } from './todoSlice';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleAddToDo = () => {
    console.log("Step 1!!!")
    if(newTodo.trim() !== '') {
      dispatch(addTodo({text: newTodo}));
      setNewTodo('');
    }
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo({id}));
  }

  return (
    <>
      <h1>Todo List</h1>
      <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
      <button onClick={handleAddToDo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}
          onClick={() => handleToggleTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
