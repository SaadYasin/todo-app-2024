import { useState } from 'react'
import Form from "./components/Form"
import Header from "./components/Header"
import ShoppingList from "./components/ShoppingList"

function App() {
  // const [listItem, setListItem] = useState("")
  const [listItem, setListItem] = useState( {name: "", done: false} )
    const [listItems, setListItems] = useState([])

  return (
    <>
      <div className="bg-violet-200 min-h-screen">
        <Header />
        <Form 
          listItem={listItem}
          setListItem={setListItem}
          listItems={listItems}
          setListItems = {setListItems}
        />
        <ShoppingList 
          listItems={listItems}
          setListItems = {setListItems}
        />
      </div>
    </>
  )
}

export default App
