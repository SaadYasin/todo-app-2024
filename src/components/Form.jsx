import PropTypes from 'prop-types'; // Import PropTypes// import { useState } from 'react'
import { FaSquarePlus } from "react-icons/fa6";
const Form = ( {listItem, setListItem, listItems, setListItems} ) => {
    // const [listItem, setListItem] = useState("")
    // const [items, setItems] = useState([])


    // Handle submit function
    const handleSubmit = (e) => {
        e.preventDefault()

        // // Check the input (input should not be null)
        // if (listItem === "") {
        //     alert ("Enter an item please . . .")
        //     return
        // }

        setListItems([...listItems, listItem])
        setListItem({name: "", done: false})
    }

  return (
      <div className="flex flex-col items-center pt-4">
          <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex justify-between items-center text-lg w-[360px] h-12 bg-slate-200 px-2 rounded-md">
              <input
                  onChange={(e) => setListItem({name:e.target.value, done:false})}
                  value={listItem.name }
                  type="text"
                  placeholder="Enter shopping item . . ."
                  className="bg-transparent w-full outline-none placeholder-slate-500"
              />
              <div className="flex">
                  <button
                      type="submit"
                      onClick = {(e) => handleSubmit(e)}
                        >
                      <FaSquarePlus className="text-4xl text-orange-500 shadow-slate-500 rounded-md shadow-sm active:shadow-none cursor-pointer" />
                  </button>
              </div>
          </form>

        </div>
  )
}

Form.propTypes = {
    listItem: PropTypes.object.isRequired,
    setListItem: PropTypes.func.isRequired,
    listItems: PropTypes.array.isRequired,
    setListItems: PropTypes.func.isRequired,
};

export default Form