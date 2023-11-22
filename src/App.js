import logo from './logo.svg';
import './App.css';
import { useRef } from "react"
import { useState, useEffect } from 'react';
import Array from './components/Array';

function App() {
  const nameInput = useRef(null)
  const marksInput = useRef(null)

  // const [name, setName] = useState(null)
  // const [age, setAge] = useState(null)

  const [arr, setArr] = useState([])
  const [count, setCount] = useState(0)

  function handleSubmit(event) {
    const obj = {}
    event.preventDefault()
    obj.name = nameInput.current.value
    obj.marks = marksInput.current.value
    setArr([...arr, obj])
  }
  useEffect(() => {
    marksInput.current.value = ''
    nameInput.current.value = ''
  }, [arr])
  return (
    <div className="App">
      <div className='input'>
        <input type="text" ref={nameInput} placeholder="Name" />
        <input type="number" ref={marksInput} placeholder="Marks" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Array value={arr}></Array>
    </div>
  );
}

export default App;
