import { useState } from 'react'
import './App.css'
import MyRouter from './components/MyRouter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyRouter />
    </div>
  )
}

export default App
