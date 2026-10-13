import { useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
      <button variant='primary' className='m-3' onClick={setTodos}>Add</button>
    </div>
    </>
  )
}

export default App
