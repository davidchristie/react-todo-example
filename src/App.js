import React from 'react'

import AddTodo from './components/AddTodo'
import DeleteCompleted from './components/DeleteCompleted'
import Header from './components/Header'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <TodoList />
      <AddTodo />
      <DeleteCompleted />
    </div>
  )
}

export default App
