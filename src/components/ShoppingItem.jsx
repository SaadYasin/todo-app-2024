import PropTypes from 'prop-types'
import { FaTrashAlt } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
const ShoppingItem = ({ listItem, listItems, setListItems }) => {
    // Handle delte of an item function 
  const handleDelete = (item) => {
    console.log('Item clicked of index', item)
    setListItems(listItems.filter((listItem) => listItem !== item))
  }
  return (
        <li
              key={listItem.name}
            className='flex items-center justify-between w-[340px] p-2 mb-1 bg-yellow-200 mx-auto rounded-sm'
          >
            {listItem.name}
            <div className="flex items-center gap-2">
              <IoCheckmark className="text-3xl text-white bg-green-600 rounded-sm shadow-slate-400 shadow-md cursor-pointer active:shadow-none"/>
              <FaTrashAlt
                onClick = {() => handleDelete(listItem)}
                className="text-3xl text-white bg-red-600 py-1 shadow-slate-400 rounded-sm shadow-md cursor-pointer active:shadow-none" />
            </div>
              
            </li>
  )
}
ShoppingItem.propTypes = {                    // Corrected property name
  listItem: PropTypes.object.isRequired,
  listItems: PropTypes.array.isRequired,
  setListItems: PropTypes.func.isRequired,
}

export default ShoppingItem