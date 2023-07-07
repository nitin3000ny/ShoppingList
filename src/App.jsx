import { useState } from 'react'
import ShoppingListForm from './ShoppingLIstForm'
import ShoppingList from './ShoppingList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShoppingList/>
    </>
  )
}

export default App
