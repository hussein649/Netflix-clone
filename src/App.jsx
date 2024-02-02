import { useState } from 'react'
import './App.css'
import Home from './Components/Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1><Home/></h1>
    </>
  )
}

export default App
