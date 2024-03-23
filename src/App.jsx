import { useState } from 'react'
import Form from "./components/Form"
import Header from "./components/Header"
import ShoppingList from "./components/ShoppingList"

function App() {
    const [listItem, setListItem] = useState("")
    const [items, setItems] = useState([])

  return (
    <>
      <div className="bg-violet-200 min-h-screen">
        <Header />
        <Form 
          listItem={listItem}
          setListItem={setListItem}
          items={items}
          setItems = {setItems}
        />
        <ShoppingList 
          items = {items}
        />
      </div>
    </>
  )
}

export default App
