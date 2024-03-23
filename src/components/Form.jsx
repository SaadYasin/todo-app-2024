import PropTypes from 'prop-types'; // Import PropTypes// import { useState } from 'react'
import { FaPlusSquare } from "react-icons/fa";
const Form = ( {listItem, setListItem, items, setItems} ) => {
    // const [listItem, setListItem] = useState("")
    // const [items, setItems] = useState([])


    // Handle submit function
    const handleSubmit = (e) => {
        e.preventDefault()

        setItems([...items, listItem])
        setListItem("")
    }

  return (
      <div className="flex flex-col items-center pt-4">
          <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex justify-between items-center text-lg w-[360px] h-12 bg-orange-200 px-2 rounded-md">
              <input
                  onChange={(e) => setListItem(e.target.value)}
                  value={listItem}
                  type="text"
                  placeholder="Enter shopping item . . ."
                  className="bg-transparent w-full outline-none placeholder-slate-500"
              />
              <div className="flex">
                  <button
                      type="submit"
                      onClick = {(e) => handleSubmit(e)}
                        >
                      <FaPlusSquare className="text-4xl text-orange-500 cursor-pointer" />
                  </button>
              </div>
          </form>

        </div>
  )
}

Form.propTypes = {
    listItem: PropTypes.string.isRequired,
    setListItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    setItems: PropTypes.func.isRequired,
};

export default Form