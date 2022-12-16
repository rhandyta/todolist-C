import { useState } from 'react'
import './App.css'
import TodoList from './Components/TodoList'
function App() {

  return (
    <div className='card'>
      <div className="card__heading">
        <h1>Todos</h1>
      </div>
      <div className="card__content">
        <TodoList/>
      </div>
    </div>
  )
}

export default App
