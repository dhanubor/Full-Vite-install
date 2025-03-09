import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './component/Navber'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navber />
     <Home />
      <h1 className='text-center text-3xl'>Dahnu mondal</h1>
    </>
  )
}

export default App
