import { useState } from 'react'
import ReduxCounter from './components/reduxComponents/reduxCounter'
import ReduxTodo from './components/reduxComponents/ReduxTodo'

function App() {
  return (
    <>
    <ReduxCounter></ReduxCounter>
    <ReduxTodo></ReduxTodo>
    </>
  )
}

export default App
