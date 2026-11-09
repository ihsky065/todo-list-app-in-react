import { useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function ListUpTodo({todos}) {
  return(
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
    </ul>
  )
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  function addTodos() {
    setTodos([...todos, newTodos]);
    setNewTodos("")
  }

  return(
    <>
    <div className='m-3'>
      <input
      type="text"
      onChange={(event) => setNewTodos(event.target.value)}
      value={newTodos} />
      <button variant='primary' className='m-3' onClick={addTodos}>Add</button>
      <ListUpTodo todos={todos}/>
    </div>
    </>
  )
}

export default App
