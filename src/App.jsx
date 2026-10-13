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
}

export default App
