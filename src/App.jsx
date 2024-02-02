import { useState } from 'react'
import './App.css'
import Home from './Components/Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      
      <h1><Home/></h1>
    </div>
  )
}

export default App
