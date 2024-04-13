import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Convertor} from "./components/Convertor.tsx";

function App() {

  return (
      <div className="App">
          <Convertor/>
      </div>
  )
}

export default App
